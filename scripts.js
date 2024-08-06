// sets canvas size
const canvas = document.querySelector("#canvas");
let canvasWidth = 960;
let canvasHeight = 960;

canvas.style.width = `${canvasWidth}px`;
canvas.style.height = `${canvasHeight}px`;

// fuves color options
let colorArray = ["#000000", "#0000FF", "green", "red", "yellow", "white"]
let currentColor = "black";

//generate canvas
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

    if (targetOpacity < 1) {
        target.style.opacity = targetOpacity + .1;
    }

    target.style.backgroundColor = currentColor;
}

//reset canvas
function resetCanvas(gridSize) {
    canvas.replaceChildren();
    createCanvas(gridSize);
}


//reset canvas button event listener
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

//change color
function changeColor(newColor) {
    currentColor = newColor.target.id;
    console.log('event listener called new color:')
    console.log(newColor.target.id);
}

// Create changeColor buttons and add event listeners
const colorContainer = document.querySelector("#colorContainer");
for (color of colorArray) {
    const colorButton = document.createElement("div");
    colorButton.setAttribute("class", "color");
    colorButton.setAttribute("id", color);
    colorContainer.appendChild(colorButton);
    colorButton.style.backgroundColor = color;

    colorButton.addEventListener("click", changeColor);
}

window.addEventListener("load", () => {
    resetCanvas(100);
}) 