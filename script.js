const container = document.querySelector('.container');
const buttonSpawn = document.querySelector('.spawn');

function spawnBoxes(){
    let squareLot;
    let numOfBox = () => {
        return 
    };
    for(let i = 0; i < numOfBox; i++){
        squareLot = document.createElement('div');
        container.append(squareLot);
        squareLot.setAttribute('class','square');
    }
}

buttonSpawn.addEventListener("click", spawnBoxes)