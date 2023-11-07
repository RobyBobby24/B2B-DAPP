import {push_img, pull_img_url} from "../../services/firebase/storage/manage_storage.js"
import {requestRandomBeer} from "../../services/BeerApi/BeerApiHandler.js";

export let set_background_img= function (img_name, img_id){
    pull_img_url(img_name,(url)=>{
        document.getElementById(img_id).
            style.backgroundImage = `url(${url})`
        //img.setAttribute('src', `background-image: url(${url});`);
        console.log(url)
    } )
}

export let set_random_beer = async function (img_id, name_id, property_id, description_id) {
    let beer = await requestRandomBeer()
    document.getElementById(img_id).src = beer[0].image_url
    document.getElementById(name_id).textContent = beer[0].name
    document.getElementById(property_id).textContent = beer[0].abv + "%"
    if (description_id) document.getElementById(description_id).textContent = beer[0].description
}