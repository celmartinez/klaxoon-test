import { ChangeEvent, FormEvent, useState } from "react";

const AddBookMarkForm = () => {
    const [inputValue, setinputValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setinputValue(event.target.value);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        // TODO: fetch bookmark metadata here  https://noembed.com/
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add a bookmark:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    );
};

export default AddBookMarkForm;
