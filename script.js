const DEFAULT_MODE = "color";
const DEFAULT_SIZE = 16;
let mode = DEFAULT_MODE;
let container = document.querySelector(".container");
let buttonClassic = document.querySelector("#classic");
let buttonRainbow = document.querySelector("#rainbow");
let buttonClear = document.querySelector("#clear");
let buttonProgressive = document.querySelector("#progressive");
let colorPicked = document.querySelector("#colorPicker");
let slider = document.querySelector("#boxes");
let sliderOutput = document.querySelector(".rangeOutput");
let buttons = document.querySelectorAll("button");

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
	buttons.forEach((btn) => {
		if (btn.value != mode) {
			btn.style.backgroundColor = "white";
		} else {
			this.style.backgroundColor = `#65b7ff`;
		}
	});
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
		this.style.backgroundColor = colorPicked.value;
		if (this.style.opacity == "") {
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
	removeGrid();
	createGrids(slider.value);
}

function removeGrid() {
	container.innerHTML = "";
}

buttonClassic.addEventListener("click", changeMode);
buttonRainbow.addEventListener("click", changeMode);
buttonClear.addEventListener("click", clearGrid);
buttonProgressive.addEventListener("click", changeMode);

createGrids(DEFAULT_SIZE);
buttonClassic.style.backgroundColor = `#65b7ff`;
