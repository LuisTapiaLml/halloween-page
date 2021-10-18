import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { home_sliders } from '../../data/home_sliders';

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

export const Home = () => {
    return (
        <section className="home container" id="home">
            <Swiper
                className="home-swiper"
                spaceBetween={30}
                // loop={true}
                slidesPerView={1}
                pagination={{
                    "dynamicBullets": true
                }}
            >
                {
                    home_sliders.map((slide_info, index) => (
                        <SwiperSlide key={`key_slider_home_${index}`}>
                            <div className="home__content grid">
                                <div className="home__group">
                                    <img src={slide_info.img} alt="home 1" className="home__img" />
                                    <div className="home__indicator"></div>
                                    <div className="home__details-img">
                                        <h4 className="home__details-tittle">{slide_info.details_title}</h4>
                                        <span className="home__details-subtitle">{slide_info.details_subtitle}</span>
                                    </div>
                                </div>
                                <div className="home__data">
                                    <h3 className="home__subtitle">{slide_info.data.subtitle}</h3>
                                    <h1 className="home__title">{slide_info.data.title}</h1>
                                    <p className="home__description">{slide_info.data.description}
                                    </p>
                                    <div className="home__buttons">
                                        <a href="#" className="button">Book Now</a>
                                        <a href="#" className="button--link button--flex">
                                            Track Record
                                            <i className='bx bx-right-arrow-alt button__icon'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}
