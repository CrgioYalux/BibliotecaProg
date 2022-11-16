function getFormData(formElement, section) {
    let data; 
    let inputs = formElement.children[0].children;

    if (inputs === undefined) return false;

    if (section === 'bookSection') {
        data = {
            titulo: inputs[0].lastChild.value,
            autor: inputs[1].lastChild.value,
        }
    } else if (section === 'lendingSection') {
        data = {
            fechaEntrega: inputs[0].lastChild.value,
            fechaDevolucion: inputs[1].lastChild.value,
            libro: inputs[2].lastChild.value,
            dniAlumno: inputs[3].lastChild.value
        }
    }
    else {
        data = {
            dni: inputs[0].lastChild.value,
            nombre: inputs[1].lastChild.value,
            direccion: inputs[2].lastChild.value
        }
    }

    return data ?? false;
}

export {
    getFormData
}