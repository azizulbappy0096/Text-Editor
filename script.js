const text_area = document.getElementById('text_area');
const formatted_area = document.getElementById('formatted_area')

function updateText() {
    let text = text_area.value;
    formatted_area.innerText = text
};

function toggleItalic() {
    document.querySelector("#formatted_area").classList.toggle('italic');

    document.querySelector("#italic").classList.toggle('active');
};

function toggleTextRight() {
    document.querySelector("#formatted_area").classList.toggle('text-right');
    document.querySelector("#formatted_area").classList.remove('text-left');
    document.querySelector("#formatted_area").classList.remove('text-center');

    document.querySelector("#right").classList.toggle('active');
    document.querySelector("#left").classList.remove('active');
    document.querySelector("#center").classList.remove('active');
};

function toggleTextLeft() {
    document.querySelector("#formatted_area").classList.toggle('text-left');
    document.querySelector("#formatted_area").classList.remove('text-right');
    document.querySelector("#formatted_area").classList.remove('text-center');

    document.querySelector("#left").classList.toggle('active');
    document.querySelector("#right").classList.remove('active');
    document.querySelector("#center").classList.remove('active');
};

function toggleTextCenter() {
    document.querySelector("#formatted_area").classList.toggle('text-center');
    document.querySelector("#formatted_area").classList.remove('text-left');
    document.querySelector("#formatted_area").classList.remove('text-right');

    document.querySelector("#center").classList.toggle('active');
    document.querySelector("#right").classList.remove('active');
    document.querySelector("#left").classList.remove('active');
};

function makeTextUnderlined() {
    document.querySelector("#formatted_area").classList.toggle('underline');

    document.querySelector("#underline").classList.toggle('active');
};

function makeTextBold() {
    document.querySelector("#formatted_area").classList.toggle('bold');

    document.querySelector("#bold").classList.toggle('active');
};



text_area.addEventListener('input', updateText);
document.getElementById('italic').addEventListener('click',  toggleItalic);
document.getElementById('right').addEventListener('click',  toggleTextRight);
document.getElementById('left').addEventListener('click',  toggleTextLeft);
document.getElementById('center').addEventListener('click',  toggleTextCenter);
document.getElementById('underline').addEventListener('click',  makeTextUnderlined);
document.getElementById('bold').addEventListener('click',  makeTextBold);