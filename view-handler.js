function toggle_view() {
    let blockFrame = document.querySelector('#blocks');
    let codeFrame = document.querySelector('#code');

    if (blockFrame.style.visibility === "hidden") {
        blockFrame.style.visibility = "visible";
        codeFrame.style.visibility = "hidden";
    } else {
        codeFrame.style.visibility = "visible";
        blockFrame.style.visibility = "hidden";
    }

}