import React, { useState } from 'react';

function Button({ content }) {
    const [link, setLink] = useState('https://twitter.com/intent/tweet?text=')
    if (content === 'fab fa-twitter') {
        return (
            <a
                onClick={e => {
                    let textQuote = '';
                    const regex = / +/gi;
                    e.target.classList.contains("btn") ?
                        textQuote = e.target.parentElement.previousElementSibling.textContent.trim(' ').replace(regex, '%20') :
                        textQuote = e.target.parentElement.parentElement.previousElementSibling.textContent.trim(' ').replace(regex, '%20');
                    setLink('https://twitter.com/intent/tweet?text=' + textQuote);

                }}
                href={link} target="__BLANK" className="btn glass-btn">
                <i className={content}></i>
            </a>
        );
    } else {
        return (
            <button

                className="btn glass-btn">
                {content}
            </button>
        );
    }


}

export default Button;

