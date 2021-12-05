import BookmarkItem from "../BookmarkItem";

type Props = {
    bookmarksList: Bookmark[];
    deleteBookmark: (bookmarkCreationDate: string) => void;
};

const BookmarkList = (props: Props) => {
    const { bookmarksList, deleteBookmark } = props;
    return (
        <div className="bookmark-list">
            {bookmarksList.length > 0
                ? bookmarksList.map((bookmark: Bookmark) => (
                      <BookmarkItem
                          key={bookmark.bookmarkedDate}
                          bookmark={bookmark}
                          deleteBookmark={deleteBookmark}
                      />
                  ))
                : "Your bookmark list is empty"}
        </div>
    );
};

export default BookmarkList;
