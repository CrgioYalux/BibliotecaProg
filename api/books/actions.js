import api from '../api.js';

async function getBooks() {
    const { execGetReq } = api.reqs;
    const { ENDPOINT, PATH } = api.utils;

    const getBooksRes = await execGetReq(ENDPOINT(PATH.BOOKS));
    return (getBooksRes.failed === true) ? [] : getBooksRes;
}

const bookActions = {
    getBooks 
};

export default bookActions;
