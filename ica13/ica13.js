window.addEventListener('click',Gone);

const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  const aliceTumbling2 = [
    { transform: 'rotate(360) scale(0)' },
    { transform: 'rotate(0) scale(1)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }

  
  const bread1 = document.querySelector("#bread1");
  const bread3 = document.querySelector("#bread3");
  const bread = document.querySelector("#bread");

function Gone (){

  bread1.animate(aliceTumbling, aliceTiming).finished
    .then(() => bread.animate(aliceTumbling, aliceTiming).finished)
    .then(() => bread3.animate(aliceTumbling, aliceTiming).finished)
    .catch(error => console.error(`Error animating Alices: ${error}`));
    bread1.animate(aliceTumbling2, aliceTiming).finished
    .then(() => bread.animate(aliceTumbling2, aliceTiming).finished)
    .then(() => bread3.animate(aliceTumbling2, aliceTiming).finished)
    .catch(error => console.error(`Error animating Alices: ${error}`));
}

