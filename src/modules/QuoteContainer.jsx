import React, { useState } from 'react';
import Quote from './Quote';
import quotes from './quotes'
import Button from './Button'

const quotesArray = quotes.quotes;
const colors = ['#28ABDE', '#DD27AA', '#9727DD', '#DD3C27', '#DDB627', '#DE2846', '#B8DD17', '#F19E50'];

function QuoteContainer() {
    const [quote, setQuote] = useState(getRandom(quotesArray));
    const [link, setLink] = useState('https://twitter.com/intent/tweet?text=')
    const [bgColor, setBgColor] = useState('#9727DD');

    //Get a random element from an array
    function getRandom(array) {
        const index = Math.trunc(Math.random(array) * array.length);
        return array[index];
    }

    const handdleLink = (e) => {
        let url = '';
        const regex = / +/gi;
        //Get quote text in blockQuote Element using twitter button event
        e.target.classList.contains('btn') ? url = e.target.parentElement.previousElementSibling.textContent :
            url = e.target.parentElement.parentElement.previousElementSibling.textContent;

        //create a twitter url join base url with a formated text getting previously and fill blank spaces with "%20"
        url = 'https://twitter.com/intent/tweet?text=' + url.trim(' ').replace(regex, '%20');
        setLink(url);
    }
    const handdleQuote = (e) => {
        setQuote(getRandom(quotesArray));
        handdleBgColor(e);
    }

    const handdleBgColor = (e) => {
        setBgColor(getRandom(colors));

        //select App container form 'next quote' button event and change app background color
        e.target.parentElement.parentElement.parentElement.parentElement.style.background = bgColor;
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