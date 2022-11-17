import { changeSection } from './handlers/changeSection.js';
import { submitForm } from './handlers/submitForm.js';
import { fillForm } from './form/fillForm.js';
import { SECTIONS } from './const.js';

const formBox = document.getElementById('formBox');
const mainForm = document.getElementById('mainForm');
const dataListBox = document.getElementById('dataListBox');
const sectionsBox = document.getElementById('sectionsBox');

const formAddButton = document.getElementById('formAddButton');
const formEditButton = document.getElementById('formEditButton');
const formDeleteButton = document.getElementById('formDeleteButton');

let currentSection;
let selectedElementId = null;
let selectedElement = null;

function editingMode(isEditing, section) {
    if (isEditing) {
        formAddButton.disabled = true;
        formEditButton.disabled = false;
        formDeleteButton.disabled = false;

        fillForm(section, selectedElement);
    } else {
        formAddButton.disabled = false;
        formEditButton.disabled = true;
        formDeleteButton.disabled = true;

        mainForm.reset();
    }
}

mainForm.addEventListener('submit', (event) => {
    submitForm(event, currentSection, selectedElement);
});

sectionsBox.addEventListener('change', (event) => {
    changeSection(event.target.id, dataListBox, formBox);

    localStorage.setItem('lastUsedSection', event.target.id);

    currentSection = event.target.id;
});

dataListBox.addEventListener('change', (event) => {
    selectedElementId = event.target.id;
    selectedElement = JSON.parse(event.target.dataset.element);
    
    editingMode(true, currentSection);
});

dataListBox.addEventListener('click', (event) => {
    if (event.target.id === selectedElementId) {
        event.target.checked = false;
        selectedElementId = null;
        selectedElement = null;

        editingMode(false, currentSection);
    }
});

(async () => {
    editingMode(false, currentSection);

    const lastUsedSection = localStorage.getItem('lastUsedSection') ?? SECTIONS.BOOKS;

    changeSection(lastUsedSection, dataListBox, formBox);

    currentSection = lastUsedSection;
})()
