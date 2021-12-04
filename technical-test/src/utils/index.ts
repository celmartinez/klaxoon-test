import { FLICKR_NAME, PHOTO, VIDEO, VIMEO_NAME } from "../constants";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const formatDate = (date: Date) =>
    `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

export const formatTimeSince = (date: string) => {
    const dateDiff = new Date().valueOf() - new Date(date).valueOf();
    const seconds = Math.floor(dateDiff / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) return `${Math.floor(interval)} years ago`;
    interval = seconds / 2592000;
    if (interval > 1) return `${Math.floor(interval)} months ago`;
    interval = seconds / 86400;
    if (interval > 1) return `${Math.floor(interval)} days ago`;
    interval = seconds / 3600;
    if (interval > 1) return `${Math.floor(interval)} hours ago`;
    interval = seconds / 60;
    if (interval > 1) return `${Math.floor(interval)} minutes ago`;
    return `${Math.floor(seconds)} seconds ago`;
};

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
    const bookmarkedDate = new Date().toISOString();
    if (provider_name === FLICKR_NAME)
        return {
            type: PHOTO as PHOTO,
            preview: thumbnail_url,
            url,
            title,
            author: author_name ?? author_url,
            bookmarkedDate,
            uploadDate: upload_date,
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
            uploadDate: upload_date,
            duration,
        };
    }
    return null;
};
