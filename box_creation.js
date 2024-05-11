/** 
 * This file is intended to create a 16x16 grid of cells within a high-level container div
 **/

const STATIC_GREEN_VAL = 128;
const mainContainer = document.querySelector(".box-container");

function rgb(r, g, b) {
    /* return the hex string associated with a given combination of r, g,
     * and b number values
     */
    if (r < 0 || r > 255) {
        throw Error(`r value not in defined range. got ${r}`);
    }

    if (g < 0 || g > 255) {
        throw Error(`g value not in defined range. got ${g}`);
    }

    if (b < 0 || b > 255) {
        throw Error(`b value not in defined range. got ${b}`);
    }

    let toReturn = "#";
    toReturn += Math.round(r, 2).toString(16).padStart(2, "0");
    toReturn += Math.round(g, 2).toString(16).padStart(2, "0");
    toReturn += Math.round(b, 2).toString(16).padStart(2, "0");
    return toReturn;
}


function resetGrid() {
    /* reset color of all the grid's boxes */
    let boxList = mainContainer.querySelectorAll(".box");
    boxList.forEach((box) => {
        box.style["background-color"] = "white";
    });
}

function clearGrid() {
    /* remove all individual boxes in the grid */
    let rowList = mainContainer.querySelectorAll(".row-container");
    for (row of rowList) {
        mainContainer.removeChild(row);
    }
}

function createGrid(gridSize) {
    let boxIndexColorScale = 256 / gridSize;
    let rowContainer;
    let box;
    for (let rowNum = 1; rowNum <= gridSize; rowNum++) {
        rowContainer = document.createElement("div"); 
        rowContainer.classList.add("row-container");
        mainContainer.appendChild(rowContainer);

        for (let colNum = 1; colNum <= gridSize; colNum++) {
            box = document.createElement("div");
            box.classList.add("box");

            /* the `let` must be used here so this variable is block-scoped */
            let boxRgb = rgb(
                (rowNum - 1) * boxIndexColorScale,
                STATIC_GREEN_VAL,
                (colNum - 1) * boxIndexColorScale 
            );

            /* mouse over -> color || click -> white */
            box.addEventListener("mouseenter", (event) => event.target.style["background-color"] = boxRgb);
            box.addEventListener("mousedown", (event) => event.target.style["background-color"] = "white");
            rowContainer.appendChild(box);
        }
    }
}

document.querySelector(".redraw-button").addEventListener("click", (event) => {
        let newSize = parseInt(prompt("What size?"));
        if (newSize < 1) {
            alert(`Chosen size of ${newSize} too small. Using 1`);
            newSize = 1;
        }
        else if (newSize > 100) {
            alert(`Chosen size of ${newSize} too big. Using 100`);
            newSize = 100;
        }

        clearGrid();
        createGrid(newSize);
    }
);
document.querySelector(".clear-button").addEventListener("click", resetGrid); 

createGrid(16);

