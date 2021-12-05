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
            {bookmark.preview && <img src={bookmark.preview} alt="preview" />}
            <div>
                <h4>{bookmark.title ?? null}</h4>
                <p>{bookmark.author ? `by ${bookmark.author}` : null}</p>
                <a href={bookmark.url} target="_blank" rel="noreferrer">
                    {bookmark.url}
                </a>
                <p>
                    {bookmark.bookmarkedDate
                        ? `added ${formatTimeSince(bookmark.bookmarkedDate)}`
                        : null}
                </p>
                <p>
                    {bookmark.uploadDate &&
                        formatDate(new Date(bookmark.uploadDate))}
                </p>
                <p>
                    {bookmark.type === VIDEO
                        ? bookmark.duration &&
                          `${Math.floor(bookmark.duration / 60)}min${Math.floor(
                              bookmark.duration % 60
                          )}`
                        : bookmark.width &&
                          bookmark.height &&
                          `${bookmark.width}x${bookmark.height}`}
                </p>
            </div>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
};

export default Bookmark;
