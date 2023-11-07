

export async function requestBeersByName(name, postprocessing = ()=>{}, error = ()=>{}) {
     let result = await fetch(`https://api.punkapi.com/v2/beers/${name}`)
     let json = await result.json()
    /* postprocessing(json) */
    return json

}

async function requestBeersById(id, postprocessing = ()=>{}, error = ()=>{}) {
    try{
        let result = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
        let json = await result.json()
        /* postprocessing(json) */
        return json
    }
    catch (e) {
        error(e)
    }



}



async function requestRandomBeer( postprocessing = ()=>{}, error = ()=>{}) {
    try{
        let result = await fetch(`https://api.punkapi.com/v2/beers/random`)
        let json = await result.json()
        /*postprocessing(json)*/
        return json
    }
    catch (e) {
        error(e)
    }



}
