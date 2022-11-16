import api from '../api.js';

async function getStudents() {
    const { execGetReq } = api.reqs;
    const { ENDPOINT, PATH } = api.utils;

    const getStudentsRes = await execGetReq(ENDPOINT(PATH.STUDENTS));
    return (getStudentsRes.failed === true) ? [] : getStudentsRes;
}

const studentActions = {
    getStudents
};

export default studentActions;
