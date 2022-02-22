/**
 * Project requirements
 *  - Change the background color by generating random hex color by clicking a button
 * and copy the color code
 * added toast message
 * Type Hex code to change BG color
 * Transform user input
 * Show rbg color too, but do not need to edit it
 * User can also copy the rgb color code
 */

// step 1 - create onload handler
// step 2 - random color generator function
// step 3 - collect all necessary references
// step 4 - handle the click event and copy color code btn
// step 5 - activated toast message
// step 6 - create a dynamic toast message
// step 7 - clear toast message

// step 8 - create isHexValid function
// step 9 - Implement change handler on input field
// step 10 - prevent copying hex code if it is not valid

// step 11 - refactor the color generator function
// step 12 - update the color to display rgb colors

// Globals
let div = null;

window.onload = () => {
	main();
};

function main() {
	const root = document.getElementById("root");
	const output = document.getElementById("output");
	const output2 = document.getElementById("output2");
	const changeBtn = document.getElementById("change-btn");
	const copyBtn = document.getElementById("copy-btn");

	// change color btn
	changeBtn.addEventListener("click", function () {
		const color = generateColorDecimal();
		const hex = generateHexColor(color);
		const rgb = generateRGBColor(color);

		root.style.backgroundColor = hex;
		output.value = hex.substring(1).toUpperCase();
		output2.value = rgb.toUpperCase();
	});

	// copy color code btn
	copyBtn.addEventListener("click", function () {
		window.navigator.clipboard.writeText(output.value);

		if (div !== null) {
			div.remove();
			div = null;
		}
		//tostMessage
		if (isHexValid(output.value)) {
			generateToastMessage(`#${output.value} Copied`);
		} else {
			alert`Color Code Invalid`;
		}
	});

	// Type color code
	output.addEventListener("keyup", function (e) {
		const color = e.target.value;

		if (color) {
			output.value = color.toUpperCase();
			if (isHexValid(color)) {
				root.style.backgroundColor = `#${color}`;
			}
		}
	});
}

/**
 * function 1 - generate three random decimal number for red, green, and blue
 * return as a object
 */
function generateColorDecimal() {
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return {
		red,
		green,
		blue,
	};
}

/**
 * Generate Hex color
 */
function generateHexColor({ red, green, blue }) {
	const twoCode = value => {
		const hex = value.toString(16);
		return hex.length === 1 ? `0${hex}` : hex;
	};
	return `#${twoCode(red)}${twoCode(green)}${twoCode(blue)}`;
}

/**
 * Generate RGB color
 */
function generateRGBColor({ red, green, blue }) {
	return `rgb(${red}, ${green}, ${blue})`;
}

/**
 *
 * @param {string} message
 */
function generateToastMessage(message) {
	div = document.createElement("div");

	div.innerText = message;
	div.className = "toast-message toast-message-slide-in";

	div.addEventListener("click", function () {
		div.classList.remove("toast-message-slide-in");
		div.classList.add("toast-message-slide-out");

		div.addEventListener("animationend", function () {
			div.remove();
			div = null;
		});
	});

	document.body.appendChild(div);
}

/**
 * isHexValid
 *
 * @param {string} color
 */
function isHexValid(color) {
	if (color.length !== 6) return false;
	return /^[0-9A-Fa-f]{6}$/i.test(color); // js regex
}
