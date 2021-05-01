import React, { useState } from 'react';
import Quote from './Quote';
import quotes from './quotes'
import Button from './Button'

const quotesArray = quotes.quotes;

function QuoteContainer() {
    const [quote, setQuote] = useState(getQuote(quotesArray));
    const [link, setLink] = useState('https://twitter.com/intent/tweet?text=')

    //Obtener una cita aleatoria 
    function getQuote(quotesArray) {
        const quoteIndex = Math.trunc(Math.random(quotes) * 102) - 1;
        return quotesArray[quoteIndex];
    };

    const handdleLink = (e) => {
        let url = '';
        const regex = / +/gi;
        e.target.classList.contains('btn') ? url = e.target.parentElement.previousElementSibling.textContent :
            url = e.target.parentElement.parentElement.previousElementSibling.textContent;
        url = 'https://twitter.com/intent/tweet?text=' + url.trim(' ').replace(regex, '%20');
        setLink(url);
    }
    const handdleQuote = () => {
        setQuote(getQuote(quotesArray));
    }

    const handdleBgColor = () => {

    }

    return (
        <div className='quoteContaianer'>
            <Quote
                quote={quote.quote}
                author={quote.author} />

            <div className='buttonContainer'>
                <Button
                    value={link}
                    setValue={handdleLink}
                    content='fab fa-twitter' />

                <Button
                    setValue={handdleQuote}
                    content='Next Quote' />

            </div>
        </div>

    )
}

export default QuoteContainer;