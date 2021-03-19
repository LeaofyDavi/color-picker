// Color Picker Part's:
var color_picker = document.getElementById('color_picker');
var color_picker_wrapper = document.getElementById("color_circle");

// Label's:
var label_hex_value = document.getElementById('color_hex_value');
var label_rgb_value = document.getElementById('color_rgb_value');

// Random Button:
var rnd_color_button = document.getElementById('rnd_color_button');

// Converting Hex to RGB.
function htrgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
        } : null;
}

// Changing label's text.
color_picker.onchange = function () {
        label_hex_value.innerHTML = color_picker.value;
        label_rgb_value.innerHTML = `rgb(${htrgb(color_picker.value).r},
                ${htrgb(color_picker.value).g},
                ${htrgb(color_picker.value).b})`;
        color_picker_wrapper.style.background = color_picker.value;
}