import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styleEvents.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Header from '../Layout/Header';

function Events(){


  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-screen'>
        <Header PageType={'Events'}/>
<Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className=" bg-gradient-to-r from-purple-500 to-pink-500"
  >
    <SwiperSlide className='flex flex-col justify-center items-center border-solid  '>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      <div className='bg-slate-50 w-full rounded-md pb-5 shadow-lg flex flex-row justify-center bg-cyan-50'>
        <h1 className='font-semibold text-xl italic font-sans  text-transparent bg-gradient-to-l from-cyan-200 to-cyan-500   bg-clip-text font-bold'>Main Academic Building</h1>
      </div>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col justify-center items-center border-solid  '>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      <div className='bg-slate-50 w-full rounded-md pb-5 flex flex-row justify-center bg-cyan-50'>
        <h1 className='font-semibold text-xl italic font-sans  text-transparent bg-gradient-to-l from-cyan-200 to-cyan-500   bg-clip-text font-bold'>Main Academic Building</h1>
      </div>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col justify-center items-center border-solid  '>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      <div className='bg-slate-50 w-full rounded-md pb-5 flex flex-row justify-center bg-cyan-50'>
        <h1 className='font-semibold text-xl italic font-sans  text-transparent bg-gradient-to-l from-cyan-200 to-cyan-500   bg-clip-text font-bold'>Main Academic Building</h1>
      </div>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col justify-center items-center border-solid  '>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      <div className='bg-slate-50 w-full rounded-md pb-5 flex flex-row justify-center bg-cyan-50'>
        <h1 className='font-semibold text-xl italic font-sans  text-transparent bg-gradient-to-l from-cyan-200 to-cyan-500   bg-clip-text font-bold'>Main Academic Building</h1>
      </div>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col justify-center items-center border-solid  '>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      <div className='bg-slate-50 w-full rounded-md pb-5 flex flex-row justify-center bg-cyan-50'>
        <h1 className='font-semibold text-xl italic font-sans  text-transparent bg-gradient-to-l from-cyan-200 to-cyan-500   bg-clip-text font-bold'>Main Academic Building</h1>
      </div>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col justify-center items-center border-solid  '>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      <div className='bg-slate-50 w-full rounded-md pb-5 flex flex-row justify-center bg-cyan-50'>
        <h1 className='font-semibold text-xl italic font-sans  text-transparent bg-gradient-to-l from-cyan-200 to-cyan-500   bg-clip-text font-bold'>Main Academic Building</h1>
      </div>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col justify-center items-center border-solid  '>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      <div className='bg-slate-50 w-full rounded-md pb-5 flex flex-row justify-center bg-cyan-50'>
        <h1 className='font-semibold text-xl italic font-sans  text-transparent bg-gradient-to-l from-cyan-200 to-cyan-500   bg-clip-text font-bold'>Main Academic Building</h1>
      </div>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col justify-center items-center border-solid  '>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      <div className='bg-slate-50 w-full rounded-md pb-5 flex flex-row justify-center bg-cyan-50'>
        <h1 className='font-semibold text-xl italic font-sans  text-transparent bg-gradient-to-l from-cyan-200 to-cyan-500   bg-clip-text font-bold'>Main Academic Building</h1>
      </div>
    </SwiperSlide>
    <SwiperSlide className='flex flex-col justify-center items-center border-solid  '>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      <div className='bg-slate-50 w-full rounded-md pb-5 flex flex-row justify-center bg-cyan-50'>
        <h1 className='font-semibold text-xl italic font-sans  text-transparent bg-gradient-to-l from-cyan-200 to-cyan-500   bg-clip-text font-bold'>Main Academic Building</h1>
      </div>
    </SwiperSlide>
  </Swiper>
  <div className='flex flex-row justyfy-center pt-5 bg-gradient-to-r from-purple-500 to-pink-500'>
  <span className='flex text-3xl pb-7 font-extrabold justify-center w-full text-transparent bg-gradient-to-l from-blue-100 to-blue-800   bg-clip-text font-bold'>
   !! Lets Explore Our College Events!!     
  </span>
  </div>
</div>    
)

}

export default Events;