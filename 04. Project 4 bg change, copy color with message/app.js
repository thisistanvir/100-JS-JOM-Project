/**
 * Project requirements
 *  - Change the background color by generating random hex color by clicking a button
 * and copy the color code
 * added toast message
 */

// step 1 - create onload handler
// step 2 - random color generator function
// step 3 - collect all necessary references
// step 4 - handle the click event and copy color code btn
// step 5 - activated toast message
// step 6 - create a dynamic toast message
// step 7 - clear toast message

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
		generateToastMessage(`${output.value} Copied`);
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
