function insertBeerInHTML(json) {
    let name = json[0].name
    let description = json[0].description
    let imageUrl = json[0].image_url
    let html = "<div class=\"row\">\n" +
        "<div class=\"col-md-2\">" +
        "<img class=\"img-responsive\" src=${imageUrl} alt=\"product-img\" width=\"100\" height=\"150\" />" +
        "</div>" +
        "<div class=\"col-md-7\">" +
        "<h3 class=\"mb-1\"><b>${name}</b></h3>" +
        "<h7 class=\"mb-1\"> ${description}</h7>" +
        "</div>" +
        "</div>"
    document.getElementById("mainDiv").insertAdjacentElement("beforeend", html)

}