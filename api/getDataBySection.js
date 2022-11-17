import apiBooks from './books/actions.js';
import apiLendings from './lendings/actions.js';
import apiStudents from './students/actions.js';

async function getDataBySection(section) {
    let getDataRes = [];

    if (section === 'bookSection') {
        getDataRes = await apiBooks.getBooks();
    } else if (section === 'lendingSection') {
        getDataRes = await apiLendings.getLendings();
    }
    else {
        getDataRes = await apiStudents.getStudents();
    }

    return getDataRes;
}

export {
    getDataBySection
}
