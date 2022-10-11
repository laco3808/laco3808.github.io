let body = document.querySelector('body');
body.addEventListener('click', giveAlert);
function giveAlert(){
    alert('this is an alert');
}
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
    document.getElementById('Croissant')

    document.getElementById('Croissants')
            .style.display = "none";
}