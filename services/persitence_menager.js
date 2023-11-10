import "./firebase/conf-firebase.js"
import * as storage from "./firebase/storage/manage_storage.js"
import * as database from "./firebase/firestore-database/crud-op.js"
import * as beer_database from "./BeerApi/BeerApiHandler.js"

// firebase function
export const store_rew =  async function (obj, collection_name, error= ()=>{}, postprocessing = ()=>{}) {
   return database.store_rew(obj, collection_name, error, postprocessing)
}

export const store_rew_byid = async function (obj, collection_name, id, error= ()=>{}, postprocessing = ()=>{}) {
   return database.store_rew_byid(obj, collection_name, id, error, postprocessing)
}

export const load_rew = async function (collection_name, id, postprocessing, error = ()=>{}, do_not_exist = ()=>{}){
    return database.load_rew(collection_name, id, postprocessing, error, do_not_exist)
}

export const update_rew = async function (obj, collection_name, id, error = ()=>{}, postprocessing = ()=>{}, do_not_exist = ()=>{}){
    return database.update_rew(obj, collection_name, id, error, postprocessing, do_not_exist)
}

export const update_by_function =  async function (collection_name,attribute_name, attribute, update_function ){
    return database.update_by_function(collection_name,attribute_name, attribute, update_function)
}

export const delete_rew = async function(collection_name, id, error = ()=>{}, postprocessing = ()=>{}){
    return database.delete_rew(collection_name, id, error, postprocessing)
}


export const count_objs = async function(attribute_val, collection_name, attribute_name){
    return database.count_objs(attribute_val, collection_name, attribute_name)
}


export const get_by_attribute = async function(attribute, collection_name, attribute_name, limit_number=null, order_by =null, order_direction = "asc", error = ()=>{}, postprocessing = ()=>{}, do_not_exist = ()=>{}){
    return database.get_by_attribute(attribute, collection_name, attribute_name, limit_number, order_by, order_direction , error , postprocessing , do_not_exist )
}


export const query_by_preamble = async function (collection_name, attribute, search_word, order_by_field, max_item_number = null, error = ()=>{}, postprocessing = ()=>{}) {
    return database.query_by_preamble(collection_name, attribute, search_word, order_by_field, max_item_number , error , postprocessing )
}




// storage

export let push_img = async function (path_img, file,  postprocessing= ()=>{}, error = ()=>{}) {
    return storage.push_img(path_img, file,  postprocessing, error)
}

export let pull_img_url = async function (path_img, postprocessing= ()=>{}, error = ()=>{}){
    return storage.pull_img_url(path_img, postprocessing, error)
}


// api_beer

export async function requestBeersByName(name, postprocessing = ()=>{}, error = ()=>{}) {
    return beer_database.requestBeersByName(name, postprocessing, error)
}

export async function requestBeersById(id, postprocessing = ()=>{}, error = ()=>{}) {
    return beer_database.requestBeersById(id, postprocessing , error )
}


export async function requestRandomBeer( postprocessing = ()=>{}, error = ()=>{}) {
    return beer_database.requestRandomBeer(postprocessing , error )
}

