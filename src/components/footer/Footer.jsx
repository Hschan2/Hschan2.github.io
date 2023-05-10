import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">HONG</h1>
                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer_link">Contact</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://www.facebook.com/profile.php?id=100003942761327&qp_conversion_token=eyJjb250ZXh0X3N1cmZhY2VfaWQiOjc5MjMsInFwX2V2ZW50IjoicHJpIiwicXBfZXZlbnRfdGltZSI6MTY4MjYwMTE0MiwicXBfaWQiOjU3MDc5NjI5ODE4NzAyNiwidXVpZCI6IjYwMzc4NzQ3LWQ2MjUtNGEwYS1hYTQwLWRlOGI3Y2YxNzk4OSJ9" className="footer_social-link" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/h_s.__.b/" className="footer_social-link" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://hseongchan2.tistory.com/" className="footer_social-link" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-blogger"></i>
                    </a>
                    <a href="https://blog.naver.com/seongchan_" className="footer_social-link" target="_blank" rel="noopener noreferrer">
                        <i className="bx bx-edit-alt"></i>
                    </a>
                </div>

                <span className="footer_copy">&#169; Hong. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer