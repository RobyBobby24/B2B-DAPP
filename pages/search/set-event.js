import {insert_beer, replace_search_recommended, get_search_input, recommended_change, get_searchkey_from_url} from "./utility-function.js";
import {query_by_preamble} from "../../services/persitence_manager.js";
import { requestBeersByName} from "../../services/persitence_manager.js"

/*
for(let i=1 ; i<=5; i++){
    document.getElementById( `element${i}search`).addEventListener("mouseover", () => {
        document.getElementById( `element${i}search`).style.filter = 'brightness(50%)'})
    document.getElementById( `element${i}search`).addEventListener("mouseout", () => {
        document.getElementById( `element${i}search`).style.filter = 'brightness(100%)'})
}
 */

/**
 * show the recommended by keyboard
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

/**
 * show the recommended when search bar be clicked
 */
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

/**
 * unshow the recommended when search bar be unfocus
 */
document.getElementById("recommended_div").addEventListener("focusout", ()=>{
    setTimeout(replace_search_recommended,"125")})

/**
 * start the research
 */
document.getElementById("discover_button").addEventListener("click",async () => {
    let input = await get_search_input()
    let objs = await requestBeersByName(input)
    insert_beer(objs)
    rename_url(input)
})

/**
 * show results
 */
document.addEventListener("DOMContentLoaded", async () => {
    let search_key = await get_searchkey_from_url()
    let objs = await requestBeersByName(search_key)
    insert_beer(objs)

})


