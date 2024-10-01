import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

const getImage=createAsyncThunk('/campus/getImage',async(data)=>{
try{
    const campusImages=await axiosInstance.get('/')

}
catch(error){

}
})