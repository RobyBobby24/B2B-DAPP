import "../../services/firebase/firestore-database/crud-op.js"
import {requestBeersById} from "../../services/BeerApi/BeerApiHandler.js";




export let get_username = function(){
    return document.getElementById("username").value
}

export let get_text_review = function(){
    return document.getElementById("review").value
}

export let get_actual_date = function(){
    return Date.now();
}

export let get_review = async function () {
    return {
        username: get_username(),
        review: get_text_review(),
        date : get_actual_date(),
        beer_id: await id_from_url(),
    }

}

// set method
export let set_review = function (objs, user_id, rew_id, date_id){
    document.getElementById(user_id).value = obj.username
    document.getElementById(rew_id).value = obj.review
    document.getElementById(date_id).value = new Date(obj.date).toISOString()
}

export let insert_rew = function(objs) {
    document.getElementById("review_content").replaceChildren()
    for(let obj of objs ){
        let html = `<li className="media">
                                <a className="pull-left">
                                    <img className="media-object comment-avatar" src="https://icon-library.com/images/user-icon-image/user-icon-image-2.jpg" alt="" width="50" height="50">
                                </a>
                                <div className="media-body">
                                    <div className="comment-info">
                                        <div className="comment-author">
                                            <a> ${obj.username}</a>
                                        </div>
                                        <time>${new Date(obj.date).toGMTString()}</time>
                                        <a className="comment-button" href="#!"><i className="tf-ion-chatbubbles"></i>Reply</a>
                                    </div>
                                    <p>
                                        ${obj.review}
                                    </p>
                                </div>
                            </li>`
        document.getElementById("review_content").insertAdjacentHTML("beforeend", html)
    }
}





export let set_beer = async function (id, img_id, name_id, link_id, property_id, description_id) {
    let beer = await requestBeersById(id)
    document.getElementById(img_id).src = beer[0].image_url
    document.getElementById(name_id).textContent = beer[0].name
    if (link_id) document.getElementById(link_id).href = document.getElementById(link_id).href + "?id=" + id
    document.getElementById(property_id).textContent = beer[0].abv + "%"
    if (description_id) document.getElementById(description_id).textContent = beer[0].description
}

export let id_from_url = async function (){
    const searchParams = await new URLSearchParams(window.location.search);
    return searchParams.get("id")
}


// search

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
