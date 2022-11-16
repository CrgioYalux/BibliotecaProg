import api from '../api.js';
import apiStudents from '../students/actions.js';
import apiBooks from '../books/actions.js';

async function getLendings() {
    const { execGetReq } = api.reqs;
    const { ENDPOINT, PATH } = api.utils;

    const getLendingsRes = await execGetReq(ENDPOINT(PATH.LENDINGS));

    const books = await apiBooks.getBooks();
    const students = await apiStudents.getStudents();

    if (getLendingsRes.failed === true) return []

    const lendings = [];

    /*
    console.log(`lendings ${JSON.stringify(getLendingsRes)}`);
    console.log(`books ${JSON.stringify(books)}`);
    console.log(`students ${JSON.stringify(students)}`);
    */

    for (let x = 0; x < getLendingsRes.length; x++) {
        for (let y = 0; y < books.length; y++) {
            for (let z = 0; z < students.length; z++) {
                if (getLendingsRes[x].libroID === books[y].ID && getLendingsRes[x].alumnoID === students[z].ID) {

                    console.log('match');

                    lendings.push({
                        ...getLendingsRes[x],
                        libro: books[y],
                        alumno: students[z] 
                    });
                }
            }
        }
    }

    return lendings;
}

const lendingActions = {
    getLendings 
};

export default lendingActions;
