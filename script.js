import { changeSection } from './handlers/changeSection.js';
import { submitForm } from './handlers/submitForm.js';

const formBox = document.getElementById('formBox');
const mainForm = document.getElementById('mainForm');
const dataListBox = document.getElementById('dataListBox');
const sectionsBox = document.getElementById('sectionsBox');

const formAddButton = document.getElementById('formDeleteButton');
const formEditButton = document.getElementById('formDeleteButton');
const formDeleteButton = document.getElementById('formDeleteButton');

const SECTIONS = {
    BOOKS: "BOOKS",
    LENDINGS: "LENDINGS",
    STUDENTS: "STUDENTS"
};

let currentSection;

mainForm.addEventListener('submit', (event) => {
    submitForm(event, currentSection);
});

sectionsBox.addEventListener('change', (event) => {
    changeSection(event.target.id, dataListBox, formBox);

    localStorage.setItem('lastUsedSection', event.target.id);

    currentSection = event.target.id;
});

(async () => {
    const lastUsedSection = localStorage.getItem('lastUsedSection') ?? 'bookSection';

    changeSection(lastUsedSection, dataListBox, formBox);

    currentSection = lastUsedSection;
})()
