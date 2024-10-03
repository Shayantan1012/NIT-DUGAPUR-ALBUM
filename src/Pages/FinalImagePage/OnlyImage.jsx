import { useLocation } from "react-router-dom";
import Header from "../../Layout/Header";
import { useEffect, useState } from "react";
import Footer from "../../Layout/Footer";


function OnlyImage(){
    const location =useLocation();
    const ImageDeatails=location.state
const [dimension,setDimention]=useState({width:0 , height :0});
const image_deatils=ImageDeatails.ImageDetails.imageURL

useEffect(()=>{
    const img = new Image();
    img.src = image_deatils;
    img.onload = function() {
        var width = img.naturalWidth;
        var height = img.naturalHeight;
        setDimention({width:width,height:height});
    };
},[ImageDeatails])
const aspectRatio=dimension.width/dimension.height 
let newWidth=1;
let newHeight=1;
console.log("-------->",(aspectRatio))

if (aspectRatio <= 1.5 && aspectRatio >= 1) {
    newWidth = 500;
    newHeight = newWidth / aspectRatio;  // Maintain aspect ratio
} else if (aspectRatio > 1.5) {
    newWidth = 600;
    newHeight = newWidth / aspectRatio;
} else if (aspectRatio > 0 && aspectRatio < 1) {
    newHeight = 500;
    newWidth = newHeight * aspectRatio;
}

    return(
<div>
<Header PageType={'FinalImage'} />
<div className="flex flex-col justify-center item-center bg-gradient-to-r from-purple-500 to-pink-500 w-screen h-screen p-4">
<div className=" flex flex-row justify-center item-center">
<img src={image_deatils} 
className="rounded-2xl  drop-shadow-lg hover:drop-shadow-2xl " 
style={{width:`${newWidth}px` , height:`${newHeight}px`}}
/>
</div>
<div className="flex flex-row text-white justify-center merienda-font3 text-xl mt-5 ">{ImageDeatails.ImageDetails.description}</div>

</div>

<Footer/>
</div>
    )
    }

    export default OnlyImage
