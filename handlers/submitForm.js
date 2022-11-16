import { getFormData } from '../form/getFormData.js';

async function submitForm(event) {
    event.preventDefault();

    const data = getFormData(event.target, currentSection);
}

export {
    submitForm
}