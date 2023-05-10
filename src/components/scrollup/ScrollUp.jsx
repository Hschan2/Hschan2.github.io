import React from 'react'
import './scrollup.css'

const ScrollUp = () => {
    window.addEventListener('scroll', () => {
        const scrollUp = document.querySelector('.scrollup');
        if (window.scrollY >= 560) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll');
    });

    const handleAction = () => {
        window.location.href = "#";
    };

    return (
        <button onClick={handleAction} className="scrollup">
            <i className="uil uil-arrow-up scrollup_icon"></i>
        </button >
    )
}

export default ScrollUp