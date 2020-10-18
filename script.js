// Initialize workspace
var workspace = Blockly.inject('blocklyDiv',
    { toolbox: document.getElementById('toolbox') }
);

let con_out = document.querySelector('#console');

// Setup functions
let cmd_queue = {
    "creator": null,
    "program": []
};

function queue_init(name) {
    cmd_queue.creator = name;
}

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