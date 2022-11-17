import { createInputElement, createSelectElement } from './formUtils.js';
import { SECTIONS } from '../const.js';

function setBooksForm(formBox) {
    formBox.innerHTML = '';

    const fragment = document.createDocumentFragment();

    const titleInput = createInputElement('titleInput', 'Titulo');
    const authorInput = createInputElement('authorInput', 'Autor')

    fragment.append(titleInput);
    fragment.append(authorInput);

    formBox.append(fragment);
}

function setStudentsForm(formBox) {
    formBox.innerHTML = '';

    const fragment = document.createDocumentFragment();

    const dniInput = createInputElement('dniInput', 'DNI');
    const nameInput = createInputElement('nameInput', 'Nombre y Apellido');
    const addressInput = createInputElement('addressInput', 'Dirección');

    fragment.append(dniInput);
    fragment.append(nameInput);
    fragment.append(addressInput);

    formBox.append(fragment);
}

function setLendingsForm(formBox, books = []) {
    formBox.innerHTML = '';

    const fragment = document.createDocumentFragment();

    // const deliveryDateInput = createInputElement('deliveryDateInput', 'Fecha de Entrega', 'date');
    const bookSelect = createSelectElement('bookSelect', 'Libro a prestar', books);
    const studentDniInput = createInputElement('studentDni', 'DNI', 'text');

    // deliveryDateInput.lastChild.disabled = true;
    // deliveryDateInput.lastChild.valueAsDate = new Date();

    // fragment.append(deliveryDateInput);
    fragment.append(bookSelect);
    fragment.append(studentDniInput);
    
    formBox.append(fragment);
}

function setForm(formBox, section = 'bookSection', books = []) {
    if (section === SECTIONS.BOOKS) setBooksForm(formBox);
    else if (section === SECTIONS.LENDINGS) setLendingsForm(formBox, books);
    else setStudentsForm(formBox);
}

export {
    setForm
}
