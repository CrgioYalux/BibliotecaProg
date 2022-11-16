import { setForm } from './setForm.js';
import { setDataList } from './setDataList.js';
import apiStudents from './api/students/actions.js';
import apiLendings from './api/lendings/actions.js';
import apiBooks from './api/books/actions.js';

const formBox = document.getElementById('formBox');
const dataListBox = document.getElementById('dataListBox');
const sectionsBox = document.getElementById('sectionsBox');


async function getData(section = 'bookSection') {
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

async function handleChangeSections(event) {
    let currentSection = event.target.id;

    let data = await getData(currentSection);

    setForm(formBox, currentSection);
    setDataList(
        dataListBox,
        data,
        currentSection
    );
}

sectionsBox.addEventListener('change', handleChangeSections);

(async () => {
    const bookSection = document.getElementById('bookSection');
    const currentSection = bookSection.id;

    bookSection.checked = true;

    let data = await getData(currentSection);

    setForm(formBox, currentSection);

    setDataList(
        dataListBox,
        data,
        currentSection
    );
})()
