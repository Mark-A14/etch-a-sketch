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
    let squareSize = 500/slider.value - 2;
    for(let i = 0; i < slider.value**2; i++){
        let squareDiv = document.createElement('div');
        container.append(squareDiv);
        squareDiv.classList.add('square');
        squareDiv.style.width = squareSize.toString() + 'px';
        squareDiv.style.height = squareSize.toString() + 'px';
    }
}

btnSpawn.addEventListener('click', spawnBoxes);
container.addEventListener('mousemove', mouseEvent);

function mouseEvent(e){
    let boxes = document.querySelectorAll('.square');
    boxes.forEach(n => {
        n.addEventListener('mouseenter', function () {
            this.classList.add('hovered');
        })
    });
}
