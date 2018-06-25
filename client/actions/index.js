export const select = (book) => {

    return {
        type: 'BOOK_SELECTED',
        payload: book,
    }
};