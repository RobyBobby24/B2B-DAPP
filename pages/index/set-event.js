import {set_background_img, set_beer} from "./utility-function.js";

document.addEventListener("DOMContentLoaded", ()=>{
    for (let i=1 ; i<=3; i++){
        set_background_img(`slider-${i}.jpeg`, `slide${i}`)
    }
})

// for loading beers by id in index.html
document.addEventListener("DOMContentLoaded", ()=>{
    let arrayOfId = [123,192,40,154,206,94]
    for (let i=1 ; i<=6; i++){
        set_beer(arrayOfId[i-1], `product-${i}-img`, `product-${i}-name`, `product-${i}-link`, `product-${i}-property`)
    }
})


// for loading random beers in index.html
/*
document.addEventListener("DOMContentLoaded", ()=>{
    for (let i=1 ; i<=6; i++){
        set_random_beer(`product-${i}-img`, `product-${i}-name`, `product-${i}-property`)
    }
})
 */
