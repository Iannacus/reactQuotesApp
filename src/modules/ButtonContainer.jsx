import React, { useState } from 'react'
import Button from './Button'




function ButtonContainer() {
    const [link, setLink] = useState('https://twitter.com/intent/tweet?text=')

    const handdleLink = (e) => {
        let url = '';
        const regex = / +/gi;
        e.target.classList.contains('btn') ? url = e.target.parentElement.previousElementSibling.textContent :
            url = e.target.parentElement.parentElement.previousElementSibling.textContent;
        url = 'https://twitter.com/intent/tweet?text=' + url.trim(' ').replace(regex, '%20');
        setLink(url);
    }
    const handdleQuote = () => {

    }

    const handdleBgColor = () => {

    }
    return (
        <div className='buttonContainer'>
            <Button
                value={link}
                setValue={handdleLink}
                content='fab fa-twitter' />
            <Button onClick={() => {
                console.log('entre')
            }}
                content='Next Quote' />

        </div>
    )
}

export default ButtonContainer;