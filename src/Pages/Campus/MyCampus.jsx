import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styleMyCampus.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Header from '../../Layout/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MyCampus(){
const CampusImages=useSelector((state)=>state.campus.imageDetails)
const navigate=useNavigate();

const handleImageClick = (image) => {
  navigate('/finalImage',{state:{imageDetails:image}});

};

    return (
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-screen'>
            <Header PageType={'MyCampus'}/>
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
  CampusImages.map((item)=>{
    return (
    <SwiperSlide className='flex flex-col justify-center items-center border-solid bg-transparent ' onClick={()=>handleImageClick(item.image)} key={item._id} >
    <img src={item.image[0].imageURL} 
      alt="Event 1st Image"
      />
    <div className='bg-slate-50 w-full rounded-md pb-5 shadow-lg flex flex-row justify-center bg-cyan-50'>
      <h1 className='font-semibold text-xl  font-mono  text-transparent bg-gradient-to-l from-orange-200 to-cyan-500  transition bg-clip-text font-bold'>{item.placeName}</h1>
    </div>
  </SwiperSlide>
    )

  })

}
      </Swiper>
      <div className='flex flex-row justyfy-center pt-5 pb-5 bg-gradient-to-r from-purple-500 to-pink-500'>
      <span className='flex text-3xl font-extrabold justify-center w-full text-transparent bg-gradient-to-l from-blue-200 to-blue-700   bg-clip-text font-bold'>
       !! Lets Explore Our College !!     
      </span>
      </div>
    </div>    
    )

}

export default MyCampus;