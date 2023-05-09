import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What i offer</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">
                            Service <br/> Development
                        </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>
                        더보기
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services_modal-title">Developer</h3>
                            <p className="services_modal-description">
                                컴퓨터공학을 전공하고 프론트엔드 개발 경험을 키웠습니다. 효율적인 업무 능력을 제공할 수 있습니다.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        ReactJS 개발이 가능합니다.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        CSS로 스타일을 직접 구현이 가능합니다.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        포토샵, 일러스트레이터로 이미지 제작이 가능합니다.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        API, SQL 구현도 가능합니다.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        NodeJS, NextJS 서버 구현도 가능합니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">
                            Various <br/> Design
                        </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(2)}>
                        더보기
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services_modal-title">Design Producer</h3>
                            <p className="services_modal-description">
                                디자인 제작이 가능합니다. 포토샵, 일러스트레이터, 피그마 등 이미지 제작 툴 기술 능력을 가지고 있습니다.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        포토샵으로 이미지 제작 및 합성이 가능합니다.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        일러스트레이터로 이미지 제작 및 3D 제작이 가능합니다.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        피그마로 UI/UX 디자인이 가능합니다.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        라이트룸으로 사진 보정이 가능합니다.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        디자인/콘텐츠 블로그를 운영하고 있습니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-video services_icon"></i>
                        <h3 className="services_title">
                            Video <br/> Production
                        </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(3)}>
                        더보기
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services_modal-title">Contents Producer</h3>
                            <p className="services_modal-description">
                                방송영상학을 전공한 경험이 있습니다. 방송 글쓰기, 촬영 및 편집이 배웠습니다. 또한, 사진 촬영과 보정이 가능합니다.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        프리미어 프로를 활용한 영상 편집 및 보정이 가능합니다.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        애프터 이펙트를 활용한 그래픽 구현이 가능합니다.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        기본적인 카메라 작동법을 알고 있습니다.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        유튜브 채널 운영 경험이 있습니다.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        역량 발전을 위해 블렌더를 학습하고 있습니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Services