import api from '../api.js';

const { ENDPOINT, PATH } = api.utils;
const { 
    execGetReq,
    execPostReq,
    execDeleteReq,
    execPutReq
 } = api.reqs;

async function getStudents() {
    const getStudentsRes = await execGetReq(ENDPOINT(PATH.STUDENTS));
    return (getStudentsRes.failed === true) ? [] : getStudentsRes;
}

async function saveStudent(student) {
    const saveStudentRes = await execPostReq(ENDPOINT(PATH.STUDENTS), student);
    return (saveStudentRes.failed === true) ? {} : saveStudentRes;
}

async function editStudent(studentID, student) {
    const editStudentRes = await execPutReq(ENDPOINT(`${PATH.STUDENTS}/${studentID}`), student);
    return (editStudentRes.failed === true) ? {} : editStudentRes;
}

async function deleteStudent(studentID) {
    const deleteStudentRes = await execDeleteReq(ENDPOINT(`${PATH.STUDENTS}/${studentID}`));
    return (deleteStudentRes.failed === true) ? {} : deleteStudentRes;
}

const studentActions = {
    getStudents,
    saveStudent,
    editStudent,
    deleteStudent
};

export default studentActions;
