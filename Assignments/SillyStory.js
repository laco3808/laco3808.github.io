const CustomName = document.getElementById('CustomName');
const Generate = document.querySelector('.Generate');
const story = document.querySelector('.story');

function randomValueFromArray(array){
const random = Math.floor(Math.random()*array.length);
return array[random];
}

const storyText="It was 94 degrees fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];
Generate.addEventListener('click', result);
function result() {
    let NewStory =storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    NewStory = (NewStory.replaceAll(':insertx:',xItem));
    NewStory = (NewStory.replaceAll(':inserty:',yItem));
    NewStory = (NewStory.replaceAll(':insertz:',zItem));

if(CustomName.value !== '') {
    const name = CustomName.value;
    NewStory= NewStory.replace('Bob',name);
}
if(document.getElementById("uk").checked) {
    const weight = '22 stones';
    NewStory= NewStory.replaceAll('300 pounds', weight);
    const temperature = '35 degrees Celcius';
    NewStory= NewStory.replaceAll('94 degrees fahrenheit', temperature);
}
story.textContent = NewStory;
story.style.visibility = 'visible';
}