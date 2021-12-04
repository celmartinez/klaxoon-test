import { MouseEvent } from "react";
import { VIDEO } from "../../constants";

type Props = {
    bookmark: Bookmark;
    deleteBookmark: (bookmarkUrl: string) => void;
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
            <p>{bookmark.bookmarkedDate}</p>
            <p>{bookmark.uploadDate}</p>
            <p>
                {bookmark.type === VIDEO
                    ? bookmark.duration
                    : `${bookmark.width}x${bookmark.height}`}
            </p>
            <img src={bookmark.preview} alt="preview" />
            <button onClick={handleClick}>Delete</button>
        </div>
    );
};

export default Bookmark;
