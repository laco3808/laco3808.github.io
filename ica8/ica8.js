window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}
function show() {
 
    /* Get image and change value
    of src attribute */
    let image = document.getElementById("Croissant");

    image.src ="../img/Croissant"

    document.getElementById("CButton")
            .style.display = "none";
}