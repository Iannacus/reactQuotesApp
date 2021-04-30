import React, { useState } from 'react';

function Button({ content }) {
    const [link, setLink] = useState('https://twitter.com/intent/tweet?text=')
    if (content === 'fab fa-twitter') {
        return (
            <a
                onClick={e => {
                    const regex = / +/gi;
                    if (e.target.classList.contains("btn")) {
                        const textQuote = e.target.parentElement.previousElementSibling.textContent.trim(' ').replace(regex, '%20');
                        setLink('https://twitter.com/intent/tweet?text=' + textQuote);
                        console.log(e.target.parentElement.previousElementSibling.textContent);
                    }

                }}
                href={link} target="__BLANK" className="btn glass-btn">
                <i className={content}></i>
            </a>
        );
    } else {
        return (
            <button className="btn glass-btn">
                {content}
            </button>
        );
    }


}

export default Button;

