/**
 * Project requirements
 *  - Change the background color by generating random hex color by clicking a button
 * and copy the color code
 */

// step 1 - create onload handler
// step 2 - random color generator function
// step 3 - collect all necessary references
// step 4 - handle the click event and copy color code btn

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
