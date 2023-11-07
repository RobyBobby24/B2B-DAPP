for(let i=1 ; i<=5; i++){
    document.getElementById( `element${i}search`).addEventListener("mouseover", () => {
        document.getElementById( `element${i}search`).style.filter = 'brightness(50%)'})
    document.getElementById( `element${i}search`).addEventListener("mouseout", () => {
        document.getElementById( `element${i}search`).style.filter = 'brightness(100%)'})
}

