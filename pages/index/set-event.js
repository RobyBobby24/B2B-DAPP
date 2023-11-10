import {search_results, set_background_img, set_beers, get_search_input, recommended_change, replace_search_recommended} from "./utility-function.js";
import {query_by_preamble} from "../../services/persitence_manager.js";
import {requestBeersByName, requestBeersById} from "../../services/persitence_manager.js";

/*
document.addEventListener("DOMContentLoaded", ()=>{
    for (let i=1 ; i<=3; i++){
        set_background_img(`slider-${i}.jpeg`, `slide${i}`)
    }
})
 */



// for loading beers by id in index.html
document.addEventListener("DOMContentLoaded", async () => {
    let arrayOfId = [123, 192, 40, 154, 206, 94]
    let beers = []
    for (let id of arrayOfId) {
         beers.push( await requestBeersById(id))
    }
    set_beers(beers)
})


// for loading random beers in index.html
/*
document.addEventListener("DOMContentLoaded", ()=>{
    for (let i=1 ; i<=6; i++){
        set_random_beer(`product-${i}-img`, `product-${i}-name`, `product-${i}-property`)
    }
})
 */

document.getElementById("search_input").addEventListener("keyup", async (event) => {
    if(event.key == "Enter"){
        let input = await get_search_input()
        search_results(input)
    }
    else {
        let input = await get_search_input()

        let objs = await query_by_preamble(
            "Beer_Id",
            "name",
            input,
            "number_calls",
            5,
        )
        recommended_change(objs)
    }
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