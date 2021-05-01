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

    //Obtener una elemento aleatorio de un array
    function getRandom(array) {
        const index = Math.trunc(Math.random(array) * array.length);
        return array[index];
    }

    const handdleLink = (e) => {
        let url = '';
        const regex = / +/gi;
        //Obtener el texto de la cita en el elemeneto blockQuote usando el evento del booton Twitter
        e.target.classList.contains('btn') ? url = e.target.parentElement.previousElementSibling.textContent :
            url = e.target.parentElement.parentElement.previousElementSibling.textContent;
        //se crea la url uniendo la base de la url y se formateea el texto obtenido anteriormete rellenando espacios con %20
        url = 'https://twitter.com/intent/tweet?text=' + url.trim(' ').replace(regex, '%20');
        setLink(url);
    }
    const handdleQuote = (e) => {
        setQuote(getRandom(quotesArray));
        handdleBgColor(e);
    }

    const handdleBgColor = (e) => {
        setBgColor(getRandom(colors));
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