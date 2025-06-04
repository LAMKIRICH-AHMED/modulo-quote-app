const quotes = [
  "I’m a fullstack developer",
  "I’m also a designer",
  "I love solving problems with code",
  "JavaScript is fun!",
  "Let’s build cool things together!"
];
const quote = document.querySelector('.quote');
let index = 0;
function showQuote() {
  quote.style.opacity = 0;
  setTimeout(() => {
    quote.textContent = quotes[index];
    quote.style.opacity = 1;
    index = (index + 1) % quotes.length;
  }, 300); 
}
setInterval(showQuote, 2000); 
showQuote(); 
