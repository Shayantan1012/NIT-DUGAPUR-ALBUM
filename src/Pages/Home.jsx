import Header from "../Layout/Header"
import Footer from "../Layout/Footer"
import Dashboard from "../Layout/Dashboard"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HomeStyle.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import  {getCampusImage} from "../Redux/Slices/CampusSlice";

function Home(){
const dispatch=useDispatch();
useEffect(()=>{
dispatch(getCampusImage());
},[])
    return (
        <div className="flex flex-col h-screen bg-gradient-to-r from-cyan-100 to-cyan-400">
            <Header PageType={'Home'}/>
            <div className="flex flex-row h-full">
            <Dashboard/>
            <Swiper
        dir="rtl"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className=" bg-slate-100"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
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
