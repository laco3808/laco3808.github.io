const button = document.querySelector('.button');
const output = document.querySelector('.output');
const after = document.querySelector('.after');
const phone = document.querySelector('.phone');
const again = document.querySelector('.again');
var slider1 = document.getElementById("s1");
var output1 = document.getElementById("V1");
var slider2 = document.getElementById("s2");
var output2 = document.getElementById("V2");
var slider3 = document.getElementById("s3");
var output3 = document.getElementById("V3");

output1.innerHTML = slider1.value;
output2.innerHTML =slider2.value;
output3.innerHTML =slider3.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
  output1.innerHTML = slider1.value; 
}
slider2.oninput = function() {
  output2.innerHTML = this.value;
  output2.innerHTML =slider2.value;
}
slider3.oninput = function() {
  output3.innerHTML = this.value;
  output3.innerHTML =slider3.value;
//   document.getElementById("submit-button").style.visibility="hidden";
  console.log('submt gone')
}
function randomValueFromArray(){
    const random = Math.floor(Math.random()*10);
    return random;
}

button.addEventListener('click',submit);

function submit (){
    console.log("1");
    document.getElementById("Num").style.visibility="hidden"
    after.textContent="Look, you got it wrong again...";
    let ran= randomValueFromArray();
    let x= (ran+(output3.innerHTML-1000));
    let PhoneNumber="("+output1.innerHTML+") "+output2.innerHTML+"-"+(x);
    phone.textContent=PhoneNumber;
    again.textContent="How about you try again"
    if(document.getElementById("phone").style.visibility="hidden"){
      document.getElementById("after").style.visibility="visible";
      document.getElementById("again").style.visibility="visible";
      document.getElementById("phone").style.visibility="visible";
    }
    slider3.addEventListener('click',() => {
        document.getElementById("after").style.visibility="hidden";
    document.getElementById("phone").style.visibility="hidden";
    document.getElementById("again").style.visibility="hidden";
    document.getElementById("Num").style.visibility="visible";
    });
    button.addEventListener('click',submit);
    console.log("dissapear");
} 


// 

// function updateOutput() {
//     phone_content = output.textContent
//     
// 
// }
