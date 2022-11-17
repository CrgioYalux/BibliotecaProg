function fillForm(section) {
    if (section === SECTIONS.BOOKS) {
        formBox.children[0].lastChild.value = editingElement.titulo;
        formBox.children[1].lastChild.value = editingElement.autor;
    } else if (section === SECTIONS.LENDINGS) {
        formBox.children[0].lastChild.value = editingElement.fechaEntrega;
        formBox.children[1].lastChild.value = editingElement.fechaDevolucion;
        formBox.children[2].lastChild.value = editingElement.libroId;
        formBox.children[3].lastChild.value = editingElement.alumno.dni;
    }
    else {
        formBox.children[0].lastChild.value = editingElement.dni;
        formBox.children[1].lastChild.value = editingElement.nombre;
        formBox.children[2].lastChild.value = editingElement.direccion;
    }
}

export {
    fillForm
}
