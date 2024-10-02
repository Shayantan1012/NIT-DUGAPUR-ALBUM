import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";
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

