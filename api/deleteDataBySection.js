import apiBooks from './books/actions.js';
import apiLendings from './lendings/actions.js';
import apiStudents from './students/actions.js';

async function deleteDataBySection(section, id) {
    let deleteDataRes;

    if (section === 'bookSection') {
        deleteDataRes = await apiBooks.deleteBook(id);  
    } else if (section === 'lendingSection') {
        deleteDataRes = await apiLendings.deleteLending(id);
    }
    else {
        deleteDataRes = await apiStudents.deleteStudent(id);
    }

    return deleteDataRes;
}

export {
    deleteDataBySection
}
