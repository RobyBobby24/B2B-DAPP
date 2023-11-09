import {pull_img_url} from "../../services/firebase/storage/manage_storage.js"
import {requestBeersById} from "../../services/BeerApi/BeerApiHandler.js";

export let set_background_img= function (img_name, img_id){
    pull_img_url(img_name,(url)=>{
        document.getElementById(img_id).
            style.backgroundImage = `url(${url})`
        //img.setAttribute('src', `background-image: url(${url});`);
        console.log(url)
    } )
}

export let set_beer = async function (id, img_id, name_id, link_id, property_id, description_id) {
    let beer = await requestBeersById(id)
    document.getElementById(img_id).src = beer[0].image_url
    document.getElementById(name_id).textContent = beer[0].name
    document.getElementById(link_id).href = document.getElementById(link_id).href + "?id=" + id
    document.getElementById(property_id).textContent = beer[0].abv + "%"
    if (description_id) document.getElementById(description_id).textContent = beer[0].description
}

export let replace_search_recommended = async function (id = ()=>{}, objs = []) {
    document.getElementById("recommended").replaceChildren()
    for( let i in objs){
        let html = `<li id = "${id(i)}" class="list-group-item"  aria-current="true" style="z-index: 2">${objs[i].name} </li>`
        document.getElementById("recommended").insertAdjacentHTML("beforeend", html)
    }
}

export let get_search_input = async function(){
    return document.getElementById("search_input").value
}

export let set_search_input = function(text){
    document.getElementById("search_input").value = text
}


export let recommended_change = async function (objs=[]) {
    await replace_search_recommended((i)=>{return `element${i}search`}, objs)
    for (let i in objs) {

        document.getElementById( `element${i}search`).addEventListener("mouseover", () => {
            document.getElementById( `element${i}search`).style.filter = 'brightness(50%)'})

        document.getElementById( `element${i}search`).addEventListener("mouseout", () => {
            document.getElementById( `element${i}search`).style.filter = 'brightness(100%)'})

        document.getElementById( `element${i}search`).addEventListener("click", () => {
            let text = document.getElementById( `element${i}search`).innerText
            search_results(text)
        })
    }
}

export let search_results = async function (search_key){
    search_key = search_key.replace("#","%23")
    window.location.assign(`../search/search.html?searchkey=${search_key}`)
}

/* for loading random beers
export let set_random_beer = async function (img_id, name_id, property_id, description_id) {
    let beer = await requestRandomBeer()
    document.getElementById(img_id).src = beer[0].image_url
    document.getElementById(name_id).textContent = beer[0].name
    document.getElementById(property_id).textContent = beer[0].abv + "%"
    if (description_id) document.getElementById(description_id).textContent = beer[0].description
}
*/
