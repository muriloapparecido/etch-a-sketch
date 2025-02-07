const container = document.querySelector("#container"); 
const button = document.querySelector("#resize-button"); 

container.style.display = "flex"; 
container.style.flexWrap = "wrap"; 
container.style.width = "800px";
container.style.height = "800px"; 
container.style.margin = "0 auto"; 

button.style.marginLeft = "200px";
button.style.height = "50px"
button.style.width = "100px"
button.style.position = "relative";
button.style.top = "50px"; 


function createGrid(size) {
    container.innerHTML = ""; 
    const squareSize = 800 / size 

    for (let i = 0; i < size * size; i++){
        const gridItem = document.createElement("div"); 
        gridItem.style.width = `${squareSize}px`;
        gridItem.style.height = `${squareSize}px`;
        gridItem.style.border = "0.5px solid white"; 
        gridItem.style.boxSizing = "border-box";


        //Changes color of gridItem when hovered
        gridItem.addEventListener("mouseover", () => {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                    ${Math.floor(Math.random() * 256)}, 
                                    ${Math.floor(Math.random() * 256)})`;

            gridItem.style.backgroundColor = randomColor;
        })

        container.appendChild(gridItem); 
    }    
}


button.addEventListener("click", () => {
    let gridSize = prompt("Enter the number of squares per size (max 100): ", 16); 
    gridSize = parseInt(gridSize); 

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        createGrid(gridSize);
    }
})

createGrid(16);