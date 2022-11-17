import api from '../api.js';
import apiStudents from '../students/actions.js';
import apiBooks from '../books/actions.js';

const { ENDPOINT, PATH } = api.utils;
const { 
    execGetReq,
    execPostReq,
    execDeleteReq,
    execPutReq
 } = api.reqs;

async function getLendings() {
    const getLendingsRes = await execGetReq(ENDPOINT(PATH.LENDINGS));

    const books = await apiBooks.getBooks();
    const students = await apiStudents.getStudents();

    if (getLendingsRes.failed === true) return []

    const lendings = [];

    for (let x = 0; x < getLendingsRes.length; x++) {
        for (let y = 0; y < books.length; y++) {
            for (let z = 0; z < students.length; z++) {
                if (getLendingsRes[x].libroId === books[y].id && getLendingsRes[x].alumnoId === students[z].id) {
                    lendings.push({
                        ...getLendingsRes[x],
                        libro: books[y],
                        alumno: students[z] 
                    });
                }
            }
        }
    }

    return lendings;
}

async function getLending(lendingID) {
    const getLendingRes = await execPutReq(ENDPOINT(`${PATH.LENDINGS}/${lendingID}`));
    return (getLendingRes.failed === true) ? {} : getLendingRes;
}

async function saveLending(lending) {
    const saveLendingRes = await execPostReq(ENDPOINT(PATH.LENDINGS), lending);
    return (saveLendingRes.failed === true) ? {} : saveLendingRes;
}

async function editLending(lendingID, lending) {
    const editLendingRes = await execPutReq(ENDPOINT(`${PATH.LENDINGS}/${lendingID}`), lending);
    return (editLendingRes.failed === true) ? {} : editLendingRes;
}

async function deleteLending(lendingID) {
    const deleteLendingRes = await execDeleteReq(ENDPOINT(`${PATH.LENDINGS}/${lendingID}`));
    return (deleteLendingRes.failed === true) ? {} : deleteLendingRes;
}

async function deleteReturnedLendings() {
    const lendings = await getLendings();
    lendings.forEach((lending) => {
        if (lending.fechaDevolucion !== undefined) deleteLending(lending.id);
    });
}

async function deleteStudentReturnedLendings(studentId) {
    const lendings = await getLendings();
    lendings.forEach((lending) => {
        if (lending.fechaDevolucion !== undefined && lending.alumnoId === studentId) deleteLending(lending.id);
    });
}
const lendingActions = {
    getLendings,
    getLending,
    saveLending,
    editLending,
    deleteLending,
    deleteReturnedLendings,
    deleteStudentReturnedLendings
};

export default lendingActions;
