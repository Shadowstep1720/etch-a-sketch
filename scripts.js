// TO DO: create input interface to let user set grid and canvas height

const canvas = document.querySelector("#canvas");
let gridWidth = 140;
let gridHeight = 80;
let canvasWidth = 1400;
let canvasHeight = 800;

canvas.style.width = `${canvasWidth}px`;
canvas.style.height = `${canvasHeight}px`;

//function createCanvas(gridSize) {
    
    for (let i = 0; i < gridHeight; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.setAttribute("class", "rowContainer");
        canvas.appendChild(rowContainer);
    
        for (let y = 0; y < gridWidth; y++) {
            const pixel = document.createElement("div");
            pixel.setAttribute("class", "blankPixel");
            rowContainer.appendChild(pixel);

            pixel.addEventListener("mouseover", colorPixel)
        }
    }
//}

function colorPixel(event) {
    console.log("event handler called");
    console.log(event.currentTarget);
    event.currentTarget.setAttribute("class", "coloredPixel");
}