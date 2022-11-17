import apiBooks from './books/actions.js';
import apiLendings from './lendings/actions.js';
import apiStudents from './students/actions.js';
import { SECTIONS } from '../const.js';

async function getDataBySection(section) {
    let getDataRes = [];

    if (section === SECTIONS.BOOKS) {
        getDataRes = await apiBooks.getBooks();
    } else if (section === SECTIONS.LENDINGS) {
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
