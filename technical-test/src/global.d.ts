interface BookmarkBase {
    preview: string;
    url: string;
    title: string;
    author: string;
    boomarkedDate: string;
    uploadDate: string;
}

type VideoBookmark = BookmarkBase & { duration: number };
type PhotoBookmark = BookmarkBase & { width: number; height: number };

type Bookmark = VideoBookmark | PhotoBookmark;
