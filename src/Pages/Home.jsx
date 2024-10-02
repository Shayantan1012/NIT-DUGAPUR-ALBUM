import Header from "../Layout/Header"
import Footer from "../Layout/Footer"
import Dashboard from "../Layout/Dashboard"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HomeStyle.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import  {getCampusImage} from "../Redux/Slices/CampusSlice";
import { getDepartmentImage } from "../Redux/Slices/DepertmentSlice";

import { getEventImage } from "../Redux/Slices/EventSlice";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Home(){
const dispatch=useDispatch();

useEffect(()=>{
  dispatch(getCampusImage());
  dispatch(getEventImage());
  dispatch(getDepartmentImage());
},[])
const state1=useSelector((state)=>(state.campus.imageDetails))
const state2=useSelector((state)=>(state.department.imageDetails))
const state3=useSelector((state)=>(state.event.imageDetails))
const HomePageImages=[...state1,...state2,...state3];
const randomImages = shuffleArray(HomePageImages)

if(randomImages.length>10)randomImages=randomImages.slice(0,10);
console.log("This is the homepage Images-->",randomImages);

    return (
        <div className="flex flex-col h-screen  bg-gradient-to-r from-purple-500 to-pink-500 ">
            <Header PageType={'Home'}/>
            <div className="flex flex-row h-full">
            <Dashboard/>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

      {
        randomImages.map((item)=>{
        return   item.image.map((images)=>{
              return (
                <SwiperSlide key={images._id} className="bg-transparent">
                  <img src={images.imageURL} className="w-full h-full"/>
                  <div className="absolute  w-full h-full flex items-end justify-start  pl-7 pb-6">
                  <h1 className="text-white text-xl font-mono font-bold">
                    {images.description}
                  </h1>
                </div>         
           </SwiperSlide>
              )
                      })
        })

      }
      </Swiper>
            </div>
<Footer/>
        </div>
    )

}

export default Home


{/*<SwiperSlide className='flex flex-col justify-center items-center border-solid  '>
<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
<div className='bg-slate-50 w-full rounded-md pb-5 flex flex-row justify-center bg-cyan-200 shadow-lg'>
  <h1 className='font-semibold text-xl italic font-sans  text-transparent bg-gradient-to-l from-blue-200 to-blue-500   bg-clip-text font-bold'>Main Academic Building</h1>
</div>
</SwiperSlide>*/}
