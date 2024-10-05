import "./QuoteDisplay.css"
import { useState } from "react";

function QuoteDisplay(props){

    const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "Get busy living or get busy dying.",
            author: "Stephen King"
        },
        {
            text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
            author: "Brian Tracy"
        },
        {
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "Act as if what you do makes a difference. It does.",
            author: "William James"
        },
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston S. Churchill"
        },
        {
            text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
            author: "Ralph Waldo Emerson"
        }
    ];

    const [quote, setQuote] = useState(quotes[0]);

    function displayNewQuote(){
        let newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        while(newQuote.text === quote.text){
            newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        }
        setQuote(newQuote)
    }

    return (
        <div id="quote-box" className="quote-display">
            <p id="text">
                {quote.text}
            </p>
            <p id="author">
                <em>{quote.author}</em>
            </p>
            <button id="new-quote" onClick={displayNewQuote}>New Quote</button>
            <a 
            id="tweet-quote" 
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}"\n\u2014${quote.author}`)}`}
                 target="_blank"rel="noreferrer"><button>Tweet Quote</button>
            </a>
        </div>
    )
}

export default QuoteDisplay