/** 
 * This file is intended to create a 16x16 grid of cells within a high-level container div
 **/


const mainContainer = document.querySelector(".box-container");

/* 16 x 16 grid */
/* first make 16 row containers */

let rowContainer;
let box;
for (let i = 0; i < 16; i++) {
    rowContainer = document.createElement("div"); 
    rowContainer.classList.add("row-container");
    mainContainer.appendChild(rowContainer);

    for (let j = 0; j < 16; j++) {
        box = document.createElement("div");
        box.classList.add("box");
        rowContainer.appendChild(box);
    }
}


