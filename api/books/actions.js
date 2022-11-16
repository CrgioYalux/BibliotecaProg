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

async function addBook(book) {
    const addBookRes = await execPostReq(ENDPOINT(PATH.BOOKS), book);
    return (addBookRes.failed === true) ? {} : addBookRes;
}

async function editBook(book) {
    const editBookRes = await execPutReq(ENDPOINT(PATH.BOOKS), book);
    return (editBookRes.failed === true) ? {} : editBookRes;
}

async function deleteBook(bookID) {
    const deleteBookRes = await execDeleteReq(ENDPOINT(`${PATH.BOOKS}/${bookID}`));
    return (deleteBookRes.failed === true) ? {} : deleteBookRes;
}

const bookActions = {
    getBooks,
    addBook,
    editBook,
    deleteBook
};

export default bookActions;
