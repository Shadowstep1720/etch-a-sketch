const canvas = document.querySelector("#canvas");
let gridSize = 16;
for (let i = 0; i < gridSize; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.setAttribute("class", "rowContainer");
    canvas.appendChild(rowContainer);

    for (let y = 0; y < gridSize; y++) {
        const pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        rowContainer.appendChild(pixel);
    }
}

