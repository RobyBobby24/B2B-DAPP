import {push_img, pull_img_url} from "../../services/firebase/storage/manage_storage.js"


export let set_background_img= function (img_name, img_id){
    pull_img_url(img_name,(url)=>{
        document.getElementById(img_id).
            style.backgroundImage = `url(${url})`
        //img.setAttribute('src', `background-image: url(${url});`);
        console.log(url)
    } )
}
