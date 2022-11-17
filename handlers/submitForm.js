import { getFormData } from '../form/getFormData.js';
import { saveDataBySection } from '../api/saveDataBySection.js';
import { deleteDataBySection } from '../api/deleteDataBySection.js';

function submitForm(event, currentSection, selected) {
    event.preventDefault();

    const data = getFormData(event.target, currentSection);

    if (event.submitter.id === 'formAddButton') {
        saveDataBySection(currentSection, data);
    }
    else if (event.submitter.id === 'formEditButton') {
        // editDataBySection(...) 
    }
    else {
        deleteDataBySection(currentSection, selected.id);
    }
}

export {
    submitForm
}
