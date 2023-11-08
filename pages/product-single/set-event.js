import {delete_rew, load_rew, store_rew, update_rew} from "../../services/firebase/firestore-database/crud-op.js";
import {get_review, get_id, set_review, set_beer} from "./utility-function.js"

// for loading beers by id in product-single.html
document.addEventListener("DOMContentLoaded", ()=>{
    let arrayOfId = [123,192,40]
    for (let i=1 ; i<=3; i++){
        set_beer(arrayOfId[i-1], `product-${i}-img`, `product-${i}-name`, `product-${i}-property`)
    }
})

/*
document.getElementById( "store").addEventListener("click",()=> {
    store_rew(get_review, "Review")
})

document.getElementById( "load").addEventListener("click", ()=>{
    load_rew("Review", get_id, set_review)
})

document.getElementById( "update").addEventListener("click", ()=> {
    update_rew(get_review, "Review", get_id)
})

document.getElementById( "delete").addEventListener("click", ()=>{
    delete_rew("Review",get_id)
})
*/


