const container = document.querySelector("#container"); 
container.style.display = "flex"; 
container.style.justifyContent = "center"; 
container.style.flexWrap = "wrap"; 
container.style.width = "740px";
container.style.margin = "0 auto"; 

for (let i = 0; i < 256; i++){
    const gridItem = document.createElement("div");
    gridItem.style.width = "40px";
    gridItem.style.height = "40px";
    gridItem.style.border = "2px solid black"; 
    container.appendChild(gridItem); 
}