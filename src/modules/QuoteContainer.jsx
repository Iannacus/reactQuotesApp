import React, { useState } from 'react';
import Quote from './Quote';
import quotes from './quotes'
import ButtonContainer from './ButtonContainer';

const quotesArray = quotes.quotes;

function QuoteContainer() {

    //Obtener una cita aleatoria 
    function getQuoteIndex(quotesArray) {
        const quoteIndex = Math.trunc(Math.random(quotes) * 102) - 1;
        return quotesArray[quoteIndex];
    };

    const [quote, setQuote] = useState(getQuoteIndex(quotesArray));

    console.log(quote.author);
    return (
        <div className='quoteContaianer'>
            <Quote
                quote={quote.quote}
                author={quote.author} />
            <ButtonContainer />
        </div>
    )
}

export default QuoteContainer;