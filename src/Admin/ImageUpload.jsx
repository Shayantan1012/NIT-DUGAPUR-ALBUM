import { useLocation, useNavigate } from "react-router-dom";
import ImageUploadPresentation from "./ImageUploadPresentation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UploadEventIamge } from "../Redux/Slices/EventSlice";
import { useDispatch } from "react-redux";
import { UploadCampusIamge } from "../Redux/Slices/CampusSlice";
import { UploadDepartmentIamge } from "../Redux/Slices/DepertmentSlice";

function ImageUpload(){
    const location =useLocation();
    const type=location?.state?.imageType;
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [EventDetails,setEventDetails]=useState({
        ImageDescription:"",
        ImageName:"",
    });
    const [Image,SetImage]=useState(null);
    const [preView,setPreview]=useState(null);
function handelUserInput(e){
    e.preventDefault()
    const {name,value}=e.target;
    setEventDetails({
    ...EventDetails,
    [name]:value
  })

    }

    function handleImageChange(e) {
        e.preventDefault();

        const file = e.target.files[0];
        if (file) {
            SetImage(file);
            setPreview(URL.createObjectURL(file)); // Create a preview URL for the selected image
        }
      }
    async function handelFormSubmit(e){
        e.preventDefault();

        if(EventDetails.eventName===""){
            toast.error("Give the name!!!")
            return ;
        }
        if(EventDetails.description===""){
            toast.error("Give the necessery Description!!!")
            return ;
        }
        if(Image===null){
            toast.error("Give the Image!!!")
            return ;
        }
        
        if(type==='EVENT'){
            e.preventDefault();
            console.log(type);
            const formData=new FormData()
            formData.append( 'eventName',EventDetails.ImageName)
            formData.append( 'description',EventDetails.ImageDescription)
            formData.append( 'imageURL',Image)
    const response=await dispatch(UploadEventIamge(formData))
        console.log("This is Event Upload Response->",response);
        navigate(-1)
        return response;
        }

        else if(type==='CAMPUS'){
            e.preventDefault();
            console.log(type);
            const formData=new FormData()
            formData.append( 'placeName',EventDetails.ImageName)
            formData.append( 'description',EventDetails.ImageDescription)
            formData.append( 'imageURL',Image)
    const response=await dispatch(UploadCampusIamge(formData))
        console.log("This is CAMPUS Upload Response->",response);
        navigate(-1)
        return response;
        }
        else if(type==='DEPARTMENT'){
            e.preventDefault();
            console.log(type);
            const formData=new FormData()
            formData.append( 'departmentName',EventDetails.ImageName)
            formData.append( 'description',EventDetails.ImageDescription)
            formData.append( 'imageURL',Image)
    const response=await dispatch(UploadDepartmentIamge(formData))
        console.log("This is DEPARTMENT Upload Response->",response);
        navigate(-1)
        return response;
        }

    }
  
    return (
        <div>
            <ImageUploadPresentation handelFormSubmit={handelFormSubmit} handelUserInput={handelUserInput} handleImageChange={handleImageChange} preViewImage={preView} type={type}/>
        </div>
    )
}

export default ImageUpload;