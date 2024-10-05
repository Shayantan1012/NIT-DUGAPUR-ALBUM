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

export const UploadCampusIamge=createAsyncThunk('/admin/campus/imageUpload',async(data)=>{
    try{
    const response=await axiosInstance.post('/admin/campus',data);
    if(!response){
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

    export const DeleteCampusIamge=createAsyncThunk('/admin/campus/imageDelelte',async(data)=>{
        try{
        const response=await axiosInstance.delete(`/admin/campus/${data.name}/${data.objectID}`);
        if(!response){
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

