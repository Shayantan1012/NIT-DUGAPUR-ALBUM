import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut } from "./AdminSlice";
const initialState={
    imageDetails:[],
}
export const  getEventImage=createAsyncThunk('/event/getImage',async(data)=>{
try{
     const  EventImages=await axiosInstance.get('/user/event');
    if(EventImages.data.success){
        toast.success("Successfully Loaded Event Images!!")
    }
    else toast.error("Can't Load Event images !!!")
    return EventImages?.data?.data?.response;

}
catch(error){
console.log(error);
console.log("Something Went Wrong!!!");
}
})



export const UploadEventImage=createAsyncThunk('/admin/event/imageUpload',async(data)=>{
    try{
    const response=await axiosInstance.post('/admin/events',data);
    if(!response?.payload?.data?.success){
        toast.error("Unable to upload Image!!!")
        return;
    }
    toast.success("Successfully upload Image!!!")
    const apiResponse=await response;
    return apiResponse ;
    
    }
    catch(error){
    console.log(error)
    console.log("Unable to upload Event Image!!!");
    }
    })
    
    export const ChangeNameDetails=createAsyncThunk('/admin/event/imageDelelte',async(data)=>{
        try{
        const response=await axiosInstance.post(`/admin/events/${data.oldName}/${data.newName}`);
        if(!response?.payload?.data?.success){
            toast.error("Unable to update Image Name!!!")
            return;
        }
        toast.success("Successfully update Name!!!")
        const apiResponse=await response;
        return apiResponse ;
        }
        catch(error){
        console.log(error)
        console.log("Unable to remove Event Name!!!");
        }
        })
        

    export const DeleteEventIamge=createAsyncThunk('/admin/event/imageDelelte',async(data)=>{
        try{
        const response=await axiosInstance.delete(`/admin/events/${data.name}/${data.objectID}`);
        if(!response?.payload?.data?.success){
            toast.error("Unable to delete Image!!!")
            return;
        }
        toast.success("Successfully remove Image!!!")
        const apiResponse=await response;
        return apiResponse ;
        }
        catch(error){
        console.log(error)
        console.log("Unable to remove Event Image!!!");
        }
        })
        
    
        export const ChangeEventName=createAsyncThunk('/admin/event/changeName',async({oldName,newName})=>{
            try{
            const response=await axiosInstance.post(`/admin/events/${oldName}/${newName}`);
            if(!response?.payload?.data?.success){
                toast.error("Unable to Change Name!!!")
                return;
            }
            toast.success("Successfully Change Name!!!")
            const apiResponse=await response;
            return apiResponse ;
            
            }
            catch(error){
            console.log(error)
            console.log("Unable to upload Event Nmae!!!");
            }
            })
            


const EventImageSlice=createSlice({
    name:'EventImage',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
builder
.addCase(getEventImage.fulfilled,(state,action)=>{
    state.imageDetails=action?.payload;
    console.log("This is Event Images in Campus--->",state.imageDetails);
})
    }

})


export default EventImageSlice.reducer;

