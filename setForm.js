import { createInputElement, createSelectElement } from './formUtils.js';

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

function setLendingsForm(formBox) {
    formBox.innerHTML = '';

    const fragment = document.createDocumentFragment();

    const deliveryDateInput = createInputElement('deliveryDateInput', 'Fecha de Entrega', 'date');
    const returnDateInput = createInputElement('returnDateInput', 'Fecha de Devolucón', 'date');
    const bookSelect = createSelectElement('bookSelect', 'Libro a prestar', [{id: 1, titulo: 'libro 1'},{id: 2, titulo: 'libro 2'}]);

    fragment.append(deliveryDateInput);
    fragment.append(returnDateInput);
    fragment.append(bookSelect);
    
    formBox.append(fragment);
}

function setForm(formBox, section = 'bookSection') {
    if (section === 'bookSection') setBooksForm(formBox);
    else if (section === 'lendingSection') setLendingsForm(formBox);
    else setStudentsForm(formBox);
}

export {
    setForm
}
