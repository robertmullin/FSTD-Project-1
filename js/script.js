/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// create array of quote objects
const quotes = [
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    source: "Robert Frost",
    citation: "Unknown citation",
    year: 1960,
    tag: "wisdom"
  },
  {
    quote:
      "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend",
    source: "Albert Camus",
    citation: "Letters",
    year: 1950,
    tag: "philosophy"
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    source: "H. Jackson Brown Jr.",
    citation: "P.S. I Love You",
    year: 1950,
    tag: "philosophy"
  },
  {
    quote: "Life is what happens to us while we are making other plans.",
    source: "Allen Saunders",
    citation: "Not Attributed",
    year: 1957,
    tag: "philosophy"
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    citation: "First Inaugural Address, March 4",
    year: 1933,
    tag: "speech"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    source: "Steve Jobs",
    citation: "Stanford University commencement speech",
    year: 2005,
    tag: "inspirational"
  }
];

// function to select a random quote object from the array
function getRandomQuote(quotes) {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
  //console.log(quotes[randomNumber]);
}

// take random quote from getRandomQuote() and insert it into the DOM
function printQuote() {
  let quoteInfo = getRandomQuote(quotes);
  let markup = `<p class="quote"> ${quoteInfo.quote} </p>
  <p class="source"> ${quoteInfo.source}`;
  if (quoteInfo.hasOwnProperty("citation")) {
    markup += `<span class="citation">${quoteInfo.citation}</span>`;
  }
  if (quoteInfo.hasOwnProperty("year")) {
    markup += `<span class="year">${quoteInfo.year}</span>`;
  }
  if (quoteInfo.hasOwnProperty("tag")) {
    markup += `<span class="tag"> tag:  ${quoteInfo.tag}</span>`;
  }
  markup += `</p>`;
  document.getElementById("quote-box").innerHTML = markup;
}
// execute printQuote() on click of button
const button = document.getElementById("load-quote");
button.addEventListener("click", () => {
  printQuote();
  clearInterval(interval);
});
// set the printQuote() function to execute every ten seconds
let interval = setInterval(printQuote, 10000);


