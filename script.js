import { setForm } from './setForm.js';
import { setDataList } from './setDataList.js';

const formBox = document.getElementById('formBox');
const dataListBox = document.getElementById('dataListBox');
const sectionsBox = document.getElementById('sectionsBox');

let currentSection = 'lendingSection';

const booksMockData = [
    {
        ID: 1,
        titulo: 'In Search of Lost Time',
        autor: 'Marcel Proust'
    },
    {
        ID: 2,
        titulo: 'Ulysses',
        autor: 'James Joyce'
    },
    {
        ID: 3,
        titulo: 'Don Quijote',
        autor: 'Miguel de Cervantes'
    },
    {
        ID: 4,
        titulo: '100 Años de Soledad',
        autor: 'Gabriel Garcia Marquez'
    }
];

const studentsMockData = [
    {
        ID: 1,
        dni: '42719383',
        nombre: 'Crgio',
        direccion: 'No se'

    }
];

const lendingsMockData = [
    {
        ID: 1,
        fechaEntrega: new Date(),
        fechaDevolucion: new Date(),
        libro: {
            titulo: 'Don Quijote',
            autor: 'Miguel de Cervantes',
        },
        alumno: {
            nombre: 'Crgio',
            dni: '42719383'
        },
        libroID: 1,
        alumnoID: 1
    }
];

sectionsBox.addEventListener('change', (e) => {
    currentSection = e.target.id;

    setForm(formBox, currentSection);
    setDataList(
        dataListBox,
        lendingsMockData,
        currentSection
    );
});

function init() {
    setForm(formBox, currentSection);
    setDataList(
        dataListBox,
        lendingsMockData,
        currentSection
    );
}

init();
