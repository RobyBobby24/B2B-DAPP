import {query_by_preamble, store_rew, get_by_attribute, update_by_function, count_objs, requestBeersById} from "../../services/persitence_manager.js";
import {requestBeersByName} from "../../services/persitence_manager.js";
import {get_review, set_beer, id_from_url, insert_rew, set_input_rew, get_search_input, recommended_change, replace_search_recommended, search_results} from "./utility-function.js"

// see_more_button_text==true if see_more button text is SEE MORE
let see_more_button_text = true
// for loading beers by id in index.html
document.addEventListener("DOMContentLoaded", async () => {
    let arrayOfId = [123, 192, 40, 154, 206, 94]
    for (let i = 1; i <= 6; i++) {
        let beer = await requestBeersById(arrayOfId[i-1])
        set_beer(beer[0], `product-${i}-img`, `product-${i}-name`,
            `product-${i}-link`, `product-${i}-property`)
    }
})

document.addEventListener("DOMContentLoaded", async ()=>{
        let id = await id_from_url()
        let beer = await requestBeersById(id)
        set_beer(beer[0], "product-single-img", "product-single-name", null,
            "product-single-property", "product-single-description")
})

document.addEventListener("DOMContentLoaded", async ()=>{
    let id = await id_from_url()
    update_by_function("Beer_Id","id",id, (obj)=>{
        obj.number_calls += 1
    })
})

document.addEventListener("DOMContentLoaded", async ()=>{
    let id = await id_from_url()
    let reviews = await get_by_attribute( id, "Review","beer_id",3, "date", "desc")
    let number_rews = await count_objs(id,"Review","beer_id")
    insert_rew(reviews, number_rews)
})

document.getElementById( "submit_rew").addEventListener("click",async () => {
    await store_rew(await get_review(), "Review")
    set_input_rew()
    let id = await id_from_url()
    let reviews = await get_by_attribute( id, "Review","beer_id",3, "date", "desc")
    let number_rews = await count_objs(id,"Review","beer_id")
    insert_rew(reviews, number_rews)
})


document.getElementById("see-more").addEventListener("click", async () => {
    if (see_more_button_text) {
        let id = await id_from_url()
        let reviews = await get_by_attribute(id, "Review", "beer_id", null, "date", "desc")
        let number_rews = await count_objs(id,"Review","beer_id")
        insert_rew(reviews, number_rews)
        document.getElementById("see-more").innerText = "SEE LESS"
        see_more_button_text = false
    }
    else {
        let id = await id_from_url()
        let reviews = await get_by_attribute(id, "Review", "beer_id", 3, "date", "desc")
        let number_rews = await count_objs(id,"Review","beer_id")
        insert_rew(reviews, number_rews)
        document.getElementById("see-more").innerText = "SEE MORE"
        see_more_button_text = true
    }
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

