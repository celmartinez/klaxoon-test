import { MouseEvent } from "react";
import { VIDEO } from "../../constants";
import { formatDate, formatTimeSince } from "../../utils";

type Props = {
    bookmark: Bookmark;
    deleteBookmark: (bookmarkCreationDate: string) => void;
};

const Bookmark = (props: Props) => {
    const { bookmark, deleteBookmark } = props;

    const handleClick = (_event: MouseEvent<HTMLButtonElement>) => {
        deleteBookmark(bookmark.bookmarkedDate);
    };

    return (
        <div className="bookmark-item">
            <p>{bookmark.title}</p>
            <p>{bookmark.author}</p>
            <p>{bookmark.url}</p>
            <p>{formatTimeSince(bookmark.bookmarkedDate)}</p>
            <p>
                {bookmark.uploadDate &&
                    formatDate(new Date(bookmark.uploadDate))}
            </p>
            <p>
                {bookmark.type === VIDEO
                    ? `${bookmark.duration}min`
                    : `${bookmark.width}x${bookmark.height}`}
            </p>
            <img src={bookmark.preview} alt="preview" />
            <button onClick={handleClick}>Delete</button>
        </div>
    );
};

export default Bookmark;
