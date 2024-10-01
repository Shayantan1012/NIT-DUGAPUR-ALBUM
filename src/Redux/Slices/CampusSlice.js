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
    console.log(campusImages.data.data.response)
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
    console.log("-------------------->.>>>");
    state.imageDetails=action?.payload;

})
    }

})


export default campusImageSlice.reducer;

