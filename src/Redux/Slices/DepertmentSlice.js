import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";
const initialState={
    imageDetails:[],
}
export const   getDepartmentImage=createAsyncThunk('/department/getImage',async(data)=>{
try{
     const  DepartmentImages=await axiosInstance.get('/user/department');
    if(DepartmentImages.data.success){
        toast.success("Successfully Loaded Department Images!!")
    }
    else toast.error("Can't Load Department images !!!")

    return DepartmentImages?.data?.data?.response;

}
catch(error){
console.log(error);
console.log("Something Went Wrong!!!");
}
})



const DepartmentImageSlice=createSlice({
    name:'DepartmentImage',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
builder
.addCase(getDepartmentImage.fulfilled,(state,action)=>{
    state.imageDetails=action?.payload;
    console.log("This is Department Images in Deaprtments--->",state.imageDetails);
})
    }

})


export default DepartmentImageSlice.reducer;

