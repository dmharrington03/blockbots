Blockly.JavaScript['move_linear'] = function(block) {
    let direction = block.getFieldValue('direction');
    let secs = block.getFieldValue('seconds');

    let code = `add_to_queue('${direction}', ${secs});`;
    return code;
};

Blockly.JavaScript['rotate'] = function(block) {

    let angle = block.getFieldValue('angle');
    let direction = block.getFieldValue('direction');

    if (direction === "left") {
        angle = -angle;
    }

    let code = `add_to_queue('yaw', ${angle});\n`;

    return code;
};

Blockly.JavaScript['hop'] = function(block) {
    return "add_to_queue('hop', 1);\n";
};

Blockly.JavaScript['toggle_light'] = function(block) {

    let state;
    if (block.getFieldValue('state') === "on")
        state = 1
    else
        state = 0

    return `add_to_queue('light_state', ${state});\n`;
};

Blockly.JavaScript['set_light_color'] = function(block) {

    let color = block.getFieldValue('color');

    return `add_to_queue('light_color', '${color}');\n`;
};

Blockly.JavaScript['text_print'] = function(block) {
    
    let text = Blockly.JavaScript.valueToCode(block, 'TEXT',
    Blockly.JavaScript.ORDER_NONE) || '\'\'';

    return `con_write(${text});\n`;
};