import {set_background_img, set_random_beer} from "./utility-function.js";


document.addEventListener("DOMContentLoaded", ()=>{
    for (let i=1 ; i<=3; i++){
        set_background_img(`slider-${i}.jpeg`, `slide${i}`)
    }
})


// for loading random beers in index.html
document.addEventListener("DOMContentLoaded", ()=>{
    for (let i=1 ; i<=6; i++){
        set_random_beer(`product-${i}-img`, `product-${i}-name`, `product-${i}-property`)
    }
})
