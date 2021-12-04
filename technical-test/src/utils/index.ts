import { FLICKR_NAME, PHOTO, VIDEO, VIMEO_NAME } from "../constants";

export const formatBookmarkObject = (bookmark: any) => {
    const {
        url,
        title,
        thumbnail_url,
        author_name,
        author_url,
        provider_name,
        upload_date,
        width,
        height,
        duration,
    } = bookmark;
    const bookmarkedDate = new Date().toISOString(); // TODO: format like that (il y a une heure, il y a 2 minutes...)
    const uploadDate = upload_date; // TODO: format like that (le 3 novembre 2020
    if (provider_name === FLICKR_NAME)
        return {
            type: PHOTO as PHOTO,
            preview: thumbnail_url,
            url,
            title,
            author: author_name ?? author_url,
            bookmarkedDate,
            uploadDate,
            width,
            height,
        };
    else if (provider_name === VIMEO_NAME) {
        return {
            type: VIDEO as VIDEO,
            preview: thumbnail_url,
            url,
            title,
            author: author_name ?? author_url,
            bookmarkedDate,
            uploadDate,
            duration,
        };
    }
    return null;
};
