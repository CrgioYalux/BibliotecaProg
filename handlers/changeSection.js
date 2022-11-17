import { setForm } from '../form/setForm.js';
import { setDataList } from '../form/setDataList.js';
import { getDataBySection } from '../api/getDataBySection.js';
import { SECTIONS } from '../const.js';

async function changeSection(setSection, dataListBox, formBox) {
    const section = document.getElementById(setSection);
    section.checked = true;

    let data = await getDataBySection(setSection);

    setDataList(
        dataListBox,
        data,
        setSection 
    );

    if (setSection === SECTIONS.BOOKS || setSection === SECTIONS.STUDENTS) {
        setForm(formBox, setSection);
        return;
    }

    const books = await getDataBySection(SECTIONS.BOOKS);
    const formattedBooks = books.map((book) => ({
        value: book.id,
        text: book.titulo
    }));
    setForm(formBox, setSection, formattedBooks);
}

export {
    changeSection
}
