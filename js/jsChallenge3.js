document.querySelector("#ch3form").addEventListener("submit", function(e) {
    let date = document.querySelectorAll('input[name="gradDate"]');
    let standing = document.querySelectorAll('input[name="standing"]');
    
    console.log("Good job clicking the button")
    console.log("Grad date is", date)
    console.log("Standing is", standing)
 
    if (date == null || standing == null){
        alert("You must select a choice from each set of radio buttons")
        e.preventDefault()
    }
});
 

 

 

