import { useState } from "react";
import "./App.css";
import AddBookmarkForm from "./components/AddBookmarkForm";

function App() {
    const [bookmarksList, setBookmarksList] = useState<Bookmark[]>([]);

    const saveBookmark = (bookmark: Bookmark) => {
        setBookmarksList([...bookmarksList, bookmark]);
    };

    return (
        <div className="App">
            <AddBookmarkForm saveBookmark={saveBookmark} />
            {bookmarksList.map((bm: Bookmark) => (
                <>
                    <div>{bm.title}</div>
                    <img src={bm.preview} />
                </>
            ))}
        </div>
    );
}

export default App;
