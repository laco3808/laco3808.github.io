const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesA = ['Croissant.jpg', `LiBo calligraphy.jpg`,`pic3.jpg`, `balloon-sq2.jpg`,`pic5.jpg`];

/* Declaring the alternative text for each image file */
const Alt = {'Croissant.jpg' : 'A Croissant', 'LiBo calligraphy.jpg' : 'LiBo calligraphy','pic3.jpg' : 'Purple and white pansies','balloon-sq2.jpg' : 'Hot air balloon','pic5.jpg' : 'Large moth on a leaf'}

/* Looping through images */
for(const image of imagesA){
const newImage = document.createElement('img');
newImage.setAttribute('src', `../../img/${image}`);
newImage.setAttribute('alt', Alt[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click',replace => {
    displayedImage.src = replace.target.src;
    displayedImage.alt = replace.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const State = btn.getAttribute('class');
    if(State==='dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});