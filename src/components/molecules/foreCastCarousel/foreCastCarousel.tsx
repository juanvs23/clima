'use client'
import React from 'react'
import useForecast from '@/src/hooks/useForecast'
import { Swiper,SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import ForeCastSlide from '../../atoms/foreCastSlide/foreCastSlide';

export default function ForeCastCarousel() {
    const { forecastWeather } = useForecast();
    const foreItems = forecastWeather?.list || [{dt:0},{dt:1},{dt:2},{dt:3},{dt:4},{dt:5}, {dt:6},{dt:7},{dt:8}];

    
    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                loop={true}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
            >
                {
                  foreItems.length> 0 && foreItems.map((foreItem)=>{
                        return(
                            <SwiperSlide key={foreItem.dt}>
                                <ForeCastSlide foreItem={foreItem}/>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper> 
        </div>
    )
}
