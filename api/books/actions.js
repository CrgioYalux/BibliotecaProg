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
    deleteBook
};

export default bookActions;
