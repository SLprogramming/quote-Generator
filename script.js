console.log("BMPS javascript developer");
const newQuote = document.querySelector(".next");
const texts = document.getElementById("quote");
const authors = document.getElementById("author");
const loader = document.getElementById("loader");
const box = document.querySelector(".box");
let quotes = [];

const loading = () => {
  loader.hidden = false;
  box.hidden = true;
};
const dataShow = () => {
  box.hidden = false;
  loader.hidden = true;
};
const randonNum = () => {
  let ranNum = Math.floor(Math.random() * quotes.length);
  texts.textContent = quotes[ranNum]["text"];
  authors.textContent = quotes[ranNum]["author"];
  if (!quotes[ranNum].author) {
    quotes[ranNum].author = "anonymous";
  }
  if (quotes[ranNum].text.length > 50) {
    texts.classList.add("long-quote");
  } else {
    texts.classList.remove("long-quote");
  }
};
async function generateQuote() {
  loading();
  const linkUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(linkUrl);
    quotes = await response.json();
    dataShow();
    randonNum();
  } catch (error) {
    console.log(error);
  }
}
generateQuote();
newQuote.addEventListener("click", randonNum);
