import { useLocation } from "react-router-dom";
import ImageUploadPresentation from "./ImageUploadPresentation";
import { useState } from "react";
import toast from "react-hot-toast";
import { UploadEventIamge } from "../Redux/Slices/EventSlice";
import { useDispatch } from "react-redux";

function ImageUpload(){
    const location =useLocation();
    const type=location.state.imageType;
    const dispatch=useDispatch();
    const [EventDetails,setEventDetails]=useState({
        description:"",
        eventName:"",
    });
    const [Image,SetImage]=useState(null);
    const [preView,setPreview]=useState(null);
function handelUserInput(e){
    const {name,value}=e.target;
    setEventDetails({
    ...EventDetails,
    [name]:value
  })

    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            SetImage(file);
            setPreview(URL.createObjectURL(file)); // Create a preview URL for the selected image
        }
      }
    
    async  function handelFormSubmit(e){
        e.preventDefault();
        if(EventDetails.eventName===""){
            toast.error("Give the name!!!")
            return ;
        }
        
        if(EventDetails.description===""){
            toast.error("Give the necessery Description!!!")
            return ;
        }
        if(Image==null){
            toast.error("Give the Image!!!")
            return ;
        }
        console.log("...........",type)
        
        if(type==='EVENT'){
            console.log(type);

    const response=await dispatch(UploadEventIamge({
        eventName:EventDetails.eventName,
        description:EventDetails.description,
        imageURL:Image,
    }))
        console.log("This is Event Upload Response->",response);
        return response;
        }


        console.log(">>>>>",EventDetails);
      }
  


    return (
        <div>
            <ImageUploadPresentation handelFormSubmit={handelFormSubmit} handelUserInput={handelUserInput} handleImageChange={handleImageChange} preViewImage={preView}/>
        </div>
    )
}

export default ImageUpload;