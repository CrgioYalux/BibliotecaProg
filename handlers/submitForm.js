import { getFormData } from '../form/getFormData.js';
import { saveDataBySection } from '../api/saveDataBySection.js';
import { deleteDataBySection } from '../api/deleteDataBySection.js';
import { editDataBySection } from '../api/editDataBySection.js';

function submitForm(event, currentSection, selectedId) {
    event.preventDefault();

    const data = getFormData(event.target, currentSection);

    if (event.submitter.id === 'formAddButton') {
        saveDataBySection(currentSection, data);
    }
    else if (event.submitter.id === 'formEditButton') {
        editDataBySection(currentSection, selectedId, data);
    }
    else {
        deleteDataBySection(currentSection, selectedId);
    }
}

export {
    submitForm
}
