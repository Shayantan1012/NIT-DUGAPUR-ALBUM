import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";
const initialState={
    imageDetails:[],
}
export const   getCampusImage=createAsyncThunk('/campus/getImage',async(data)=>{
try{
     const  campusImages=await axiosInstance.get('/user/campus');
    if(campusImages.data.success){
        toast.success("Successfully Loaded Campus Images!!")
    }
    else toast.error("Can't Load Campus images !!!")
    return campusImages?.data?.data?.response;

}
catch(error){
console.log(error);
console.log("Something Went Wrong!!!");
}
})



const campusImageSlice=createSlice({
    name:'CampusImage',
    initialState,
    reducer:{},
    extraReducers:(builder)=>{
builder
.addCase(getCampusImage.fulfilled,(state,action)=>{

    state.imageDetails=action?.payload;
    console.log("This is State Images in Campus--->",state.imageDetails);

})
    }

})


export default campusImageSlice.reducer;

