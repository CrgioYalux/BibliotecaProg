import apiBooks from './books/actions.js';
import apiLendings from './lendings/actions.js';
import apiStudents from './students/actions.js';
import { SECTIONS } from '../const.js';

async function saveDataBySection(section, data) {
    let saveDataRes;

    if (section === SECTIONS.BOOKS) {
        const books = await apiBooks.getBooks();
        const existantBook = books.filter((book) => book.titulo === data.titulo);

        if (existantBook.length !== 0) return {
            failed: true,
            error: 'Ya existe un libro con el mismo titulo ingresado.'
        }

        saveDataRes = await apiBooks.saveBook(data);  
    } else if (section === SECTIONS.LENDINGS) {
        const { alumnoDni, ...restOfData } = data;

        const students = await apiStudents.getStudents();

        const existantStudent = students.filter((student) => student.dni === alumnoDni);

        if (existantStudent.length === 0) return {
            failed: true,
            error: 'No existe un usuario para el DNI ingresado.'
        };

        const save = {
            ...restOfData,
            fechaEntrega: new Date().toLocaleDateString(),
            alumnoId: existantStudent[0].id
        };

        saveDataRes = await apiLendings.saveLending(save);
    }
    else {
        const students = await apiStudents.getStudents();
        const existantStudent = students.filter((student) => student.dni === data.dni);

        if (existantStudent.length !== 0) return {
            failed: true,
            error: 'Ya existe un usuario con este dni.'
        }

        saveDataRes = await apiStudents.saveStudent(data);
    }

    return saveDataRes;
}

export {
    saveDataBySection
}
