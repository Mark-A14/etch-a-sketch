const container = document.querySelector('.container');
const buttonSpawn = document.querySelector('.spawn');

let clientWidth = container.clientWidth;
let clientHeight = container.clientHeight;
console.log(clientHeight);
console.log(clientWidth);

function spawnBoxes(){
    let squareLot;
    let numOfBox = 16**2;
    for(let i = 0; i < numOfBox; i++){
        squareLot = document.createElement('div');
        container.append(squareLot);
        squareLot.setAttribute('class','square');
        squareLot.style.width = calculateSquareSize();
        squareLot.style.height = calculateSquareSize();    
    }

}

function calculateSquareSize() {
    let size = clientWidth/16;
    return size.toString() + "px";
}

buttonSpawn.addEventListener("click", spawnBoxes);