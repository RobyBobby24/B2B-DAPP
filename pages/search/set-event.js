import {insert_beer, replace_search_recommended, get_search_input, recommended_change} from "./utility-function.js";
import {query_by_preamble} from "../../services/firebase/firestore-database/crud-op.js";
import { requestBeersByName} from "../../services/BeerApi/BeerApiHandler.js"

/*
for(let i=1 ; i<=5; i++){
    document.getElementById( `element${i}search`).addEventListener("mouseover", () => {
        document.getElementById( `element${i}search`).style.filter = 'brightness(50%)'})
    document.getElementById( `element${i}search`).addEventListener("mouseout", () => {
        document.getElementById( `element${i}search`).style.filter = 'brightness(100%)'})
}
 */


document.getElementById("search_input").addEventListener("keyup", async () => {
    let input = await get_search_input()
    /*
    let objs = [
        {
            name: "Beer1",
            number_of_requests: 10
        },
        {
            name: "Beer2",
            number_of_requests: 5
        },
        {
            name: "Beer3",
            number_of_requests: 2
        }
    ]
     */

    let objs = await query_by_preamble(
        "Beer_Id",
        "name",
        input,
        "number_calls",
        5,
        )
    recommended_change(objs)
})


document.getElementById("search_input").addEventListener("click", ()=>{recommended_change()})

//document.getElementById("recommended_div").addEventListener("focousout", ()=>{replace_search_recommended()})

document.getElementById("discover_button").addEventListener("click",async () => {
    let input = await get_search_input()
    let objs = await requestBeersByName(input)
    insert_beer(objs)
})


