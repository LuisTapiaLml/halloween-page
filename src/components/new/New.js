import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination , Virtual  } from 'swiper';

import { news } from '../../data/news';
import { useWindowSize } from '../../hooks/useWindowSize';

SwiperCore.use([Pagination]);

export const New = () => {

    const [width, height] = useWindowSize();

    const [stateItemsCount, setStateItemsCount] = useState(1);

    useEffect(() => {
        console.log(width);

        if( width > 520 ){
            setStateItemsCount(2)

        }else if( width > 760 ){
            setStateItemsCount(3)
        }else{
            setStateItemsCount(1)
        }
        
         
    }, [width])

    return (
        <section className="section new" id="new">
            <h2 className="section__title">New Arrivals</h2>

            <div className="new__container container">
                <Swiper
                    modules={[Virtual]} 
                    className="new-swiper"
                    spaceBetween={18}
                    centeredSlides = {true}
                    loop = {true}
                    slidesPerView = {1}
                    pagination={{
                        "dynamicBullets": true,
                    }}
                >
                    {
                        news.map((new_item, index) => (
                            <SwiperSlide key={`key_slider_news_${index}`}>
                                <div className="new__content">
                                    <div className="new__tag">{new_item.tag}</div>
                                    <img src={new_item.img} alt="new img 1" className="new__img" />
                                    <h3 className="new__title">{new_item.title}</h3>
                                    <span className="new__subtitle">{new_item.subtitle}</span>

                                    <div className="new__preices">
                                        <span className="new__price">{`$${new_item.price}`}</span>
                                        <span className="new__discount">{`$${new_item.discount}`}</span>
                                    </div>
                                    <button className="button new__button">
                                        <i className='bx bx-cart-alt new__icon'></i>
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </section>
    )
}
