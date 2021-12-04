import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const AddBookMarkForm = () => {
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (error) setError("");
    }, [inputValue]);

    const fetchBookmarkMetadata = async () => {
        setIsLoading(true);
        setInputValue("");
        try {
            const response = await fetch(
                `http://noembed.com/embed?url=${inputValue}`
            );
            const bookmarkMetaData = await response.json();
            console.log("bookmarkMetaData :>> ", bookmarkMetaData);
            if (bookmarkMetaData.error) setError(bookmarkMetaData.error);
            return bookmarkMetaData;
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
            {error}
        </>
    );
};

export default AddBookMarkForm;
