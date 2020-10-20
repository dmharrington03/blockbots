let move_json = {
    "type": "move_linear",
    "message0": "Move %1 for %2 second(s)",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "direction",
        "options": [
          [
            "Forward",
            "forward"
          ],
          [
            "Backward",
            "backward"
          ]
        ]
      },
      {
        "type": "field_number",
        "name": "seconds",
        "value": 0,
        "min": 1,
        "max": 100,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
};
let rotate_json = {
  "type": "rotate",
  "message0": "Turn %1 %2",
  "args0": [
    {
      "type": "field_angle",
      "name": "angle",
      "angle": 90
    },
    {
      "type": "field_dropdown",
      "name": "direction",
      "options": [
        [
          "left",
          "left"
        ],
        [
          "right",
          "right"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 195,
  "tooltip": "",
  "helpUrl": ""
};
let hop_json = {
  "type": "hop",
  "message0": "Hop",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
};
let light_json = {
  "type": "toggle_light",
  "message0": "Turn light %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "state",
      "options": [
        [
          "on",
          "on"
        ],
        [
          "off",
          "off"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};
let light_color_json = {
  "type": "set_light_color",
  "message0": "Set light color to %1",
  "args0": [
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['move_linear'] = {
    init: function() {
        this.jsonInit(move_json);
    }
};

Blockly.Blocks['rotate'] = {
    init: function() {
        this.jsonInit(rotate_json);
    }
};

Blockly.Blocks['hop'] = {
    init: function() {
        this.jsonInit(hop_json);
    }
};

Blockly.Blocks['toggle_light'] = {
    init: function() {
        this.jsonInit(light_json);
    }
};

Blockly.Blocks['set_light_color'] = {
    init: function() {
        this.jsonInit(light_color_json);
    }
};