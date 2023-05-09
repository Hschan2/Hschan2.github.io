import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personal journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={toggleState === 1 ?
                        "qualification_button qualification_active button-flex"
                        : "qualification_button button-flex"}
                    onClick={() => setToggleState(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
                        Education
                    </div>

                    <div className={toggleState === 2
                        ? "qualification_button qualification_active button-flex"
                        : "qualification_button button-flex"}
                    onClick={() => setToggleState(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
                        Experience
                    </div>
                </div>
                
                <div className="qualification_sections">
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">검단고등학교</h3>
                                <span className="qualification_subtitle">졸업</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2009 - 2012
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                                

                            <div>
                                <h3 className="qualification_title">청운대학교</h3>
                                <span className="qualification_subtitle">방송영상학과 중퇴</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2012 - 2014
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">동양미래대학교</h3>
                                <span className="qualification_subtitle">컴퓨터정보공학과 졸업</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2015 - 2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                                

                            <div>
                                <h3 className="qualification_title">우아한 테크코스 프리코스</h3>
                                <span className="qualification_subtitle">프론트엔드 수료</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2022
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">예쉬컴퍼니</h3>
                                <span className="qualification_subtitle">기술지원 인턴</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2016
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                                

                            <div>
                                <h3 className="qualification_title">서구문화원</h3>
                                <span className="qualification_subtitle">행정 인턴</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2014
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">계룡산업</h3>
                                <span className="qualification_subtitle">사원</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification