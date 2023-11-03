import {delete_rew, load_rew, store_rew, update_rew} from "../../services/firebase/firestore-database/crud-op.js";
import {get_review, get_id, set_review} from "./utility-function"

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