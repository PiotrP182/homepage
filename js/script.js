console.log("Czesc");

let button = document.querySelector(".headerButton")
let header = document.querySelector(".header")
button.addEventListener("click", () => { header.classList.toggle("headerSpecial") });

let tableButton = document.querySelector(".tableButton")
let tableHide = document.querySelector(".table")
let themeName = document.querySelector(".themeName")

tableButton.addEventListener("click", () => {
    tableHide.classList.toggle("hideRate");
    themeName.innerText = tableHide.classList.contains("hideRate") ? "Pokaż" : "Ukryj" ;
});