// Initialize workspace
var workspace = Blockly.inject('blocklyDiv',
    { toolbox: document.getElementById('toolbox') }
);

// Setup functions
let cmd_queue = {
    "creator": null,
    "name": null,
    "description": null,
    "program": []
};

function add_to_queue(name, spec) {
    cmd_queue.program.push({
        "name": name,
        "spec": spec
    });
}

function send_to_robot() {
    Blockly.JavaScript.addReservedWords('code');

    let code = Blockly.JavaScript.workspaceToCode(workspace);

    if (!code) {
        alert("Create a program, then try again!");
        return false;
    }

    alert(code);
    try {
        eval(code);
    } catch (e) {
        alert(e);
    }

    let form = new FormData(document.getElementById('send-form'));
    cmd_queue.creator = form.get('person') || 'Anonymus';
    cmd_queue.name = form.get('name') || 'Untitled';
    cmd_queue.description = form.get('description') || '';
    let host = form.get('ip');

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // success
            alert("Program sent!");
        } else if (this.readyState == 4) {
            alert(`Error ${this.status}`);
        }
    };

    xhttp.open("POST", host, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(cmd_queue));
    
}

function fill_data() {
    document.querySelector('#name').value = document.querySelector('#name-content').innerText;

    let description = document.querySelector('#description-content').innerText;
    let description_field = document.querySelector('#description');
    if (description !== "Add description")
        description_field.value = description;
    else
        description_field.value = '';
}


function generate_python() {
    let code = Blockly.Python.workspaceToCode(workspace) || "Nothing here yet, go to the blocks window to write your program!";

    let display = document.getElementById('display-code');

    display.innerHTML = code;
    Prism.highlightAll();
}