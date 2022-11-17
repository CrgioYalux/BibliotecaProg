import apiBooks from './books/actions.js';
import apiLendings from './lendings/actions.js';
import apiStudents from './students/actions.js';
import { SECTIONS } from '../const.js';

async function saveDataBySection(section, data) {
    let saveDataRes;

    if (section === SECTIONS.BOOKS) {
        saveDataRes = await apiBooks.saveBook(data);  
    } else if (section === SECTIONS.LENDINGS) {
        const { alumnoDni, ...restOfData } = data;

        const students = await apiStudents.getStudents();

        const existantStudent = students.filter((student) => student.dni === alumnoDni);

        if (existantStudent.length === 0) return false;

        const save = {
            ...restOfData,
            fechaEntrega: new Date().toLocaleDateString(),
            alumnoId: existantStudent[0].id
        };

        saveDataRes = await apiLendings.saveLending(save);
    }
    else {
        saveDataRes = await apiStudents.saveStudent(data);
    }

    return saveDataRes;
}

export {
    saveDataBySection
}
