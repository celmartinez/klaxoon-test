import { FLICKR_NAME, VIMEO_NAME } from "../constants";

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
    const boomarkedDate = new Date().toISOString(); // TODO: format like that (il y a une heure, il y a 2 minutes...)
    const uploadDate = upload_date; // TODO: format like that (le 3 novembre 2020
    if (provider_name === FLICKR_NAME)
        return {
            preview: thumbnail_url,
            url,
            title,
            author: author_name ?? author_url,
            boomarkedDate,
            uploadDate,
            width,
            height,
        };
    else if (provider_name === VIMEO_NAME) {
        return {
            preview: thumbnail_url,
            url,
            title,
            author: author_name ?? author_url,
            boomarkedDate,
            uploadDate,
            duration,
        };
    }
    return null;
};
