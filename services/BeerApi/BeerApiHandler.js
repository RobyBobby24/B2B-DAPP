

async function requestBeersByName(name, postprocessing = ()=>{}) {
    await result = fetch(`https://api.punkapi.com/v2/beers/${name}`)
    await json = result.json()
    postprocessing(json)

}

async function requestBeersById(id, postprocessing = ()=>{}) {
    await result = fetch(`https://api.punkapi.com/v2/beers/${id}`)
    await json = result.json()
    postprocessing(json)


}
