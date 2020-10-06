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

function generate_python() {
    let code = Blockly.Python.workspaceToCode(workspace);

    let display = document.getElementById('display-code');

    display.innerHTML = code;
}