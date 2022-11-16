function populateSelectElement(selectElement, options) {
    selectElement.innerHTML = '';

    for (let i = 0; i < options.length; i++) {
        const option = document.createElement('option');
        option.value = options[i].value;
        option.text = options[i].text;

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

    classList.forEach((e) => label.classList.add(e));
    
    label.append(span);
    label.append(select);

    return label;
}

export {
    createInputElement,
    createSelectElement
}
