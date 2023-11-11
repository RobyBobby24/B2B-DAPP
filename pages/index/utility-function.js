/**
 * inserts a list of beers in html
 * @param beers list to insert
 * @returns {Promise<void>}
 */
export let set_beers = async function (beers) {
    let pos = 1
    for(let beer of beers){
        document.getElementById(`product-${pos}-img`).src = beer.image_url
        document.getElementById(`product-${pos}-name`).textContent = beer.name
        document.getElementById(`product-${pos}-link`).href = document.getElementById(`product-${pos}-link`).href + "?id=" + beer.id
        document.getElementById(`product-${pos}-property`).textContent = beer.abv + "%"
        pos +=1
    }

}

/**
 * replaces the recommended beer in the search bar with the new recommended
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
 * gets the written text in the search bar
 * @returns {Promise<*>}
 */
export let get_search_input = async function(){
    return document.getElementById("search_input").value
}

/**
 * sets the written text in the search bar
 * @param text
 */
export let set_search_input = function(text){
    document.getElementById("search_input").value = text
}

/**
 * manages recommender engine (replacing with new recommended and adding events)
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
 * changing url in order to switch to the search page (passing the search_key in the query string)
 * @param search_key text in the search bar used to find the results
 * @returns {Promise<void>}
 */
export let search_results = async function (search_key){
    search_key = search_key.replace("#","%23")
    window.location.assign(`../search/search.html?searchkey=${search_key}`)
}