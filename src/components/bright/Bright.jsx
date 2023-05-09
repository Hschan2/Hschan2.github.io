import React, { useEffect, useState } from 'react'
import './bright.css'

const Bright = () => {
    const [theme, setTheme] = useState('light-mode')
    const toggleTheme = () => {
        if (theme === 'light-mode') {
            setTheme('dark-mode')
        } else {
            setTheme('light-mode')
        }
    }
    
    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return (
        <button className="bright-button" onClick={toggleTheme}>
            <i className={`bx ${theme === 'light-mode' ? "bx-sun" : "bx-moon"} bright_icon`}></i>
        </button>
    )
}

export default Bright