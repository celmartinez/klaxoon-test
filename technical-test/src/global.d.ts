const VIDEO = "VIDEO";
type VIDEO = typeof VIDEO;
const PHOTO = "PHOTO";
type PHOTO = typeof PHOTO;

type BookmarkBase<T> = {
    preview: string;
    url: string;
    title: string;
    author: string;
    bookmarkedDate: string;
    uploadDate: string;
} & T;

type VideoBookmark = BookmarkBase<{ type: VIDEO; duration: number }>;
type PhotoBookmark = BookmarkBase<{
    type: PHOTO;
    width: number;
    height: number;
}>;

type Bookmark = VideoBookmark | PhotoBookmark;
