//Open Drawer
document.getElementById("drawer").addEventListener("click", function (event) {
    document.getElementById("nav").style.left= "0px";
    
});
//Close Drawer
document.getElementById("closeNav").addEventListener("click", function (event) {
 document.getElementById("nav").style.left="-200px";
});

//Accordion 
let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(event){
        let panel = this.nextElementSibling;

        if (panel.style.display === "block"){
            panel.style.display = "none";
        } else{
            panel.style.display = "block";
        }
    });
}

    //Dark/Light Mode

    document.getElementById("darkmode").addEventListener("click", function (event){
        document.body.classList.toggle("dark-mode");
    });
    