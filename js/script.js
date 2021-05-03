{
    const welcome = () => { console.log("Czesc"); }



    const hideTable = () => {
        tableHide.classList.toggle("hideRate");
        themeName.innerText = tableHide.classList.contains("hideRate") ? "Pokaż" : "Ukryj";
    };

{
    const headerSpecial = () => {
        const button = document.querySelector(".headerButton")
        const header = document.querySelector(".header")
        button.addEventListener("click", () => { header.classList.toggle("headerSpecial") });
    }
    headerSpecial();
}
    
    
    const tableHide = document.querySelector(".table")
    const themeName = document.querySelector(".themeName")
    

    const init = () => {
        let tableButton = document.querySelector(".tableButton")
        tableButton.addEventListener("click", hideTable);

        welcome();
    };

    init ();
   
}
