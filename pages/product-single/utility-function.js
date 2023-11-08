import "../../services/firebase/firestore-database/crud-op.js"
import {requestBeersById} from "../../services/BeerApi/BeerApiHandler.js";


export let get_id = function(){
    return document.getElementById("reviewID").value
}

export let get_username = function(){
    return document.getElementById("username").value
}

export let get_text_review = function(){
    return document.getElementById("review").value
}

export let get_review = function() {
    return {
        username : get_username(),
        review : get_text_review()
    }
}

// set method
export let set_review = function (obj){
    document.getElementById("username").value = obj.username
    document.getElementById("review").value = obj.review
}

export let set_beer = async function (id, img_id, name_id, property_id, description_id) {
    let beer = await requestBeersById(id)
    document.getElementById(img_id).src = beer[0].image_url
    document.getElementById(name_id).textContent = beer[0].name
    document.getElementById(property_id).textContent = beer[0].abv + "%"
    if (description_id) document.getElementById(description_id).textContent = beer[0].description
}
