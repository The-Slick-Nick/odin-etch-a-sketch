/** 
 * This file is intended to create a 16x16 grid of cells within a high-level container div
 **/


const mainContainer = document.querySelector(".box-container");

/* 16 x 16 grid - first make 16 row containers */
let newElement;
for (let i = 0; i < 16; i++) {
    newElement = document.createElement("div"); 
    newElement.classList.add("row-container");
    mainContainer.appendChild(newElement);
}


