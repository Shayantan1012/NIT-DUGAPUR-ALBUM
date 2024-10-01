import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";
const initialState={
    imageDetails:[],
}
export const   getDepartmentImage=createAsyncThunk('/campus/getImage',async(data)=>{
try{
     const  DepartmentImages=await axiosInstance.get('/user/Department');

    if(DepartmentImages.data.success){
        toast.success("Successfully Loaded Campus Images!!")
    }
    else toast.error("Can't Load Campus images !!!")
    console.log(DepartmentImages.data.data.response)
    return DepartmentImages?.data?.data?.response;

}
catch(error){
console.log(error);
console.log("Something Went Wrong!!!");
}
})



const DepartmentImageSlice=createSlice({
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


export default DepartmentImageSlice.reducer;

