import apiBooks from './books/actions.js';
import apiLendings from './lendings/actions.js';
import apiStudents from './students/actions.js';

async function editDataBySection(section, id, data) {
    let editDataRes;

    if (section === 'bookSection') {
        editDataRes = await apiBooks.editBook(id, data);  
    } else if (section === 'lendingSection') {
        editDataRes = await apiLendings.editLending(id, data);
    }
    else {
        edit = await apiStudents.editStudent(id, data);
    }

    return editDataRes;
}

export {
    editDataBySection
}
