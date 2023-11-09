import {delete_rew, load_rew, query_by_preamble, store_rew, update_rew, get_by_attribute} from "../../services/firebase/firestore-database/crud-op.js";
import {get_review, set_review, set_beer, id_from_url, insert_rew, set_input_rew} from "./utility-function.js"
import {get_search_input, recommended_change, replace_search_recommended, search_results} from "../index/utility-function.js";
import {requestBeersByName} from "../../services/BeerApi/BeerApiHandler.js";

// for loading beers by id in index.html
document.addEventListener("DOMContentLoaded", ()=>{
    let arrayOfId = [123,192,40,154,206,94]
    for (let i=1 ; i<=6; i++){
        set_beer(arrayOfId[i-1], `product-${i}-img`, `product-${i}-name`,
            `product-${i}-link`, `product-${i}-property`)
    }
})

document.addEventListener("DOMContentLoaded", async ()=>{
        let id = await id_from_url()
        set_beer(id, "product-single-img", "product-single-name", null,
            "product-single-property", "product-single-description")
    })


document.getElementById( "submit_rew").addEventListener("click",async () => {
    store_rew(await get_review(), "Review")
    set_input_rew()
})

document.getElementById( "submit_rew").addEventListener("click",async () => {
    let id = await id_from_url()
    let reviews = await get_by_attribute( id, "Review","beer_id",3, "date", "desc")
    insert_rew(reviews)
})

document.addEventListener("DOMContentLoaded", async ()=>{
    let id = await id_from_url()
    let reviews = await get_by_attribute( id, "Review","beer_id",3, "date", "desc")
    insert_rew(reviews)
})
/*
document.getElementById( "load").addEventListener("click", ()=>{
    load_rew("Review", id_from_url, set_review)
})

document.getElementById( "update").addEventListener("click", ()=> {
    update_rew(get_review, "Review", id_from_url)
})

document.getElementById( "delete").addEventListener("click", ()=>{
    delete_rew("Review",id_from_url)
})
*/

// search
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