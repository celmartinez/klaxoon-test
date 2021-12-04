import Bookmark from "../Bookmark";

type Props = {
    bookmarksList: Bookmark[];
    deleteBookmark: (bookmarkCreationDate: string) => void;
};

const BookmarkList = (props: Props) => {
    const { bookmarksList, deleteBookmark } = props;
    return (
        <div className="bookmark-list">
            {bookmarksList.map((bookmark: Bookmark) => (
                <Bookmark
                    key={bookmark.bookmarkedDate}
                    bookmark={bookmark}
                    deleteBookmark={deleteBookmark}
                />
            ))}
        </div>
    );
};

export default BookmarkList;
