let container = document.querySelector('.container');
let btnSpawn = document.querySelector('.spawn');
let slider = document.querySelector('#boxes');
let sliderOutput = document.querySelector('.rangeOutput');
sliderOutput.innerText = slider.value;
slider.oninput = function () {
    sliderOutput.innerText = this.value.toString() + 'x' + this.value.toString();
    
}

function spawnBoxes(){
    if(container.hasChildNodes()){
        return;
    }
    container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;
    for(let i = 0; i < slider.value**2; i++){
        let squareDiv = document.createElement('div');
        container.append(squareDiv);
        squareDiv.classList.add('square');
        squareDiv.addEventListener('mouseenter', applyColor);
    }
}

btnSpawn.addEventListener('click', spawnBoxes);
container.addEventListener('mousemove', mouseEvent);

function applyColor(event){

}

function clearGrid(event){
    
}

function changeMode(event){
    
}