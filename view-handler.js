let blockFrame = document.querySelector('#blocks');
let codeFrame = document.querySelector('#code');
let codeButton = document.querySelector('#code-button');
let blockButton = document.querySelector('#block-button');
let host;

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

function connect_modal() {
    UIkit.modal('#connect-form').show();
}

function get_queue() {

    let form = new FormData(document.getElementById('address-form'));
    host = "http://" + form.get('ip') + "/get-queue"; 
    console.log(host);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // success
            alert("List received");
            UIkit.modal('#connect-form').hide();
            document.querySelector(".program-queue").style.display = "block";
            display_queue(this.response);

        } else if (this.readyState == 4) {
            alert(`Error ${this.status}`);
        }
    };

    xhttp.open("GET", host, true);
    xhttp.send();
}

function display_queue(queue) {
    
    //TODO handle json response and display it
    return;
}

function run_program(name) {

    //TODO api call to the server telling it to run, remove from list
}