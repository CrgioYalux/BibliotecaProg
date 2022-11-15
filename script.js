const formBox = document.getElementById('formBox');
const dataList = document.getElementById('dataList');

function populateSelectElement(selectElement, options) {
    selectElement.innerHTML = '';

    for (let i = 0; i < options.length; i++) {
        const option = document.createElement('option');
        option.value = options[i].id;
        option.text = options[i].titulo;

        selectElement.add(option);
    }
}

function createInputElement(id, labelText, type = 'text', classList = []) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');

    input.setAttribute('id', id);
    input.setAttribute('type', type);

    label.setAttribute('for', id);
        
    span.textContent = labelText;

    classList.forEach((e) => label.classList.add(e));
    
    label.append(span);
    label.append(input);

    return label;
}

function createSelectElement(id, labelText, options = [], classList = []) {
    const label = document.createElement('label');
    const select = document.createElement('select');
    const span = document.createElement('span');

    label.setAttribute('for', id);

    select.setAttribute('id', id);

    span.textContent = labelText;

    populateSelectElement(select, options);
    
    label.append(span);
    label.append(select);

    return label;
}

function setBooksForm() {
    formBox.innerHTML = '';

    const fragment = document.createDocumentFragment();

    const titleInput = createInputElement('titleInput', 'Titulo');
    const authorInput = createInputElement('authorInput', 'Autor')

    fragment.append(titleInput);
    fragment.append(authorInput);

    formBox.append(fragment);
}

function setStudentsForm() {
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

function setLendingsForm() {
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

