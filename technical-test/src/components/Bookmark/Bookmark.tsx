import { VIDEO } from "../../constants";

type Props = {
    bookmark: Bookmark;
};

const Bookmark = (props: Props) => {
    const { bookmark } = props;
    return (
        <div className="bookmark-item">
            <p>{bookmark.title}</p>
            <p>{bookmark.author}</p>
            <p>{bookmark.url}</p>
            <p>{bookmark.boomarkedDate}</p>
            <p>{bookmark.uploadDate}</p>
            <p>
                {bookmark.type === VIDEO
                    ? bookmark.duration
                    : `${bookmark.width}x${bookmark.height}`}
            </p>
            <img src={bookmark.preview} />
        </div>
    );
};

export default Bookmark;
