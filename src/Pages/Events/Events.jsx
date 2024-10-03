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
import Header from '../../Layout/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Events(){

const navigate=useNavigate();

 const  EventImages=useSelector((state)=>state.event.imageDetails )

 const handleImageClick = (image) => {
  navigate('/finalImage',{state:{imageDetails:image}});

};
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-screen'>
        <Header PageType={'Events'}/>
        <div className='flex flex-row justyfy-center pt-5 bg-gradient-to-r from-purple-500 to-pink-500'>
  <span className='flex  pb-7 font-extrabold justify-center merienda-font3 w-full text-transparent text-5xl bg-gradient-to-l from-slate-100 to-slate-400   bg-clip-text font-bold'>
   !! Lets Explore Our College Events!!     
  </span>
  </div>
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

{
  EventImages.map((item)=>{
    return (
    <SwiperSlide  key={item._id} onClick={()=>handleImageClick(item.image)} className='flex flex-col justify-center items-center border-solid bg-transparent '>
    <img src={item.image[0].imageURL} 
      alt="Event 1st Image" className="images"
      />
    <div className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... bg-slate-50 w-full rounded-md pb-5 shadow-md flex flex-row justify-center bg-cyan-50'>
      <h1 className='font-bold text-2xl  playwrite-de-grund-font2  text-transparent bg-gradient-to-l from-orange-200 to-cyan-500  transition bg-clip-text font-bold'>{item.eventName}</h1>
    </div>
  </SwiperSlide>
    )

  })

}
  </Swiper>
</div>    
)

}

export default Events;