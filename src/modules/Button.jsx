import React from 'react';

function Button({ content, setValue, value }) {

    if (content === 'fab fa-twitter') {

        return (
            <a
                onClick={e => {
                    setValue(e);
                }}
                href={value} target="BLANK" className="btn glass-btn">
                <i className={content}></i>
            </a>
        );
    } else {
        return (
            <button
                onClick={e => {
                    setValue(e);
                }}
                className="btn glass-btn">
                {content}
            </button>
        );
    }


}

export default Button;

