const DEFAULT_MODE = "color";
const DEFAULT_SIZE = 16;
let mode = DEFAULT_MODE;
let container = document.querySelector(".container");
let buttonRainbow = document.querySelector("#rainbow");
let buttonClear = document.querySelector("#clear");
let buttonProgressive = document.querySelector("#progressive");
let colorPicked = document.querySelector("#colorPicker");
let slider = document.querySelector("#boxes");
let sliderOutput = document.querySelector(".rangeOutput");

sliderOutput.innerText =
	slider.value.toString() + "x" + slider.value.toString();
slider.oninput = function () {
	sliderOutput.innerText =
		this.value.toString() + "x" + this.value.toString();
	removeGrid();
	createGrids(this.value);
};

function changeMode(event) {
	mode = this.value;
	console.log(mode);
}

function createGrids(size) {
	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	for (let i = 0; i < size ** 2; i++) {
		let squareDiv = document.createElement("div");
		container.append(squareDiv);
		squareDiv.classList.add("square");
		squareDiv.addEventListener("mouseenter", applyColor);
	}
}

function applyColor() {
	if (mode === DEFAULT_MODE) {
		this.style.backgroundColor = colorPicked.value;
	}
	if (mode === "rainbow") {
		let randomRed = Math.floor(Math.random() * 256);
		let randomBlue = Math.floor(Math.random() * 256);
		let randomGreen = Math.floor(Math.random() * 256);
		this.style.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
	}
	if (mode === "prog") {
		if (this.style.backgroundColor == "") {
			this.style.backgroundColor = colorPicked.value;
			this.style.opacity = "0.1";
		}

		if (this.style.opacity != "1") {
			let opacity = parseFloat(this.style.opacity, 10);
			opacity += 0.1;
			this.style.opacity = opacity.toString();
		}
	}
}

function clearGrid() {
	// let grids = document.querySelectorAll(".square");
	// grids.forEach((grid) => {
	// 	grid.style.backgroundColor = "white";
	// });
	removeGrid();
	createGrids(slider.value);
}

function removeGrid() {
	container.innerHTML = "";
}

buttonRainbow.addEventListener("click", changeMode);
buttonClear.addEventListener("click", clearGrid);
buttonProgressive.addEventListener("click", changeMode);
colorPicked.addEventListener("click", function () {
	mode = DEFAULT_MODE;
});
createGrids(DEFAULT_SIZE);
