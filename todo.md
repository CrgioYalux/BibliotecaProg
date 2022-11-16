### Crear una app web que administre el prestamo de libros de una biblioteca escolar usando 3 entidades (libro, alumno, prestamo)

```
- Libro
    ID
    titulo
    autor

- Alumno
    ID
    dni
    nombre
    direccion

- Prestamo
    ID
    fechaEntrega
    fechaDevolucion
    libroID
    alumnoID
```

### La administración de los prestamos debe incluir como mínimo las siguientes opciones:
- Alta, baja (no debe dejar borrar alumno con deuda) y modificación de alumno.
- Alta, baja (no debe dejar borrar libro si este fue prestado alguna vez,
    no importando si se lo devolvio o no), modificación de libro.
- Registro de prestamo de libro.
- Registro de devolución de libro.
- Reporte de libros prestados.
- Reporte de libros no devueltos.

