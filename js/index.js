// Automatic year update 
const updatedYear = document.getElementById("update-year");
updatedYear.innerHTML = new Date().getFullYear();

// right click disable 
document.oncontextmenu=(element)=>{
    element.preventDefault();
}