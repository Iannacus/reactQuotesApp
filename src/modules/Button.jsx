import React from 'react';

function Button({ content }) {
    console.log(content)
    if (content === 'fab fa-twitter') {
        return (
            <div className="btn">
                <i className={content}></i>
            </div>
        );
    } else {
        return (
            <div className="btn">
                {content}
            </div>
        );
    }


}

export default Button;