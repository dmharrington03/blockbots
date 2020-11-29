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
    host = "http://" + form.get('ip'); 
    console.log(host);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // success
            alert("List received");
            UIkit.modal('#connect-form').hide();
            document.querySelector(".program-queue").style.display = "block";
            display_queue(this.response);

        } else {
            alert(`Error ${this.status}`);
        }
    };

    xhttp.open("GET", host + "/get-queue", true);
    xhttp.send();

    alert("List received");
    UIkit.modal('#connect-form').hide();
    document.querySelector(".program-queue").style.display = "block";
}

function display_queue(res) {
    
    queue = JSON.parse(res);

    let queueList = document.getElementById("program-list");
    for (let i = 0; i < queue.length; i++)
    {
        let program = document.createElement("li");
        program.className = "uk-flex uk-flex-between";
        program.innerHTML = `<div>
        ${queue[i].name} –
        <i>${queue[i].creator}</i>
        </div>
        <button class="uk-icon-button" uk-icon="play-circle" 
        onclick="run_program(${queue[i].name})"></button>`;
        queueList.appendChild(program);
    }

    return;
}

function run_program(name) {

    //* API call to the server telling it to run, remove from list
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Program Run Successfully");
            get_queue();
            return;

        } else {
            alert(`Error ${this.status}`);
        }
    };

    xhttp.open("GET", host + `/run?prog=${name}`, true);
    xhttp.send();
}