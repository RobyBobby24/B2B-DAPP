import {set_background_img, set_beer} from "./utility-function.js";


document.addEventListener("DOMContentLoaded", ()=>{
    set_background_img("slider-1.jpeg", "slide1")
    set_background_img("slider-2.jpeg", "slide2")
    set_background_img("slider-3.jpeg", "slide3")
})


document.addEventListener("DOMContentLoaded", ()=>{
    set_beer("product-1-img", "product-1-name", "product-1-property")
    set_beer("product-2-img", "product-2-name", "product-2-property")
    set_beer("product-3-img", "product-3-name", "product-3-property")
    set_beer("product-4-img", "product-4-name", "product-4-property")
    set_beer("product-5-img", "product-5-name", "product-5-property")
    set_beer("product-6-img", "product-6-name", "product-6-property")
})
