/**
 * Project requirements
 *  - Change the background color by generating random hex color by clicking a button
 * and copy the color code
 * added toast message
 * Type Hex code to change BG color
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

// Globals
let div = null;

window.onload = () => {
	main();
};

function main() {
	const root = document.getElementById("root");
	const output = document.getElementById("output");
	const changeBtn = document.getElementById("change-btn");
	const copyBtn = document.getElementById("copy-btn");

	// change color btn
	changeBtn.addEventListener("click", function () {
		const bgColor = generateHexColor();

		root.style.backgroundColor = bgColor;
		output.value = bgColor;
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
			generateToastMessage(`${output.value} Copied`);
		} else {
			alert`Color Code Invalid`;
		}
	});

	// Type color code
	output.addEventListener("keyup", function (e) {
		const color = e.target.value;

		if (color && isHexValid(color)) {
			root.style.backgroundColor = color;
		}
	});
}

function generateHexColor() {
	// #000000 #ffffff
	// 255, 255, 255, -> #fff

	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
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
	if (color.length !== 7) return false;
	if (color[0] !== "#") return false;

	color = color.substring(1);
	return /^[0-9A-Fa-f]{6}$/i.test(color); // js regex
}
