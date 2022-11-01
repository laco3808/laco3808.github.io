const newQuote = document.querySelector('.new-quote');
window.addEventListener('load', getQuote);

console.log(newQuote);

let QUOTE = document.createElement('p');

newQuote.addEventListener('click', getQuote);
const requestURL = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';



async function getQuote(){
    let X = await fetch(requestURL);
    let qList = await X.text();
    const found = JSON.parse(qList);
    qText= found.message;
    
    displayQuote(qText);

}
function displayQuote(qText){
    const quoteBox = document.querySelector('#js-quote-text');
    quoteBox.textContent= qText;
}