import {set_background_img, set_beer} from "./utility-function.js";
import {get_search_input, recommended_change, replace_search_recommended} from "./utility-function.js";
import {query_by_preamble} from "../../services/firebase/firestore-database/crud-op.js";
import {requestBeersByName} from "../../services/BeerApi/BeerApiHandler.js";

document.addEventListener("DOMContentLoaded", ()=>{
    for (let i=1 ; i<=3; i++){
        set_background_img(`slider-${i}.jpeg`, `slide${i}`)
    }
})

// for loading beers by id in index.html
document.addEventListener("DOMContentLoaded", ()=>{
    let arrayOfId = [123,192,40,154,206,94]
    for (let i=1 ; i<=6; i++){
        set_beer(arrayOfId[i-1], `product-${i}-img`, `product-${i}-name`,
            `product-${i}-link`, `product-${i}-property`, null)
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

document.getElementById("search_input").addEventListener("keyup", async () => {
    let input = await get_search_input()

    let objs = await query_by_preamble(
        "Beer_Id",
        "name",
        input,
        "number_calls",
        5,
    )
    recommended_change(objs)
})


document.getElementById("search_input").addEventListener("click", async () => {
    let input = await get_search_input()
    let objs = await query_by_preamble(
        "Beer_Id",
        "name",
        input,
        "number_calls",
        5,
    )
    recommended_change(objs)
})

document.getElementById("recommended_div").addEventListener("focusout", ()=>{
    setTimeout(replace_search_recommended,"125")})

document.getElementById("search_input").addEventListener("submit",async () => {
    let input = await get_search_input()
    let objs = await requestBeersByName(input)
    insert_beer(objs)
})