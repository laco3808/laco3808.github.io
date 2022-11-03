const newQuote = document.querySelector('.new-quote');
const Hate = document.getElementById('js-tweet');
window.addEventListener('load', getQuote);


let QUOTE = document.createElement('p');
Hate.addEventListener('click', () => {
    console.log("clcck");
    window.open("https://www.youtube.com/watch?v=PXxIeBWrB6Y", "_blank");
})
newQuote.addEventListener('click', getQuote);
const requestURL = 'https://insult.mattbas.org/api/insult';



async function getQuote(){
    let X = await fetch(requestURL);
    let qList = await X.text();
    console.log(qList);
    qText= qList;
    
    displayQuote(qText);

}
function displayQuote(qText){
    const quoteBox = document.querySelector('#js-quote-text');
    quoteBox.textContent= qText;
}