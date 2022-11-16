import apiBooks from './books/actions.js';
import apiLendings from './lendings/actions.js';
import apiStudents from './students/actions.js';

async function getDataBySection(section = 'bookSection') {
    let data = [];

    if (section === 'bookSection') {
        data = await apiBooks.getBooks();
    } else if (section === 'lendingSection') {
        data = await apiLendings.getLendings();
    }
    else {
        data = await apiStudents.getStudents();
    }

    return data;
}

export {
    getDataBySection
}