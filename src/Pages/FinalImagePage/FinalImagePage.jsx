import Header from "../../Layout/Header"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from  './FinalImageStyle.module.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function FinalImagePagePresentation(ImagesDetails){
  const navigate=useNavigate();
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;

    }
   const  images=ImagesDetails.imageDetails.imageDetails

    const randomImages = shuffleArray(images)

    if(randomImages.length>10)randomImages=randomImages.slice(0,10);

  function handelImage(ImageDetails){

  navigate('/onlyImage',{state:{ImageDetails}})

  }

    return (

<div className="flex flex-col h-screen  bg-gradient-to-r from-purple-500 to-pink-500 ">
<Header PageType={'FinalImage'}/>
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