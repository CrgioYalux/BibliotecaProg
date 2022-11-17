import apiLendings from '../lendings/actions.js';
import api from '../api.js';

const { ENDPOINT, PATH } = api.utils;
const { 
    execGetReq,
    execPostReq,
    execDeleteReq,
    execPutReq
 } = api.reqs;

async function getBooks() {
    const getBooksRes = await execGetReq(ENDPOINT(PATH.BOOKS));
    return (getBooksRes.failed === true) ? [] : getBooksRes;
}

async function getUnlendedBooks() {
    const books = await getBooks();
    const lendings = await apiLendings.getLendings();

    const unlendedBooks = [];

    for (let x = 0; x < books.length; x++) {
        let counter = 0;
        for (let y = 0; y < lendings.length; y++) {
            if (books[x].id === lendings[y].libroId && lendings[y].fechaDevolucion === undefined) {
                counter++;
            }
        }
        if (counter === 0) {
            unlendedBooks.push(books[x]);
        }
    }

    return unlendedBooks;
}

async function saveBook(book) {
    const saveBookRes = await execPostReq(ENDPOINT(PATH.BOOKS), book);
    return (saveBookRes.failed === true) ? {} : saveBookRes;
}

async function editBook(bookID, book) {
    const editBookRes = await execPutReq(ENDPOINT(`${PATH.BOOKS}/${bookID}`), book);
    return (editBookRes.failed === true) ? {} : editBookRes;
}

async function deleteBook(bookID) {
    const deleteBookRes = await execDeleteReq(ENDPOINT(`${PATH.BOOKS}/${bookID}`));
    return (deleteBookRes.failed === true) ? {} : deleteBookRes;
}

const bookActions = {
    getBooks,
    saveBook,
    editBook,
    deleteBook,
    getUnlendedBooks
};

export default bookActions;
