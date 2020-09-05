const text_area = document.getElementById('text_area');
const formatted_area = document.getElementById('formatted_area')

function updateText() {
    let text = text_area.value;
    formatted_area.innerText = text
}

text_area.addEventListener('keyup', updateText);

function makeItalic() {
    formatted_area.classList.toggle('.italic');
}

document.getElementById('italic').addEventListener('click',  makeItalic);