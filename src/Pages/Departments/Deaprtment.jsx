import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styleDepartments.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Header from '../../Layout/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Departments(){
  const navigate=useNavigate();
  const handleImageClick = (image) => {

    navigate('/finalImage',{state:{imageDetails:image}});
  
  };
  
 const  DepartmentImages=useSelector((state)=> state.department.imageDetails)
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-screen'>
        <Header PageType={'Departments'}/>
        <div className='flex flex-row justyfy-center pt-5 bg-gradient-to-r from-purple-500 to-pink-500'>
  <span className='flex  pb-7 font-extrabold justify-center merienda-font3 w-full text-transparent text-5xl bg-gradient-to-l from-slate-100 to-slate-400   bg-clip-text font-bold'>
   !! Lets Explore Our Departments!!     
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
  DepartmentImages.map((item)=>{
    return (
    <SwiperSlide  onClick={()=>handleImageClick(item.image)} className='images flex flex-col justify-center delay-100 items-center border-solid bg-transparent '  key={item._id}>
    <img src={item.image[0].imageURL} 
      alt="Event 1st Image" className='images'
      />
    <div className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... bg-slate-50 w-full rounded-md pb-5 shadow-md flex flex-row justify-center bg-cyan-50'>
      <h1 className='font-bold text-2xl  playwrite-de-grund-font2  text-transparent bg-gradient-to-l from-orange-200 to-cyan-500  transition bg-clip-text font-bold'>{item.departmentName}</h1>
    </div>
  </SwiperSlide>
    )

  })

}
  </Swiper>
</div>    
)

}

export default Departments;