let blockFrame = document.querySelector('#blocks');
let codeFrame = document.querySelector('#code');
let codeButton = document.querySelector('#code-button');
let blockButton = document.querySelector('#block-button');

function code_view() {

    blockFrame.style.visibility = "hidden";
    codeFrame.style.visibility = "visible";
    codeButton.style.borderColor = "#a2a2a2";
    blockButton.style.borderColor = "#e5e5e5";

    generate_python();
}

function block_view() {

    blockFrame.style.visibility = "visible";
    codeFrame.style.visibility = "hidden";
    blockButton.style.borderColor = "#a2a2a2";
    codeButton.style.borderColor = "#e5e5e5";
}