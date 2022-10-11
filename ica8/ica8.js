window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
const button = document.getElementById("CButton");
const image = document.getElementById("image");
button.addEventListener('click', () => {
    console.log("button clced");
    image.src ="../img/Croissant.jpg";
    document.getElementById("Text").innerHTML = "CLICK THE CROISSANT. I dare you.";
});


image.addEventListener('click', () => {
    console.log("clcck");
    window.open("https://www.youtube.com/watch?v=bh4Voxggmj8", "_blank");
})

function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}