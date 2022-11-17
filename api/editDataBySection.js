import apiBooks from './books/actions.js';
import apiLendings from './lendings/actions.js';
import apiStudents from './students/actions.js';

async function editDataBySection(section, id, data) {
    let editDataRes;

    if (section === 'bookSection') {
        editDataRes = await apiBooks.editBook(id, {
                titulo: data.titulo,
                autor: data.autor
            }
        );  
    } else if (section === 'lendingSection') {
        const students = await apiStudents.getStudents();

        const existantStudent = students.filter((student) => student.dni === data.alumnoDni);

        if (existantStudent.length === 0) return false;

        editDataRes = await apiLendings.editLending(id, {
            fechaEntrega: data.fechaEntrega,
            fechaDevolucion: data.fechaDevolucion,
            libroId: data.libroId,
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
