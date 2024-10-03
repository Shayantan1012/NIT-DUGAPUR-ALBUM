import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import sorry from '../../assets/sorry.svg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from'./styleEvents.module.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Header from '../../Layout/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Layout/Footer';

function Events(){
const role=localStorage.getItem('role') ||'USER'

const navigate=useNavigate();

 const  EventImages=useSelector((state)=>state.event.imageDetails )

 const handleImageClick = (image) => {

  navigate('/finalImage',{state:{imageDetails:image}});

};
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500  h-screen'>
        <Header PageType={'Events'}/>
        <div className='flex flex-row justyfy-center pt-5 bg-gradient-to-r from-purple-500 to-pink-500'>
  <span className='flex  pb-4 font-extrabold justify-center merienda-font3 w-full text-transparent text-4xl bg-gradient-to-l from-slate-100 to-slate-400   bg-clip-text font-bold'>
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
    className={styles.Swiper}
  >
    {(role==='ADMIN')?
    <SwiperSlide  onClick={navigate('/admin/imageUpload',{state:{imageType:'EVENT'}})}  className=" transition ease-in-out delay-150   w-[350px] h-[350px] border-2 shadow-xl hover:shadow-none border-gray-500 rounded-md flex flex-col justify-end items-center" >
      <div className='flex flex-col justify-center items-center w-full h-full'><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" className =" hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" width="50px" fill="#5f6368"><path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z"/></svg> 
      </div>
    <div className=' w-[90%] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... bg-slate-50  rounded-md pb-5 shadow-md flex flex-row justify-center item-center bg-cyan-50 '>
      <h1 className='font-bold text-2xl  playwrite-de-grund-font2  text-transparent bg-gradient-to-l from-orange-200 to-cyan-500  transition bg-clip-text font-bold'>Add Image</h1>
    </div>
    </SwiperSlide>:null
     }
{
EventImages.length ? EventImages.map((item)=>{
    return (
    <SwiperSlide  key={item._id} onClick={()=>handleImageClick(item.image)}  className={styles.SwiperSlide} >
    <img src={item.image[0]?(item?.image[0]?.imageURL):sorry} 
      alt="Event 1st Image" 
      />
    <div className=' w-[90%] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... bg-slate-50  rounded-md pb-5 shadow-md flex flex-row justify-center item-center bg-cyan-50'>
      <h1 className='font-bold text-2xl  playwrite-de-grund-font2  text-transparent bg-gradient-to-l from-orange-200 to-cyan-500  transition bg-clip-text font-bold'>{item.image[0]?(item?.eventName):"Sorry no Image Present"}</h1>
    </div>
  </SwiperSlide>
    )
  }):
  (
   <div className='flex justify-center items-center h-[50%]'>
 <div className='text-5xl text-red font-bold edu-au-vic-wa-nt-guides-font1'> Sorry No Image Present!!!!👏👏👏👏</div>
 </div>
 )


}
  </Swiper>
  <Footer/>
</div>    
)

}

export default Events;