const container = document.querySelector("#container"); 
const buttonContainer = document.createElement("div"); 
const resizeButton = document.querySelector("#resize-button"); 
const resetButton = document.querySelector("#reset-button"); 

//Styling
buttonContainer.style.display = "flex"; 
buttonContainer.style.justifyContent = "center"; 
buttonContainer.style.gap = "10px"; 
buttonContainer.style.width = "auto"; 
buttonContainer.style.height = "800px"; 
buttonContainer.style.marginLeft = "100px"; 
buttonContainer.style.marginRight = "-300px"; 

resizeButton.style.height = "50px";
resizeButton.style.width = "100px";

resetButton.style.height = "50px";
resetButton.style.width = "100px";

container.style.display = "flex"; 
container.style.flexWrap = "wrap"; 
container.style.width = "800px";
container.style.height = "800px"; 
container.style.margin = "0 auto"; 

const mainContainer = document.createElement("div");
mainContainer.style.display = "flex"; 
mainContainer.style.alignItems = "center"; 
mainContainer.appendChild(buttonContainer);
mainContainer.appendChild(container);

buttonContainer.appendChild(resizeButton);
buttonContainer.appendChild(resetButton);

document.body.appendChild(mainContainer);

function createGrid(size) {
    container.innerHTML = ""; 
    const squareSize = 800 / size 

    //Create each grid square
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

//Allows user to choose a size for the grid
resizeButton.addEventListener("click", () => {
    let gridSize = prompt("Enter the number of squares per size (max 100): ", 16); 
    gridSize = parseInt(gridSize); 

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        createGrid(gridSize);
    }
})

//Reset the grid
resetButton.addEventListener("click", () => {
    const gridItems = container.querySelectorAll("div");
    gridItems.forEach(gridItem => {
        gridItem.style.backgroundColor = "transparent"; 
    });
})

createGrid(16);