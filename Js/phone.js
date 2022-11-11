// const output = document.querySelector('.output');
var output1 = document.getElementById("V1");
var output2 = document.getElementById("V2");
var output3 = document.getElementById("V3");
const Reset = document.getElementById("Reset");
const RickRoll = document.getElementById("RickRoll");
let index=0;
let c = 0;
let J=0;
const outputs=[output1,output2,output3]//,output4,output5,output6,output7,output77,output9,output99];
const Final=[];
for(let g in outputs)
{
    outputs[g].textContent="";
    outputs[g].style.visibility="hidden";
}
document.getElementById("RickRoll").style.visibility="hidden";
document.getElementById("Reset").style.visibility="hidden";
if(J===0){
    window.addEventListener('click', showCoords);
}
RickRoll.addEventListener('click', () => {
    console.log("clcck");
    window.open("https://www.youtube.com/watch?v=PXxIeBWrB6Y", "_blank");
})



function showCoords(event) { 
    J=1;
    console.log("J= ",J);
    if(after.textContent!=""){
        document.getElementById("RickRoll").style.visibility="hidden";
        document.getElementById("Reset").style.visibility="hidden";
        after.textContent=""
        document.getElementById("Final").textContent="";
        document.getElementById("again").textContent="";
        console.log("start", index);
    }
    var x = event.clientX;
    var y = event.clientY;
    let Y = Math.floor(y/((screen.height-100)/9));
    let X = Math.floor(x/((screen.width-100)/9));
    // var coords = "X coords: " + x + ", Y coords: " + y; 
    // document.getElementById("generated").innerHTML = coords;
    if(c%2!=0 && index<3){
        outputs[index].textContent+=X;
    // outputs[index].style.visibility="visible";
    outputs[index].style.visibility="visible";
        console.log("odds" ,c, index);
        c++;
    }
    else if(c%2===0 && index<3){
        outputs[index].textContent+=Y;
        outputs[index].style.visibility="visible";
        console.log("evens", c, index);
        c++;
    }
    
    else{
        console.log("break?", index, c);
        document.getElementById("Header").style.visibility="hidden";
        document.getElementById("Num").style.visibility="hidden";
        after.textContent="Look, clearly you're bad at this. Have you tried";
        for(let g in outputs)
        {
            outputs[0].textContent =outputs[0].textContent.replaceAll('-',"");
            Final[g]=outputs[g].textContent;
            outputs[g].style.visibility="hidden";
        }
        document.getElementById("Final").textContent="("+Final[0]+") "+Final[1]+Final[2]; //+Final[3]+Final[4]+Final[5]+Final[6]+Final[7]+Final[8]+Final[9];
        again.textContent="...giving up?"
        console.log(c);
        document.getElementById("RickRoll").style.visibility="visible";
        document.getElementById("Reset").style.visibility="visible";
        Reset.addEventListener('click',restart(outputs));
    }
    
    // console.log("before add",index, outputs[index].textContent);
    if(c===3 || c===6 || c===10){  
        if( c!=10){
            outputs[index].textContent+="-";
        }
    index = index+1;
    }
    console.log(c, index);
  }

  function restart(outputs){
    console.log("r-> J=", J);
    index=0;
    c = 0;
    for(let g in outputs)
    {
        outputs[g].textContent="";
        outputs[g].style.visibility="hidden";
    }
    console.log("vsble");
    document.getElementById("Num").style.visibility="visible";
    document.getElementById("Header").style.visibility="visible";
    // window.addEventListener('click', showCoords);
}


  