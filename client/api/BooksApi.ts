import { ALL_EBOOKS_ENDPOINT, FREE_BOOKS_ENDPOINT, GOOGLE_BOOKS_URL, KEY_HEADER } from './APIConfig';
import { getData } from './APIHelper';

export const getFreeEBooks = async () => {
    const endpoint = FREE_BOOKS_ENDPOINT + KEY_HEADER;

    return await getData(GOOGLE_BOOKS_URL, endpoint);
};

export const getAllEbooks = async (bookName: any) => {
    const endpoint =
        ALL_EBOOKS_ENDPOINT + bookName + "&maxResults=4" +KEY_HEADER;
    return await getData(GOOGLE_BOOKS_URL, endpoint);
};
