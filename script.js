import { changeSection } from './handlers/changeSection.js';
import { submitForm } from './handlers/submitForm.js';

const formBox = document.getElementById('formBox');
const dataListBox = document.getElementById('dataListBox');
const sectionsBox = document.getElementById('sectionsBox');

let currentSection;

const mainForm = document.getElementById('mainForm');
mainForm.addEventListener('submit', submitForm);

sectionsBox.addEventListener('change', (event) => {
    changeSection(event.target.id, dataListBox, formBox);
    currentSection = event.target.id;
});

(async () => {
    changeSection('bookSection', dataListBox, formBox);
    currentSection = 'bookSection';
})()
