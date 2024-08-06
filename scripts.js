const container = document.querySelector("#container");
let gridSize = 16;
//for (let i = 0; i < 16; )

const rowContainer = document.createElement("div");
rowContainer.setAttribute("class", "rowContainer");
container.appendChild(rowContainer);

const pixel = document.createElement("div");
pixel.setAttribute("class", "pixel");
rowContainer.appendChild(pixel);