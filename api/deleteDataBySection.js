import apiBooks from './books/actions.js';
import apiLendings from './lendings/actions.js';
import apiStudents from './students/actions.js';
import { SECTIONS } from '../const.js';

async function deleteDataBySection(section, id) {
    let deleteDataRes;
    if (section === SECTIONS.BOOKS) {
        const lendings = await apiLendings.getLendings();

        /* 
        * Habilita eliminacion en caso de que el libro ya haya sido devuelto
        * Además, al eliminar el libro, también elimina los prestamos devueltos de este
        
        const existantLending = lendings.filter((lending) => (lending.libroId === id && lending.fechaDevolucion === undefined));

        if (existantLending.length !== 0) return {
            failed: true,
            error: 'No se puede eliminar un libro prestado.'
        };

        const returnedLendings = lendings.filter((lending) => (lending.libroId === id && lending.fechaDevolucion !== undefined));
        if (returnedLendings.length !== 0) apiLendings.deleteLending(id);
        */

        const existantLending = lendings.filter((lending) => (lending.libroId === id));
        if (existantLending.length !== 0) return {
            failed: true,
            error: 'No se puede eliminar un libro que fue prestado alguna vez.'
        }

        deleteDataRes = await apiBooks.deleteBook(id);  
    } else if (section === SECTIONS.LENDINGS) {
        /*
        * Habilita la eliminación de prestamos ya devueltos
        const lending = await apiLendings.getLending(id);

        if (lending.fechaDevolucion === undefined) return {
            failed: true,
            error: "No se puede eliminar un prestamo no devuelto."
        }

        deleteDataRes = await apiLendings.deleteLending(id);
        */

        return {
            failed: true,
            error: "No se pueden eliminar prestamos."
        }
    }
    else {
        const lendings = await apiLendings.getLendings();
        
        const existantLendings = lendings.filter((lending) => (lending.alumnoId === id && lending.fechaDevolucion === undefined));

        if (existantLendings.length !== 0) return {
            failed: true,
            error: 'No se puede eliminar un usuario que tiene prestamos.'
        }

        const returnedLendings = lendings.filter((lending) => (lending.alumnoId === id && lending.fechaDevolucion !== undefined));
        if (returnedLendings.length !== 0) apiLendings.deleteStudentReturnedLendings(id);

        deleteDataRes = await apiStudents.deleteStudent(id);
    }

    return deleteDataRes;
}

export {
    deleteDataBySection
}
