/** 
 * This file is intended to create a 16x16 grid of cells within a high-level container div
 **/

const STATIC_GREEN_VAL = 128;
const GRID_SIZE = 16;
const BOX_INDEX_COLOR_SCALE = 256 / GRID_SIZE;
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
    toReturn += r.toString(16).padStart(2, "0");
    toReturn += g.toString(16).padStart(2, "0");
    toReturn += b.toString(16).padStart(2, "0");
    return toReturn;
}
/* 16 x 16 grid */
/* first make 16 row containers */

let rowContainer;
let box;
for (let rowNum = 1; rowNum <= GRID_SIZE; rowNum++) {
    rowContainer = document.createElement("div"); 
    rowContainer.classList.add("row-container");
    mainContainer.appendChild(rowContainer);

    for (let colNum = 1; colNum <= GRID_SIZE; colNum++) {
        box = document.createElement("div");
        box.classList.add("box");

        let boxEventListener = function(event) {
            event.target.style["background-color"] = rgb(
                (rowNum - 1) * BOX_INDEX_COLOR_SCALE,
                STATIC_GREEN_VAL,
                (colNum - 1) * BOX_INDEX_COLOR_SCALE
            );
        }

        /* mouse over -> color || click -> white */
        box.addEventListener("mouseenter", boxEventListener);
        box.addEventListener("mousedown", (event) => event.target.style["background-color"] = "white");
        rowContainer.appendChild(box);
    }
}


