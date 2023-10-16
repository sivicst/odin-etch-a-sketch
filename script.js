const container = document.querySelector(".container");

for(let i=0; i < 16; i++) {
    const divRow = document.createElement("div");
    divRow.classList.add("row");
    for(let i=0; i < 16; i++) {
        const divCol = document.createElement("div");
        divCol.classList.add("col");
        divRow.appendChild(divCol);
    }
    container.appendChild(divRow);
}

const gridElements = document.querySelectorAll(".col");
for(const gridEl of gridElements) {
    gridEl.addEventListener("mouseover", changeColor);
}

function changeColor(e) {
    // e.target.style.backgroundColor = "black";
    e.target.classList.add("paint");
}