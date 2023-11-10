import {search_results, set_beers, get_search_input, recommended_change, replace_search_recommended} from "./utility-function.js";
import {load_ordered, query_by_preamble} from "../../services/persitence_manager.js";
import {requestBeersById} from "../../services/persitence_manager.js";


/**
 * loading beers by id in index.html
 */
document.addEventListener("DOMContentLoaded", async () => {
    let arrayOfId = await load_ordered("Beer_Id","number_calls","desc",6)
    let beers = []
    for (let obj of arrayOfId) {
        let beer = await requestBeersById(obj.id)
         beers.push( beer[0])
    }
    set_beers(beers)
})

/**
 * show the recommended
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

/**
 * start the research
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
 * reset the recommended
 */
document.getElementById("recommended_div").addEventListener("focusout", ()=>{
    setTimeout(replace_search_recommended,"125")})