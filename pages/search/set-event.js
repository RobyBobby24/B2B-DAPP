import {insert_beer, replace_search_recommended, get_search_input, recommended_change} from "./utility-function.js";
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
    console.log(input)
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
    /*
    let objs = await query_by_preamble(
        "Beer_Index",
        "name",
        input,
        "number_calls",
        null,
        "asc",()=>{}
        )
     */
    recommended_change(objs)
})


document.getElementById("search_input").addEventListener("click", ()=>{recommended_change()})

//document.getElementById("search_input").addEventListener("focusout", ()=>{replace_search_recommended()})


