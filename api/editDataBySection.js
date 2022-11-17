import apiBooks from './books/actions.js';
import apiLendings from './lendings/actions.js';
import apiStudents from './students/actions.js';
import { SECTIONS } from '../const.js';

async function editDataBySection(section, id, data, returningBook = false) {
    let editDataRes;

    if (section === SECTIONS.BOOKS) {
        const lendings = await apiLendings.getLendings();
        const existantLending = lendings.filter((lending) => (lending.libroId === id && lending.fechaDevolucion === undefined))

        if (existantLending.length !== 0) return {
            failed: true,
            error: 'No se puede editar un libro prestado.'
        };

        editDataRes = await apiBooks.editBook(id, {
                titulo: data.titulo,
                autor: data.autor
            }
        );  
    } else if (section === SECTIONS.LENDINGS) {
        /*
        * Habilita la edición de un prestamo

        if (existantStudent.length === 0 || currentLending.length === 0) return false;

        editDataRes = await apiLendings.editLending(id, {
            ...data,
            fechaEntrega: currentLending[0].fechaEntrega,
            fechaDevolucion: new Date().toLocaleDateString(),
            alumnoId: existantStudent[0].id
        });
        */

        if (!returningBook) return {
            failed: true,
            error: "No se pueden editar prestamos."
        }

        const lendings = await apiLendings.getLendings();
        const students = await apiStudents.getStudents();

        const existantStudent = students.filter((student) => student.dni === data.alumnoDni);
        const currentLending = lendings.filter((lending) => lending.id === id); 


        if (currentLending[0].fechaDevolucion !== undefined) return {
            failed: true,
            error: 'Este prestamo ya fue devuelto anteriormente.'
        }

        if (existantStudent.length === 0 || currentLending.length === 0) return {
            failed: true,
            error: 'No se encontro el alumno y/o el prestamo.'
        };

        editDataRes = await apiLendings.editLending(id, {
            ...data,
            fechaEntrega: currentLending[0].fechaEntrega,
            fechaDevolucion: new Date().toLocaleDateString(),
            alumnoId: existantStudent[0].id
        });
    }
    else {
        editDataRes = await apiStudents.editStudent(id, {
            dni: data.dni,
            direccion: data.direccion,
            nombre: data.nombre
        });
    }

    return editDataRes;
}

export {
    editDataBySection
}
