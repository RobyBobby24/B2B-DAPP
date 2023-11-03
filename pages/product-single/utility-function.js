import "../../services/firebase/firestore-database/crud-op"


export let get_id = function(){
    return document.getElementById("reviewID").value
}

export let get_username = function(){
    return document.getElementById("username").value
}

export let get_text_review = function(){
    return document.getElementById("review").value
}

export let get_review = function() {
    return {
        username : get_username(),
        review : get_text_review()
    }
}

// set method
export let set_review = function (obj){
    document.getElementById("username").value = obj.username
    document.getElementById("review").value = obj.review
}