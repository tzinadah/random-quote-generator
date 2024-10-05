import "./QuoteDisplay.css"
import { useState } from "react";
import QUOTES from "./quotes"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function QuoteDisplay(props){
    
    const [quote, setQuote] = useState(QUOTES[0]);

    function displayNewQuote(){
        let newQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
        while(newQuote.text === quote.text){
            newQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
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