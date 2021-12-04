import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FLICKR_NAME, VIMEO_NAME } from "../../constants";
import { formatBookmarkObject } from "../../utils";

type Props = {
    saveBookmark: (bookmark: Bookmark) => void;
};

const AddBookMarkForm = (props: Props) => {
    const { saveBookmark } = props;
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (inputValue && error) setError("");
    }, [inputValue, error]);

    const fetchBookmarkMetadata = async () => {
        setIsLoading(true);
        setInputValue("");
        try {
            const response = await fetch(
                `http://noembed.com/embed?url=${inputValue}`
            );
            const bookmarkMetaData = await response.json();
            if (bookmarkMetaData.error) {
                setError(bookmarkMetaData.error);
                return;
            }
            if (
                bookmarkMetaData.provider_name === FLICKR_NAME ||
                bookmarkMetaData.provider_name === VIMEO_NAME
            ) {
                const bookmarkFormated: Bookmark | null =
                    formatBookmarkObject(bookmarkMetaData);
                if (bookmarkFormated) saveBookmark(bookmarkFormated);
                return;
            }
            setError("link not supported");
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setInputValue(event.target.value);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (inputValue) fetchBookmarkMetadata();
        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Add a bookmark:
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                    />
                </label>
                <input
                    type="submit"
                    disabled={isLoading || !inputValue}
                    value="Go"
                />
            </form>
            <p className="error">{error}</p>
        </>
    );
};

export default AddBookMarkForm;
