import { getFormData } from '../form/getFormData.js';
import { saveDataBySection } from '../api/saveDataBySection.js';

function submitForm(event, currentSection) {
    event.preventDefault();

    const data = getFormData(event.target, currentSection);

    saveDataBySection(currentSection, data);
}

export {
    submitForm
}
