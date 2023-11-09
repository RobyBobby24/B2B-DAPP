import {getFirestore, collection, getDocs, addDoc, setDoc, deleteDoc, updateDoc, doc, getDoc, orderBy, limit, query, where, startAt, endAt} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import "../conf-firebase.js"
const db = getFirestore()
export const store_rew =  async function (obj, collection_name, error= ()=>{}, postprocessing = ()=>{}) {
    try {
        // preprocessing
        if( typeof(obj) == "function"){
            obj = obj()
        }

        // execute operation
        let col = collection(db, collection_name)
        let result = await addDoc(col, obj)

        // postprocessing
        console.log("ok")
        postprocessing()

    }
    catch (e) {
        console.log(e)
        error()
    }
}

export const store_rew_byid = async function (obj, collection_name, id, error= ()=>{}, postprocessing = ()=>{}) {
    try{
        // preprocessing
        if( typeof(obj) == "function"){
            obj = obj()
        }
        if( typeof(id) == "function"){
            id = id()
        }

        // execute operation
        let result = await setDoc(doc(db, "Review", id), obj)

        // postprocessing
        console.log("ok")
        postprocessing()

        }
    catch (e) {
        console.log(e)
        error()
    }
}

export const load_rew = async function (collection_name, id, postprocessing, error = ()=>{}, do_not_exist = ()=>{}){
    try{
        // preprocessing
        if( typeof(id)){
            id = id()
        }

        // execute operation
        let doc_ref = doc(db, collection_name, id)
        let snapshot = await getDoc(doc_ref)

        // postprocessing
        if( snapshot.exists() ){
            let result = snapshot.data()
            postprocessing(result)
            return result
            console.log("ok")
        }
        else{
            console.log("do not exist")
            do_not_exist()
        }
    }
    catch (e){
        console.log(e)
        error()
    }
}

export const update_rew = async function (obj, collection_name, id, error = ()=>{}, postprocessing = ()=>{}, do_not_exist = ()=>{}){
    try{
        if (typeof(obj) == "function"){
            obj = obj()
        }
        if (typeof(id) == "function"){
            id = id()
        }

        // execute operation
        let doc_ref = doc(db, collection_name, id)
        let snapshot = await getDoc(doc_ref)


        if( snapshot.exists() ){
            await updateDoc(doc_ref, object)
            // postprocessing
            postprocessing()
            console.log("ok")

        }
        else {
            console.log("do not exist")
            do_not_exist()
        }
    }
    catch (e) {
        console.log(e)
        error()
    }
}

export const delete_rew = async function(collection_name, id, error = ()=>{}, postprocessing = ()=>{}){
    try{
        // preprocessing
        if( typeof(id) == "function"){
            id = id()
        }

        // execute operation
        await deleteDoc(doc(db, collection_name, id))

        // postprocessing
        postprocessing()
        console.log("ok")
    }
    catch (e) {
        console.log(e)
        error()
    }
}

// da testare
export const get_by_attribute = async function(attribute, collection_name, attribute_name, limit_number=null, error = ()=>{}, postprocessing = ()=>{}, do_not_exist = ()=>{}){
    try{
        // preprocessing
        if( typeof(attribute) == "function"){
            attribute = attribute()
        }

        // execute operation
        let q
        if( limit == null){
            q = query(collection(db, collection_name), where(attribute_name, "==", attribute));
        }
        else {
            q = query(collection(db, collection_name), where(attribute_name, "==", attribute), limit(limit_number));
        }
        let snapshot = await getDocs(q)

        // postprocessing
        let result = []
        snapshot.forEach((snap_item) => {
            result.push(snap_item.data())
        })
        postprocessing(result)
        return result
    }
    catch (e) {
        console.log(e)
        error()
    }

}

export const query_by_preamble = async function (collection_name, attribute, search_word, order_by_field, max_item_number = null, error = ()=>{}, postprocessing = ()=>{}) {
    try {
        // preprocessing
        if (typeof (attribute) == "function") {
            attribute = attribute()
        }

        let q
        // execute operation
        if (max_item_number == null) {
            q = query(collection(db, collection_name), orderBy(attribute), orderBy(order_by_field), startAt(search_word), endAt(search_word+"\uf8ff"));
        } else {
            q = query(collection(db, collection_name), orderBy(attribute), orderBy(order_by_field), startAt(search_word), endAt(search_word+"\uf8ff"), limit(max_item_number));
        }

        let snapshot = await getDocs(q)
        // postprocessing
        let result = []
        snapshot.forEach((snap_item) => {
            result.push(snap_item.data())
        })
        postprocessing(result)
        return result
    } catch (e) {
        console.log(e)
        error()
    }
}
