
thumbnails = document.querySelectorAll(".thumbnail")
for (var index = 0; index < thumbnails.length; index++) { 
    console.log("Adding image listener index")
    console.log(thumbnails[index])
    thumbnails[index].addEventListener('mouseover', function() {
        document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')"
        document.querySelector("#display").innerHTML = this.alt
    });
}