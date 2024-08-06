// TO DO: create input interface to let user set grid and canvas height

const canvas = document.querySelector("#canvas");
let gridWidth = 100;
let gridHeight = 100;
let canvasWidth = 960;
let canvasHeight = 960;

canvas.style.width = `${canvasWidth}px`;
canvas.style.height = `${canvasHeight}px`;

function createCanvas(gridSize) {
    
    for (let i = 0; i < gridSize; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.setAttribute("class", "rowContainer");
        canvas.appendChild(rowContainer);
    
        for (let y = 0; y < gridSize; y++) {
            const pixel = document.createElement("div");
            pixel.setAttribute("class", "pixel");
            rowContainer.appendChild(pixel);

            pixel.addEventListener("mouseover", colorPixel)
        }
    }
}


function colorPixel(event) {
    const target = event.currentTarget;
    let targetOpacity = parseFloat(getComputedStyle(target).opacity);
    console.log(targetOpacity);
    if (targetOpacity < 1) {
        target.style.opacity = targetOpacity + .1;
        console.log(targetOpacity + .1);
        console.log("if statement called");
    } 
}

function resetCanvas(gridSize) {
    canvas.replaceChildren();
    createCanvas(gridSize);
}


//reset canvas
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    let gridSize = parseInt(prompt("How many pixels would you like in the canvas? Please enter a number from 1-100."));
    if (gridSize > 0 && gridSize < 101) {
        resetCanvas(gridSize);
    } else {
        alert("Invalid entry. Please try again");
        return
    }
})