/**
 * insert result HTML
 * @param objs beers
 * @returns {Promise<void>}
 */
export let insert_beer = async function (objs ) {
    document.getElementById("beer_results").replaceChildren()
    for(let i in objs ){
        let html =
            `<div class="row" style=" border-style: ridge" >
                <div className="col-md-9">
                    <a href="../product-single/product-single.html?id=${objs[i].id}" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <div class="row">
                                <div class="col-md-2"> 
                                    <img class="img-responsive" src=${objs[i].image_url} alt="product-img"  style="padding: 5px; position: relative; margin: auto; width: auto; height: 150px" /> 
                                </div> 
                                <div class="col-md-10"> 
                                    <h3 class="mb-1"><b>${objs[i].name}</b></h3> 
                                    <h6 style="text-align: justify; font-size: 15px" class="mb-1"> ${objs[i].description}</h6> 
                                </div> 
                            </div>
                        </div>
                    </a>
                </div>
            </div>`
        document.getElementById("beer_results").insertAdjacentHTML("beforeend", html)
    }
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
    let input = document.getElementById("search_input").value
    return input.replace("#","%23")
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
            set_search_input(text)
            replace_search_recommended()
        })
    }
}

/**
 * @returns {Promise<string>} the searchkey passed into url by get method
 */
export let get_searchkey_from_url = async function (){
    let searchParams = await new URLSearchParams(window.location.search);
    return searchParams.get("searchkey").replace("#","%23")
}

/**
 * show the correct url without do the request when is done a research
 * @param input search key to add in the url
 * @returns {Promise<void>}
 */
export let rename_url = async function (input){
    input = input.replace("#","%23")
    history.replaceState(null, '', `search.html?searchkey=${input}`);
}