import {requestBeersByName} from "../../services/BeerApi/BeerApiHandler.js";

export let insert_beer = async function (name ) {

    let json = await requestBeersByName(name)
    let html =
        `<div class="row">"
            "<div class="col-md-2">" 
                "<img class="img-responsive" src=${json[0].image_url} alt="product-img" width="100" height="150" />" 
            "</div>" 
            "<div class="col-md-7">" 
                "<h3 class="mb-1"><b>${json[0].name}</b></h3>" 
                "<h7 class="mb-1"> ${json[0].description}</h7>" 
            "</div>" 
        "</div>"`
    document.getElementById("mainDiv").insertAdjacentElement("beforeend", html)

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
            set_search_input(text)
            replace_search_recommended()
        })
    }
}