import { useState } from "react";
import "./App.css";
import AddBookmarkForm from "./components/AddBookmarkForm";
import BookmarkList from "./components/BookmarkList";

function App() {
    const [bookmarksList, setBookmarksList] = useState<Bookmark[]>([]);

    const saveBookmark = (bookmark: Bookmark) => {
        setBookmarksList([...bookmarksList, bookmark]);
    };

    return (
        <div className="App">
            <AddBookmarkForm saveBookmark={saveBookmark} />
            <BookmarkList bookmarksList={bookmarksList} />
        </div>
    );
}

export default App;
