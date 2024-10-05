import "./QuoteDisplay.css"
import { useState } from "react";
import QUOTES from "./quotes"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

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
            <Row>
                <Col className="text-start" style={{ textAlign: 'justify' }}>
                    <h3 id="text" className="fw-bold quote-block">
                    {quote.text}
                    </h3>
                </Col>                    
            </Row>
            <Row>
                <h5 id="author">
                    <em>{quote.author}</em>
                </h5>
            </Row>
            <Row className="justify-content-center mt-2">
                <Col xs={5}>
                    <Button variant="secondary" id="new-quote" className="text-light" onClick={displayNewQuote}>New Quote</Button>
                </Col>
                <Col xs={5}>
                    <a 
                    id="tweet-quote" 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}"\n\u2014${quote.author}`)}`}
                        target="_blank"rel="noreferrer">
                            <Button variant="info" className="text-dark">Tweet Quote</Button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default QuoteDisplay