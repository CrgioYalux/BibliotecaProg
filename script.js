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

function getFormData(formElement, section) {
    let data; 
    let inputs = formElement.children[0].children;

    if (inputs === undefined) return false;

    if (section === 'bookSection') {
        data = {
            titulo: inputs[0].lastChild.value,
            autor: inputs[1].lastChild.value,
        }
    } else if (section === 'lendingSection') {
        data = {
            fechaEntrega: inputs[0].lastChild.value,
            fechaDevolucion: inputs[1].lastChild.value,
            libro: inputs[2].lastChild.value,
            dniAlumno: inputs[3].lastChild.value
        }
    }
    else {
        data = {
            dni: inputs[0].lastChild.value,
            nombre: inputs[1].lastChild.value,
            direccion: inputs[2].lastChild.value
        }
    }

    return data ?? false;
}

let currentSection = 'bookSection';

function handleSubmitForm(event) {
    event.preventDefault();

    const data = getFormData(event.target, currentSection);
}


const mainForm = document.getElementById('mainForm');
mainForm.addEventListener('submit', handleSubmitForm);

async function handleChangeSection(setSection) {
    const section = document.getElementById(setSection);
    section.checked = true;
    currentSection = setSection;

    let data = await getData(currentSection);

    setDataList(
        dataListBox,
        data,
        currentSection
    );

    if (currentSection === 'bookSection' || currentSection === 'studentSection') {
        setForm(formBox, currentSection);
    }

    const books = await apiBooks.getBooks();
    const formattedBooks = books.map((book) => ({
        value: book.ID,
        text: book.titulo
    }));
    setForm(formBox, currentSection, formattedBooks);
}

sectionsBox.addEventListener('change', (event) => {
    handleChangeSection(event.target.id);
});

(async () => {
    handleChangeSection('bookSection');
})()
