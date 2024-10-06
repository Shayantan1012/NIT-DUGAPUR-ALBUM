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
<div className="merienda-font3 text-md flex flex-col justify-begin items-begin">
<h1 className="flex justify-center mb-2 text-slate-100">Give the  Name</h1> 
<input
type="text"
placeholder="Give a Suitable Name"
name="newName"
onChange={(e)=>setNewName(e.target.value)}
className="rounded-md h-[30px] mr-2"
/>
<div className="flex flex-row mt-1 justify-between hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-1 font-semibold bg-yellow-300 text-lg shadow-md  satisfy-regular hover:shadow-xl hover:bg-yellow-400 rounded-lg mr-2 border-1 hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
<button onClick={handelChangeName} className="ml-1" >Enter</button> 
<button onClick={()=>name.onClose()} className="mr-1">Cancel</button> 
</div>
</div>
    )
}

export default PopUp;