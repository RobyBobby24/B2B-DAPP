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
    catch (error) {
        console.log(error)
        error()
    }
}

export const store_rew_byid = async function () {
    try{
        // preprocessing
        let username = document.getElementById("username").value
        let review = document.getElementById("review").value
        let id = document.getElementById("reviewID").value
        let object = {
            username : username,
            review : review
        }

        // execute operation
        let result = await setDoc(doc(db, "Review", id))

        // postprocessing
        console.log("ok")

    }
    catch (error) {
        console.log(error)
    }
}

export const load_rew = async function (){
    try{
        // preprocessing
        let id = document.getElementById("reviewID").value

        // execute operation
        let doc_ref = doc(db, "Review", id)
        let snapshot = await getDoc(doc_ref)

        // postprocessing
        if( snapshot.exists() ){
            document.getElementById("username").value = snapshot.data().username
            document.getElementById("review").value = snapshot.data().review
            console.log("ok")
        }
        else{
            console.log("do not exist")
        }
    }
    catch (error){
        console.log(error)
    }
}

export const update_rew = async function (){
    try{
        // preprocessing
        let username = document.getElementById("username").value
        let review = document.getElementById("review").value
        let object = {
            username : username,
            review : review
        }
        let id = document.getElementById("reviewID").value

        // execute operation
        let doc_ref = doc(db, "Review", id)
        let snapshot = await getDoc(doc_ref)


        if( snapshot.exists() ){
            await updateDoc(doc_ref, object)
            // postprocessing
            document.getElementById("username").value = snapshot.data().username
            document.getElementById("review").value = snapshot.data().review
            console.log("ok")
        }
        else {
            console.log("do not exist")
        }
    }
    catch (error) {
        console.log(error)
    }
}

export const delete_rew = async function(){
    try{
        // preprocessing
        let id = document.getElementById("reviewID").value

        // execute operation
        await deleteDoc(doc(db, "Review", id))

        // postprocessing
        console.log("ok")
    }
    catch (error) {
        console.log(error)
    }

}

// da testare
export const get_by_username = async function(){
    try{
        // preprocessing
        let username = document.getElementById("username").value

        // execute operation
        let q = query(collection(db, "Review"), where("username", "==", username));
        let snapshot = await getDocs(q)

        // postprocessing
        if( snapshot.exists() ){
            document.getElementById("username").value = snapshot.data()[0].username
            document.getElementById("review").value = snapshot.data()[0].review
            console.log("ok")
        }
        else{
            console.log("do not exist")
        }
        console.log("ok")
    }
    catch (error) {
        console.log(error)
    }

}