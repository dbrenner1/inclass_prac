document.querySelector("#subscribe").addEventListener("click", function() {
    console.log("subscribe showed up")
    if (this.checked){
        document.querySelector("#emailDiv").style.display="block"
    }
    else{
        document.querySelector("#emailDiv").style.display="none"
    }
});

    
