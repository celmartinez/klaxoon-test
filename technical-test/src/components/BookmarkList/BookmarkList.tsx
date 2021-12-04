import Bookmark from "../Bookmark";

type Props = {
    bookmarksList: Bookmark[];
};

const BookmarkList = (props: Props) => {
    const { bookmarksList } = props;
    return (
        <div className="bookmark-list">
            {bookmarksList.map((bookmark: Bookmark) => (
                <Bookmark bookmark={bookmark} />
            ))}
        </div>
    );
};

export default BookmarkList;
