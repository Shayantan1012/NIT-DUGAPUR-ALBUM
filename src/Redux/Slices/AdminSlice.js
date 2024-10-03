import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../Helper/axiosInstance";
import { toast } from "react-toastify";

export const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn')==='true'||'false',
    role:localStorage.getItem('role') || {},
    data:JSON.parse(localStorage.getItem('data'))||{}
}

export const Login=createAsyncThunk('/admin/Login',async(data)=>{
try{  
    const response=await axiosInstance.post('/admin/auth/login',data);

if(!response){
    toast.error("Unable to Login!!!");
    return ;
}
    else toast.success("Successfully Login!!");
    const apiResponse=await response;
    return apiResponse;

}catch(error){
console.log(error);
console.log("Unable to Login!!");
}
})


const AuthSlice=createSlice({
    name:'Auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(Login.fulfilled,(state,action)=>{
        state.isLoggedIn='true',
        state.role=action?.payload?.data?.data?.response?.adminData?.role,
        state.data=action?.payload?.data?.data?.response?.adminData,
        localStorage.setItem('isLoggedIn',true),
        localStorage.setItem('role',action?.payload?.data?.data?.response?.adminData?.role),
        localStorage.setItem('data',JSON.stringify(action?.payload?.data?.data?.response?.adminData))
        }
    )

    }
})

export default AuthSlice.reducer


