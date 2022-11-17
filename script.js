import { changeSection } from './handlers/changeSection.js';
import { submitForm } from './handlers/submitForm.js';
import { fillForm } from './form/fillForm.js';

const formBox = document.getElementById('formBox');
const mainForm = document.getElementById('mainForm');
const dataListBox = document.getElementById('dataListBox');
const sectionsBox = document.getElementById('sectionsBox');

const formAddButton = document.getElementById('formAddButton');
const formEditButton = document.getElementById('formEditButton');
const formDeleteButton = document.getElementById('formDeleteButton');

const SECTIONS = {
    BOOKS: "bookSection",
    LENDINGS: "lendingSection",
    STUDENTS: "studentSection"
};

let currentSection;
let editingElementId = null;
let editingElement = null;

function editingMode(isEditing, section) {
    if (isEditing) {
        formAddButton.disabled = true;
        formEditButton.disabled = false;
        formDeleteButton.disabled = false;

        fillForm(section);

    } else {
        formAddButton.disabled = false;
        formEditButton.disabled = true;
        formDeleteButton.disabled = true;

        mainForm.reset();
    }
}

mainForm.addEventListener('submit', (event) => {
    if (event.submitter.id === 'formAddButton') {
        submitForm(event, currentSection);
    }
    if (event.submitter.id === 'formEditButton') {
        // editElement(event, currentSection);
    }
});

sectionsBox.addEventListener('change', (event) => {
    changeSection(event.target.id, dataListBox, formBox);

    localStorage.setItem('lastUsedSection', event.target.id);

    currentSection = event.target.id;
});

dataListBox.addEventListener('change', (event) => {
    editingElementId = event.target.id;
    editingElement = JSON.parse(event.target.dataset.element);
    
    editingMode(true, currentSection);
});

dataListBox.addEventListener('click', (event) => {
    if (event.target.id === editingElementId) {
        event.target.checked = false;
        editingElementId = null;
        editingElement = null;

        editingMode(false, currentSection);
    }
});


(async () => {
    editingMode(false, currentSection);

    const lastUsedSection = localStorage.getItem('lastUsedSection') ?? SECTIONS.BOOKS;

    changeSection(lastUsedSection, dataListBox, formBox);

    currentSection = lastUsedSection;
})()
