import Header from "../../Layout/Header"

import React, { useEffect, useReducer, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { DeleteEventIamge, getEventImage } from "../../Redux/Slices/EventSlice";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from  './FinalImageStyle.module.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteCampusIamge, getCampusImage } from "../../Redux/Slices/CampusSlice";
import { DeleteDepartmentIamge, getDepartmentImage } from "../../Redux/Slices/DepertmentSlice";
import  toast  from "react-hot-toast";
import { LogOut } from "../../Redux/Slices/AdminSlice";

function shuffleArray(array) {
if (array.length!=0){
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
 }

  return array;
}


function FinalImagePagePresentation(imagesDetails){
  const Dispatch=useDispatch();
  const navigate=useNavigate();
const isLoggedIn=localStorage.getItem('isLoggedIn')
const [refresh ,forceUpdate]=useReducer(x=>x+1,0);
if(isLoggedIn==='false'){
  toast.error("Please Logged In!!!")
  navigate('/')
}

  useEffect(()=>{
    Dispatch(getCampusImage());
    Dispatch(getEventImage());
    Dispatch(getDepartmentImage());
  },[refresh])

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
const ImageDetails=imagesDetails.imageDetails;
const name=imagesDetails.name
const imageType=imagesDetails.imageType
console.log("In final Image page->",imagesDetails)
const  images=ImageDetails

    const randomImages = shuffleArray(images)

    if(randomImages.length>10)randomImages=randomImages.slice(0,10);

  function handelImage(ImageDetails){

  navigate('/onlyImage',{state:{ImageDetails}})

  }

  const role=localStorage.getItem('role') ||'USER'

async function handelDeleteOparation(objectID){
  if(isLoggedIn==='false'){
    toast.error("Please Logged In!!!")
    navigate('/')
}
console.log(name)
if(imageType==='EVENT'){
const response=await Dispatch(DeleteEventIamge({objectID,name}))
console.log("This is Deleted response->>>>",response);
if(response?.payload?.data?.error?.name==='TokenExpiredError'){
  toast.error("JWT Token Expires!!!")
  Dispatch(LogOut());
  navigate('/nitdgp/admin')
  return ;
}

if (response && response.payload && response.payload.data.success) {
  // Force re-render after successful deletion
  forceUpdate();
}
return response;
}
else if(imageType==='CAMPUS'){
  const response=await Dispatch(DeleteCampusIamge({objectID,name}))
  console.log("This is Deleted response->>>>",response);
  if(response?.payload?.data?.error?.name==='TokenExpiredError'){
    toast.error("JWT Token Expires!!!")
    Dispatch(LogOut());
    navigate('/nitdgp/admin')
    return ;
}
if (response && response.payload && response.payload.data.success) {
    // Force re-render after successful deletion
    forceUpdate();
  }
  return response;
  }
  if(imageType==='DEPARTMENT'){
    const response=await Dispatch(DeleteDepartmentIamge({objectID,name}))
    console.log("This is Deleted response->>>>",response);
    if(response?.payload?.data?.error?.name==='TokenExpiredError'){
      toast.error("JWT Token Expires!!!")
      Dispatch(LogOut());
      navigate('/nitdgp/admin')
      return ;
  }

    if (response && response.payload && response.payload.data.success) {
      // Force re-render after successful deletion
      forceUpdate();
    }
    return response;
    }
    }

    return (

<div className="flex flex-col h-screen  bg-gradient-to-r from-purple-500 to-pink-500 ">
<Header PageType={'FinalImage'} name={name} imageType={imageType}/>
<div style={{ overflow: 'scroll', whiteSpace: 'nowrap' }} className={styles.Container}>

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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={styles.Swiper}
      >
      {randomImages.map((images)=>{
      return (
        <SwiperSlide key={images._id}  className={styles.SwiperSlide}>
        <img  src={images.imageURL} 
        />

        </SwiperSlide>
    )
        })                
       }     
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
</Swiper> 
{/* Create Grid Page */ }
<div className={styles.Gallery}>
{images.map((items)=>{
return (
<div >
<img
className={styles.images}
src={items.imageURL}
onClick={()=>handelImage(items)}
/>
{role==='ADMIN'?<svg onClick={()=>handelDeleteOparation(items._id)} className="w-[30px] h-[30px] hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>:null}
</div>  
)
})
}
</div>


</div>
</div>



    )
}

export default FinalImagePagePresentation