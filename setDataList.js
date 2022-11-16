function setBooksDataList(dataListBox, data) {
    dataListBox.innerHTML = '';

    const fragment = document.createDocumentFragment();

    data.forEach((element) => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const spanBox = document.createElement('span');
        const strong = document.createElement('strong');
        const i = document.createElement('i');

        li.dataset.Id = element.ID;

        label.setAttribute('for', element.ID);

        input.setAttribute('id', element.ID);
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'booksValue');

        i.textContent = element.titulo;

        spanBox.textContent = `'${element.autor}' - `;
        spanBox.append(i);

        label.append(spanBox);
        label.append(input);

        li.append(label);

        fragment.append(li);
    });

    dataListBox.append(fragment);
}

function setStudentsDataList(dataListBox, data) {
    dataListBox.innerHTML = '';

    const fragment = document.createDocumentFragment();

    data.forEach((element) => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const spanBox = document.createElement('span');
        const spanOne = document.createElement('span');
        const spanTwo = document.createElement('span');
        const strong = document.createElement('strong');
        const small = document.createElement('small');

        li.dataset.Id = element.ID;

        label.setAttribute('for', element.ID);

        input.setAttribute('id', element.ID);
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'studentsValue');

        small.textContent = `(${element.dni})`;

        spanOne.textContent = element.nombre;
        spanOne.append(small);

        spanTwo.textContent = element.direccion;

        spanBox.append(spanOne);
        spanBox.append(spanTwo);

        label.append(spanBox);
        label.append(input);

        li.append(label);

        fragment.append(li);
    });

    dataListBox.append(fragment);
}

function setLendingsDataList(dataListBox, data) {
    dataListBox.innerHTML = '';

    const fragment = document.createDocumentFragment();

    data.forEach((element) => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');

        const spanBox = document.createElement('span');

        const spanOne = document.createElement('span');
        const spanTwo = document.createElement('span');
        const spanThree = document.createElement('span');
        const spanFour = document.createElement('span');

        const i = document.createElement('i');
        const strong = document.createElement('strong');
        const small = document.createElement('small');

        li.dataset.Id = element.ID;
        li.dataset.libroId  = element.libroID;
        li.dataset.alumnoId = element.alumnoID;
        
        label.setAttribute('for', element.ID);

        input.setAttribute('id', element.ID);
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'lendingsValue');

        spanOne.textContent = `Fecha de Entrega: ${element.fechaEntrega.toDateString()}`;
        spanTwo.textContent = `Fecha de Devolución: ${element.fechaDevolucion.toDateString()}`;
        
        i.textContent = element.libro.titulo;

        spanThree.textContent = `${element.libro.autor} - `;
        spanThree.append(i);

        small.textContent = `(${element.alumno.dni})`;

        spanFour.textContent = element.alumno.nombre;
        spanFour.append(small);

        spanBox.append(spanOne);
        spanBox.append(spanTwo);
        spanBox.append(spanThree);
        spanBox.append(spanFour);
        spanBox.append(strong);

        label.append(spanBox);
        label.append(input);

        li.append(label);

        fragment.append(li);
    });

    dataListBox.append(fragment);
}

function setDataList(dataListBox, data, section = 'bookSection') {
    if (section === 'bookSection') setBooksDataList(dataListBox, data);
    else if (section === 'lendingSection') setLendingsDataList(dataListBox, data);
    else setStudentsDataList(dataListBox, data);
}

export { 
    setDataList
}
