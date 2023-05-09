import React from 'react'

const Info = () => {
    const birthDate = new Date("1993-5-3");
    const age = new Date().getFullYear() - birthDate.getFullYear();
    const isBeforeBirthday = (new Date().getMonth() < birthDate.getMonth()) || 
                        (new Date().getMonth() === birthDate.getMonth() && new Date().getDate() < birthDate.getDate());
    const ageInYears = isBeforeBirthday ? age - 1 : age;

    return (
        <div className="about_info grid">
            <div className="about_box">
                <i className="bx bx-cake about_icon"></i>
                <h3 className="about_title">Birth</h3>
                <span className="about_subtitle">1993.05.03 (Age {ageInYears})</span>
            </div>

            <div className="about_box">
                <i className="bx bx-phone about_icon"></i>
                <h3 className="about_title">Phone Number</h3>
                <span className="about_subtitle">010-4640-5029</span>
            </div>

            <div className="about_box">
                <i className="bx bx-envelope about_icon"></i>
                <h3 className="about_title">E-mail</h3>
                <span className="about_subtitle">seongchan_@naver.com</span>
            </div>
        </div>
    )
}

export default Info