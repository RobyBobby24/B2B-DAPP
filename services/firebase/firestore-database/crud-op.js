import {getFirestore, collection, getDocs, addDoc, setDoc, deleteDoc, updateDoc, doc, getDoc} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
const db = getFirestore()
export const store_rew =  async function (obj, collection_name, error= ()=>{}, postprocessing = ()=>{}) {
    try {
        // preprocessing
        if( typeof(obj) == "function"){
            obj = obj()
        }

        /*
        let username = document.getElementById("username").value
        let review = document.getElementById("review").value
        let object = {
            username: username,
            review: review
        }
         */

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
        /*
        let username = document.getElementById("username").value
        let review = document.getElementById("review").value
        let id = document.getElementById("reviewID").value
        let object = {
            username : username,
            review : review
        }
         */
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
        //let id = document.getElementById("reviewID").value

        // execute operation
        let doc_ref = doc(db, collection_name, id)
        let snapshot = await getDoc(doc_ref)

        // postprocessing
        if( snapshot.exists() ){
            /*
            document.getElementById("username").value = snapshot.data().username
            document.getElementById("review").value = snapshot.data().review
            console.log("ok")
             */
            postprocessing(snapshot.data())
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
        // preprocessing
        /*
        let username = document.getElementById("username").value
        let review = document.getElementById("review").value
        let object = {
            username : username,
            review : review
        }
         */
        if (typeof(obj) == "function"){
            obj = obj()
        }
        if (typeof(id) == "function"){
            id = id()
        }
        //let id = document.getElementById("reviewID").value

        // execute operation
        let doc_ref = doc(db, collection_name, id)
        let snapshot = await getDoc(doc_ref)


        if( snapshot.exists() ){
            await updateDoc(doc_ref, object)
            // postprocessing
            postprocessing()
            /*
            document.getElementById("username").value = snapshot.data().username
            document.getElementById("review").value = snapshot.data().review
             */
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
        //let id = document.getElementById("reviewID").value

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
export const get_by_attribute = async function(attribute, collection_name, attribute_name, error = ()=>{}, postprocessing = ()=>{}, do_not_exist = ()=>{}){
    try{
        // preprocessing
        if( typeof(attribute) == "function"){
            attribute = attribute()
        }
        //let username = document.getElementById("username").value

        // execute operation
        let q = query(collection(db, collection_name), where(attribute_name, "==", attribute));
        let snapshot = await getDocs(q)

        // postprocessing
        if( snapshot.exists() ){
            /*
            document.getElementById("username").value = snapshot.data()[0].username
            document.getElementById("review").value = snapshot.data()[0].review
             */
            postprocessing()
            console.log("ok")
        }
        else{
            console.log("do not exist")
            do_not_exist()
        }
    }
    catch (e) {
        console.log(e)
        error()
    }

}