const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        author: "J.K. Rowling, Harry Potter and the Chamber of Secrets",
    },
    {
        quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
        author: "Marilyn Monroe",
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot",
    },
    {
        quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        author: "Helen Keller",
    },
    {
        quote: "The difference between genius and stupidity is: genius has its limits.",
        author: "Alexandre Dumas-fils",
    },
    {
        quote: "I would venture to guess that Anon, who wrote so many poems without signing them, was often a woman.",
        author: "Virginia Woolf, A Room of One's Own",
    },
    {
        quote: "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.",
        author: "Mark Twain",
    },
    {
        quote: "Knowing yourself is the beginning of all wisdom.",
        author: "Aristotle",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
