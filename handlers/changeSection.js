import { setForm } from '../form/setForm.js';
import { setDataList } from '../form/setDataList.js';
import { getDataBySection } from '../api/getDataBySection.js';

async function changeSection(setSection, dataListBox, formBox) {
    const section = document.getElementById(setSection);
    section.checked = true;

    let data = await getDataBySection(setSection);

    setDataList(
        dataListBox,
        data,
        setSection 
    );

    if (setSection === 'bookSection' || setSection === 'studentSection') {
        setForm(formBox, setSection);
        return;
    }

    const books = await getDataBySection('bookSection');
    const formattedBooks = books.map((book) => ({
        value: book.ID,
        text: book.titulo
    }));
    setForm(formBox, setSection, formattedBooks);
}

export {
    changeSection
}