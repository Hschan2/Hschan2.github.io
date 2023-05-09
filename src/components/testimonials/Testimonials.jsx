import React from 'react'
import { Data } from './Data'
import './testimonials.css'
import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/pagination'
import {Pagination} from 'swiper'

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonials">
        <h2 className="section_title">Study</h2>
          <span className="section_subtitle">Things i'm learning Now</span>
          
          <Swiper className="testimonial_container"
              loop={true}
              grabCursor={true}
              spaceBetween={24}
              pagination={{
                  clickable: true,
              }}
              breakpoints={{
                  576: {
                      slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                  },
              }}
              modules={[Pagination]}
          >
              {Data.map(({ id, image, title, description, url }) => {
                  return (
                      <SwiperSlide className="testimonial_card" key={id}>
                          <img src={image} alt="" className="testimonial_img" />

                          <h3 className="testimonial_name">{title}</h3>
                          <p className="testimonial_description">{description}</p>
                          <a href={url} className="testimonial_button" target="_blank">
                            See <i className="bx bx-right-arrow-alt testimonial_button-icon"></i>
                        </a>
                      </SwiperSlide>
                  )
              })}
          </Swiper>
    </section>
  )
}

export default Testimonials