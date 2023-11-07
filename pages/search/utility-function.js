import {requestBeersByName} from "../../services/BeerApi/BeerApiHandler.js";

async function insertBeerInHTML(name ) {

    let json = await requestBeersByName(name, ()=>{}, ()=>{})
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