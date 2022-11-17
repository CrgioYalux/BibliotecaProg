import { SECTIONS } from '../const.js';

function fillForm(section, selected) {
    if (section === SECTIONS.BOOKS) {
        formBox.children[0].lastChild.value = selected.titulo;
        formBox.children[1].lastChild.value = selected.autor;
    } else if (section === SECTIONS.LENDINGS) {
        formBox.children[0].lastChild.value = selected.fechaEntrega;
        formBox.children[1].lastChild.value = selected.fechaDevolucion;
        formBox.children[2].lastChild.value = selected.libroId;
        formBox.children[3].lastChild.value = selected.alumno.dni;
    }
    else {
        formBox.children[0].lastChild.value = selected.dni;
        formBox.children[1].lastChild.value = selected.nombre;
        formBox.children[2].lastChild.value = selected.direccion;
    }
}

export {
    fillForm
}
