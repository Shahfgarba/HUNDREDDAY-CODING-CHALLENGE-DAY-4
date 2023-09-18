const quotes = {
    love: [
        {
            text: "Love is not just looking at each other; it's looking in the same direction.",
            author: "Antoine de Saint-Exupéry",
        },
        {
            text: "The best thing to hold onto in life is each other.",
            author: "Audrey Hepburn",
        },
        // Add more love quotes here
    ],
    motivation: [
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill",
        },
        {
            text: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt",
        },
        // Add more motivation quotes here
    ],
    prayer: [
        {
            text: "Prayer is not asking. It is a longing of the soul. It is daily admission of one's weakness. It is better in prayer to have a heart without words than words without a heart.",
            author: "Mahatma Gandhi",
        },
        {
            text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.",
            author: "Philippians 4:6 (Bible)",
        },
        // Add more prayer quotes here
    ],
    bestWishes: [
        {
            text: "May your troubles be less and your blessings be more, and nothing but happiness come through your door.",
            author: "Irish Blessing",
        },
        {
            text: "Wishing you a lifetime filled with love, laughter, and endless joy!",
            author: "Unknown",
        },
        // Add more best wishes quotes here
    ],
};

const userQuotes = []; // Array to store user-submitted quotes

const quoteText = document.getElementById("quote-text");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const quoteForm = document.getElementById("quote-form");
const userQuote = document.getElementById("user-quote");
const userName = document.getElementById("user-name");
const shareFbBtn = document.getElementById("share-fb");
const userQuotesList = document.getElementById("user-quotes-list");

function getRandomQuote(category) {
    const categoryQuotes = quotes[category];
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    return categoryQuotes[randomIndex];
}

function displayRandomQuote(category) {
    const { text, author } = getRandomQuote(category);
    quoteText.textContent = text;
    authorText.textContent = `- ${author}`;
}

newQuoteBtn.addEventListener("click", () => {
    const categories = Object.keys(quotes);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    displayRandomQuote(randomCategory);
});

quoteForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (userQuote.value && userName.value) {
        const newQuote = {
            text: userQuote.value,
            author: userName.value,
        };
        userQuotes.push(newQuote);
        userQuote.value = "";
        userName.value = "";
        displayUserQuotes();
        alert("Your quote has been submitted!");
    }
});

shareFbBtn.addEventListener("click", function () {
    // Implement Facebook sharing logic here
    // This typically involves opening a new window with a shareable link to Facebook
    alert("Sharing on Facebook is not implemented in this example.");
});

function displayUserQuotes() {
    userQuotesList.innerHTML = "";
    userQuotes.forEach((quote, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${quote.author}:</strong> ${quote.text}`;
        userQuotesList.appendChild(listItem);
    });
}

// Initial quote display
const initialCategory = "love"; // Change this to your desired initial category
displayRandomQuote(initialCategory);
