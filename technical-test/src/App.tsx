import { useState } from "react";
import "./App.css";
import AddBookmarkForm from "./components/AddBookmarkForm";
import BookmarkList from "./components/BookmarkList";

function App() {
    const [bookmarksList, setBookmarksList] = useState<Bookmark[]>([]);

    const saveBookmark = (bookmark: Bookmark) => {
        setBookmarksList([bookmark, ...bookmarksList]);
    };

    const deleteBookmark = (bookmarkedDate: string) => {
        const index = bookmarksList.findIndex(
            (bm) => bm.bookmarkedDate === bookmarkedDate
        );
        if (index > -1) {
            const newBookmarkList = [...bookmarksList];
            newBookmarkList.splice(index, 1);
            setBookmarksList(newBookmarkList);
        }
    };

    return (
        <div className="App">
            <h2>My Bookmark App</h2>
            <AddBookmarkForm saveBookmark={saveBookmark} />
            <BookmarkList
                bookmarksList={bookmarksList}
                deleteBookmark={deleteBookmark}
            />
        </div>
    );
}

export default App;
