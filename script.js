// Initialize workspace
var workspace = Blockly.inject('blocklyDiv',
    { toolbox: document.getElementById('toolbox') }
);

let con_out = document.querySelector('#console');

// Setup functions
let cmd_queue = {
    "creator": null,
    "name": null,
    "program": []
};

function add_to_queue(name, spec) {
    cmd_queue.program.push({
        "name": name,
        "spec": spec
    });
}

function con_write(msg) {
    con_out.innerHTML = msg;
}

function generate_to_js() {
    Blockly.JavaScript.addReservedWords('code');

    let code = Blockly.JavaScript.workspaceToCode(workspace);
    alert(code);
    try {
        eval(code);
    } catch (e) {
        alert(e);
    }

    let form = FormData(document.getElementById('send-form'));
    cmd_queue.creator = form.get('person') || 'Anonymus';
    cmd_queue.name = form.get('name') || 'Untitled';
    let host = form.get('ip'); //TODO validate IP

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", host);
    xhttp.setRequestHeader("Content-type", "application/json");
    
}

function fill_name() {
    document.querySelector('#name').value = document.querySelector('#name-content').innerText;
}


function generate_python() {
    let code = Blockly.Python.workspaceToCode(workspace) || "Nothing here yet, go to the blocks window to write your program!";

    let display = document.getElementById('display-code');

    display.innerHTML = code;
    Prism.highlightAll();
}