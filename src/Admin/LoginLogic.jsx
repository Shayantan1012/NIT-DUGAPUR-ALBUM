import { useEffect, useState } from "react";
import LoginPresentation from "./LoginPresentation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {Login} from '../Redux/Slices/AdminSlice'
import { useLocation, useNavigate } from "react-router-dom";
function LoginLogic(){
const navigate=useNavigate();
const dispatch=useDispatch();
const location=useLocation();
    const [LoginData,setLoginData]=useState({
        regNo:"",
        password:""
    })
    async function handelFormSubmit(e){
    e.preventDefault();
    console.log(".......",LoginData)
    if(!LoginData.regNo ||!LoginData.password){
    toast.error("Please fill the all boxes!!!!");
    }
    const apiResponse=await dispatch(Login(LoginData));
    if(apiResponse){
        if(location.state==='FromRegistration')navigate('/nitdgp/admin/adminRegistration')
        else   navigate('/')

    }
      else toast.error("Login failed! Please check your credentials.")
        return ;
    }    



    function handelUserInput(e){
        const {name,value}=e.target;
        setLoginData({
            ...LoginData,
            [name]:value,
        })

    }



return (
    <div>
<LoginPresentation handelFormSubmit={handelFormSubmit} handelUserInput={handelUserInput}/>
    </div>
)

}

export default LoginLogic;