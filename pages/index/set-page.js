import {push_img, pull_img_url} from "../../services/firebase/storage/manage_storage"

pull_img_url("slider-1.jpeg",(url)=>{
    let img = document.getElementById('slide1');
    img.setAttribute('src', `background-image: url(${url});`);
} )

pull_img_url("slider-2.jpeg",(url)=>{
    let img = document.getElementById('slide2');
    img.setAttribute('src', `background-image: url(${url});`);
} )

pull_img_url("slider-3.jpeg",(url)=>{
    let img = document.getElementById('slide3');
    img.setAttribute('src', `background-image: url(${url});`);
} )