/**
 * @returns {*} the username written in the review form
 */
let get_username = function(){
    return document.getElementById("username").value
}

/**
 * @returns {*} text written in the review form
 */
let get_text_review = function(){
    return document.getElementById("review").value
}

/**
 * @returns {number} return timestamp of now
 */
let get_actual_date = function(){
    return Date.now();
}

/**
 * return the data of new review
 * @returns {Promise<{date: number, review: *, beer_id: string, username: *}>}
 */
export let get_review = async function () {
    return {
        username: get_username(),
        review: get_text_review(),
        date : get_actual_date(),
        beer_id: await id_from_url(),
    }

}

/**
 * set the values of the form review
 * @param username new username value
 * @param review new review value
 */
export let set_input_rew = function ( username="", review=""){
    document.getElementById("username").value = username
    document.getElementById("review").value = review
}

/**
 * this function check and eventualy hide the button
 * @param min_rews_number minimum number of reviews that hide the SEE MORE button
 * @param rews_number number of review
 */
let hide_button = function (min_rews_number, rews_number){
    if(rews_number <= min_rews_number){
        document.getElementById("see-more").style.display = "none"
    }
    else {
        document.getElementById("see-more").style.display = ""
    }
}

/**
 * set the label of the number of review
 * @param number_rews total number of review
 */
let set_number_rews_label = function (number_rews){
    if( number_rews == 1){
        document.getElementById("number-rews").innerText = `${number_rews} Review`
    }
    else{
        document.getElementById("number-rews").innerText = `${number_rews} Reviews`
    }
}

/**
 * insert HTML relative to a review
 * @param objs list of object each one represent a review
 */
let insert_rews_HTML = function (objs){
    for(let obj of objs ){
        let html = `<li class="media">
                                <a class="pull-left">
                                    <img class="media-object comment-avatar" src="https://thumbs.dreamstime.com/z/birra-bevente-dell-uomo-avido-25256367.jpg?w=576" alt="" width="50" height="50">
                                </a>
                                <div class="media-body">
                                    <div class="comment-info">
                                        <div class="comment-author">
                                            <a> ${obj.username}</a>
                                        </div>
                                        <time>${new Date(obj.date).toGMTString()}</time>
                                        <!-- <a class="comment-button" href="#!"><i class="tf-ion-chatbubbles"></i>Reply</a> -->
                                    </div>
                                    <p>
                                        ${obj.review}
                                    </p>
                                </div>
                            </li>`
        document.getElementById("review_content").insertAdjacentHTML("beforeend", html)
    }
}


/**
 * manage all the process of insert html reviews, do all the necessary check
 * @param objs reviews
 * @param total_rews total number of reviews (not only the passed with objs)
 * @param hide_button_val if do or not the check on the button SEE MORE
 */
export let insert_rew = function(objs, total_rews = null, hide_button_val = true) {
    document.getElementById("review_content").replaceChildren()
    if(hide_button_val){
        if(total_rews == null){
            hide_button(3, objs.length)
        }
        else {
            hide_button(3, total_rews)
        }
    }
    set_number_rews_label(total_rews)
    insert_rews_HTML(objs)
}


/**
 * set beer data
 * @param beer object with beer data
 * @param img_id
 * @param name_id
 * @param link_id
 * @param property_id
 * @param description_id
 * @returns {Promise<void>}
 */
export let set_beer = async function (beer, img_id, name_id, link_id, property_id, description_id) {
    document.getElementById(img_id).src = beer.image_url
    document.getElementById(name_id).textContent = beer.name
    if (link_id) document.getElementById(link_id).href = document.getElementById(link_id).href + "?id=" + beer.id
    document.getElementById(property_id).textContent = beer.abv + "%"
    if (description_id) document.getElementById(description_id).textContent = beer.description
}

/**
 * get the id of the product in the url
 * @returns {Promise<string>}
 */
export let id_from_url = async function (){
    const searchParams = await new URLSearchParams(window.location.search);
    return searchParams.get("id")
}

/**
 * replace the recommended in the search bar with the new recommended
 * @param id callback to calculate the id of each recommended
 * @param objs new recommended
 * @returns {Promise<void>}
 */
export let replace_search_recommended = async function (id = ()=>{}, objs = []) {
    document.getElementById("recommended").replaceChildren()
    for( let i in objs){
        let html = `<li id = "${id(i)}" class="list-group-item"  aria-current="true" style="z-index: 2">${objs[i].name} </li>`
        document.getElementById("recommended").insertAdjacentHTML("beforeend", html)
    }
}

/**
 * get the text written in the search bar
 * @returns {Promise<*>}
 */
export let get_search_input = async function(){
    return document.getElementById("search_input").value
}

/**
 * set the text written in the search bar
 * @param text
 */
export let set_search_input = function(text){
    document.getElementById("search_input").value = text
}

/**
 * manage recommended engine (replace with new recommended and add the events)
 * @param objs new recommended
 * @returns {Promise<void>}
 */
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

/**
 * go to search page ( with get method to pass the search_key)
 * @param search_key text in the search bar used to find the results
 * @returns {Promise<void>}
 */
export let search_results = async function (search_key){
    search_key = search_key.replace("#","%23")
    window.location.assign(`../search/search.html?searchkey=${search_key}`)
}
