import apiBooks from './books/actions.js';
import apiLendings from './lendings/actions.js';
import apiStudents from './students/actions.js';

async function saveDataBySection(section, data) {
    let saveDataRes;

    if (section === 'bookSection') {
        saveDataRes = await apiBooks.saveBook(data);  
    } else if (section === 'lendingSection') {
        const { alumnoDni, ...restOfData } = data;

        const students = await apiStudents.getStudents();

        const existantStudent = students.filter((student) => student.dni === alumnoDni);

        if (existantStudent.length === 0) return false;

        const save = {
            ...restOfData,
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
