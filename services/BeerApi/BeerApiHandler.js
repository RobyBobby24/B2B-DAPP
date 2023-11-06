

async function requestBeersByName(name, postprocessing = ()=>{}) {
     result = await fetch(`https://api.punkapi.com/v2/beers/${name}`)
     json = await result.json()
    postprocessing(json)

}

async function requestBeersById(id, postprocessing = ()=>{}) {
    result = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
    json = await result.json()
    postprocessing(json)


}
