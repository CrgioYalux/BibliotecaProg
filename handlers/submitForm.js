import { getFormData } from '../form/getFormData.js';
import { saveDataBySection } from '../api/saveDataBySection.js';
import { deleteDataBySection } from '../api/deleteDataBySection.js';
import { editDataBySection } from '../api/editDataBySection.js';

async function submitForm(event, currentSection, selectedId) {
    event.preventDefault();

    const data = getFormData(event.target, currentSection);

    let res;

    if (event.submitter.id === 'formAddButton') {
        res = await saveDataBySection(currentSection, data);
    }
    else if (event.submitter.id === 'formEditButton' || event.submitter.id === 'formReturnButton') {
        let returningMode = event.submitter.id === 'formEditButton' ? false : true;
        res = await editDataBySection(currentSection, selectedId, data, returningMode);
    }
    else {
        res = await deleteDataBySection(currentSection, selectedId);
    }
    if (res.failed) alert(res.error);
}

export {
    submitForm
}
