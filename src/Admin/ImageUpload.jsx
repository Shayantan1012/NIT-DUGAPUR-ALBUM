import { useLocation, useNavigate } from "react-router-dom";
import ImageUploadPresentation from "./ImageUploadPresentation";
import { useEffect, useReducer, useState } from "react";
import toast from "react-hot-toast";
import { UploadEventIamge } from "../Redux/Slices/EventSlice";
import { useDispatch } from "react-redux";
import { UploadCampusIamge } from "../Redux/Slices/CampusSlice";
import { UploadDepartmentIamge } from "../Redux/Slices/DepertmentSlice";
import { getCampusImage } from "../Redux/Slices/CampusSlice";
import { getDepartmentImage } from "../Redux/Slices/DepertmentSlice";
import { getEventImage } from "../Redux/Slices/EventSlice";
import { LogOut } from "../Redux/Slices/AdminSlice";
function ImageUpload(){
    const location =useLocation();
    const type=location?.state?.imageType;
    const name=location?.state?.name

const isLoggedIn=localStorage.getItem('isLoggedIn');

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [refresh ,forceUpdate]=useReducer(x=>x+1,0);
    const [EventDetails,setEventDetails]=useState({
        ImageDescription:"",
        ImageName:"",
    });
    if(isLoggedIn==='false'){
        toast.error("Please Logged In!!!")
        navigate('/')
    }
    const [responseDetails,setresponseDetails]=useState({})
    useEffect(()=>{
        dispatch(getCampusImage());
        dispatch(getEventImage());
        dispatch(getDepartmentImage());
      },[refresh])
    const [Image,SetImage]=useState(null);
    const [preView,setPreview]=useState(null);
function handelUserInput(e){
    if(isLoggedIn==='false'){
        toast.error("Please Logged In!!!")
        navigate('/')
    }
    e.preventDefault()
    const {name,value}=e.target;
    setEventDetails({
    ...EventDetails,
    [name]:value
  })

    }

    function handleImageChange(e) {
        e.preventDefault();
        if(isLoggedIn==='false'){
            toast.error("Please Logged In!!!")
            navigate('/')
        }
    

        const file = e.target.files[0];
        if (file) {
            if(isLoggedIn==='false'){
                toast.error("Please Logged In!!!")
                navigate('/')
            }
        
                SetImage(file);
            setPreview(URL.createObjectURL(file)); // Create a preview URL for the selected image
        }
      }
    async function handelFormSubmit(e){
        e.preventDefault();
        if(isLoggedIn==='false'){
            toast.error("Please Logged In!!!")
            navigate('/')
        }
    
        if(!name && EventDetails.eventName===""){
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
            formData.append( 'eventName',!name?EventDetails.ImageName:name)
            formData.append( 'description',EventDetails.ImageDescription)
            formData.append( 'imageURL',Image)
    const response=await dispatch(UploadEventIamge(formData))
        console.log("This is Event Upload Response->",response);
        if(response?.payload?.data?.error?.name==='TokenExpiredError'){
            toast.error("JWT Token Expires!!!")
            dispatch(LogOut());
            navigate('/nitdgp/admin')
            return ;
        }
    
        navigate(-1)
        if (response && response.payload && response.payload.data.success) {
            // Force re-render after successful deletion
            forceUpdate();
          }
                  return response;
        }

        else if(type==='CAMPUS'){
            e.preventDefault();
            const formData=new FormData()
            formData.append( 'placeName',!name?EventDetails.ImageName:name)
            formData.append( 'description',EventDetails.ImageDescription)
            formData.append( 'imageURL',Image)
            console.log(formData);

    const response=await dispatch(UploadCampusIamge(formData))
        console.log("This is CAMPUS Upload Response->",response);
        if(response?.payload?.data?.error?.name==='TokenExpiredError'){
            toast.error("JWT Token Expires!!!")
            dispatch(LogOut());
            navigate('/nitdgp/admin')
            return ;
        }
    
        navigate(-1)
        if (response && response.payload && response.payload.data.success) {
            // Force re-render after successful deletion
            forceUpdate();
          }
        return response;
        }

        
        else if(type==='DEPARTMENT'){
            e.preventDefault();
            console.log(type);
            const formData=new FormData()
            formData.append( 'departmentName',!name?EventDetails.ImageName:name)
            formData.append( 'description',EventDetails.ImageDescription)
            formData.append( 'imageURL',Image)


    const response=await dispatch(UploadDepartmentIamge(formData))
        console.log("This is DEPARTMENT Upload Response->",response);
        if(response?.payload?.data?.error?.name==='TokenExpiredError'){
            toast.error("JWT Token Expires!!!")
            dispatch(LogOut());
            navigate('/nitdgp/admin')
            return ;
        }
    
        navigate(-1)
        if (response && response.payload && response.payload.data.success) {
            // Force re-render after successful deletion
            forceUpdate();
          }
        return response;
        }

    }
  
    return (
        <div>
            <ImageUploadPresentation handelFormSubmit={handelFormSubmit} handelUserInput={handelUserInput} handleImageChange={handleImageChange} preViewImage={preView} type={type} name={name}/>
        </div>
    )
}

export default ImageUpload;