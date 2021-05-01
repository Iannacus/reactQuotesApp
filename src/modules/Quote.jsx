import React from 'react';


function Quote({ quote, author }) {
    return (

        <div className='text-quote'>
            <blockquote><span><i className="fas fa-quote-left"></i></span> {quote} </blockquote>
            <div className='quoteAuthor'><p> - {author}</p></div>
        </div>
    );
}

export default Quote;