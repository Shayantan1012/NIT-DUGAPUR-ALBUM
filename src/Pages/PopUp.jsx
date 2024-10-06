import { useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeEventName } from "../Redux/Slices/EventSlice";
import toast from "react-hot-toast";
import { ChangeCampusName } from "../Redux/Slices/CampusSlice";
import { ChangeDepertmentName } from "../Redux/Slices/DepertmentSlice";
import { LogOut } from "lucide-react";

function PopUp(name){
const dispatch=useDispatch();
const [newName,setNewName]=useState("");

async function handelChangeName(){
    if(name.imageType==='EVENT'){
const response=await dispatch(ChangeEventName({oldName:name.eventName,newName:newName}));
if(response?.payload?.data?.error?.name==='TokenExpiredError'){
    toast.error("JWT Token Expires!!!")
    dispatch(LogOut());
    navigate('/nitdgp/admin')
    return ;
  }
  
if(!response){
    toast.error("Unable to Change The Name!!!");
    return ;
}
toast.success("Successfully Change the Name!!!");
const apiresponse=await response;
console.log("THIS is change name->",apiresponse)
name.onClose();
return apiresponse;
}
if(name.imageType==='CAMPUS'){
    const response=await dispatch(ChangeCampusName({oldName:name.eventName,newName:newName}));
    if(response?.payload?.data?.error?.name==='TokenExpiredError'){
        toast.error("JWT Token Expires!!!")
        dispatch(LogOut());
        navigate('/nitdgp/admin')
        return ;
      }
      
    if(!response){
        toast.error("Unable to Change The Name!!!");
        return ;
    }
    toast.success("Successfully Change the Name!!!");
    const apiresponse=await response;
    console.log("THIS is change name->",apiresponse)
    name.onClose();
    return apiresponse;
    }
    if(name.imageType==='DEPARTMENT'){
        const response=await dispatch(ChangeDepertmentName({oldName:name.eventName,newName:newName}));
        if(response?.payload?.data?.error?.name==='TokenExpiredError'){
            toast.error("JWT Token Expires!!!")
            dispatch(LogOut());
            navigate('/nitdgp/admin')
            return ;
          }
          
        if(!response){
            toast.error("Unable to Change The Name!!!");
            return ;
        }
        toast.success("Successfully Change the Name!!!");
        const apiresponse=await response;
        console.log("THIS is change name->",apiresponse)
        name.onClose();
        return apiresponse;
        }
            }
    return (
<div className="">
<h1>Give the  Name</h1> 
<input
type="text"
placeholder="Give the Suitable Name"
name="newName"
onChange={(e)=>setNewName(e.target.value)}
/>
<button onClick={handelChangeName}>Enter</button> 
</div>
    )
}

export default PopUp;