import React from 'react';

function Button({ content, setValue, value }) {

    if (content === 'fab fa-twitter') {

        return (
            <a
                onClick={e => {
                    console.log(e.target.classList.contains('btn'));
                    setValue(e);
                }}
                href={value} target="BLANK" className="btn glass-btn">
                <i className={content}></i>
            </a>
        );
    } else {
        return (
            <button
                onClick={() => {
                    setValue();
                }}
                className="btn glass-btn">
                {content}
            </button>
        );
    }


}

export default Button;

