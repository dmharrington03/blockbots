function code_view() {
    let blockFrame = document.querySelector('#blocks');
    let codeFrame = document.querySelector('#code');

    blockFrame.style.visibility = "hidden";
    codeFrame.style.visibility = "visible";
}

function block_view() {
    let blockFrame = document.querySelector('#blocks');
    let codeFrame = document.querySelector('#code');

    blockFrame.style.visibility = "visible";
    codeFrame.style.visibility = "hidden";
}