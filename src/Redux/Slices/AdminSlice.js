import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

export const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn')==='true'||false,
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

export const LogOut=createAsyncThunk('/admin/Logout',async(data)=>{
    try{  
        const role=localStorage.getItem('role');
if(role==='ADMIN')localStorage.setItem('logoutState','true')
        const response=await axiosInstance.post('/admin/auth/logout',data);
    if(!response){
        toast.error("Unable to LogOut!!!");
        return ;
    }
        else toast.success("Successfully Logout!!");
        const apiResponse=await response;
        return apiResponse;
    
    }catch(error){
    console.log(error);
    console.log("Unable to Login!!");
    }
    })

    export const createAccount=createAsyncThunk('/admin/createAccount',async(data)=>{
        try{
        
        const response=await axiosInstance.post('/nit-dgp/admin/',data);
        console.log("This is Registration response->",response);
        if(response)toast.success(response.data.message);
        if(!response)toast.error("Unable to create User!!!")
        const apiResponse=await response;
        return apiResponse;
        
        }catch(error){
        console.log(error);
        console.log("Unable to create Admin!!!");
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
        localStorage.setItem('isLoggedIn','true'),
        localStorage.setItem('role',action?.payload?.data?.data?.response?.adminData?.role),
        localStorage.setItem('data',JSON.stringify(action?.payload?.data?.data?.response?.adminData))
        localStorage.setItem('logoutState','false')

        }
    )
    .addCase(LogOut.fulfilled,(state,action)=>{
        state.isLoggedIn='false',
        state.role='USER',
        state.data={},
        localStorage.setItem('isLoggedIn','false'),
        localStorage.setItem('role','USER'),
        localStorage.setItem('data',JSON.stringify({}))
        }
    )

    }

})

export default AuthSlice.reducer


