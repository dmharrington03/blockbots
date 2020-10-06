Blockly.Python['move_linear'] = function(block) {
    let direction = block.getFieldValue('direction');
    let secs = block.getFieldValue('seconds');

    let code = `move_linear('${direction}', ${secs})\n`;
    return code;
};

Blockly.Python['rotate'] = function(block) {

    let angle = block.getFieldValue('angle');
    let direction = block.getFieldValue('direction');

    if (direction === "left") {
        angle = -angle;
    }

    let code = `rotate(${angle})\n`;

    return code;
};

Blockly.Python['hop'] = function(block) {
    return `hop()\n`;
};

Blockly.Python['toggle_light'] = function(block) {

    let state;
    if (block.getFieldValue('state') === "on")
        state = 1
    else
        state = 0

    return `toggle_light(${state})\n`;
};

Blockly.Python['set_light_color'] = function(block) {

    let color = block.getFieldValue('color');

    return `set_light_color('${color}')\n`;
};

