import { useEffect, useState } from "react";
import LoginPresentation from "./LoginPresentation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {Login} from '../Redux/Slices/AdminSlice'
import { useNavigate } from "react-router-dom";
function LoginLogic(){
    const navigate=useNavigate();
const dispatch=useDispatch();
    const [LoginData,setLoginData]=useState({
        regNo:"",
        password:""
    })

    async function handelFormSubmit(e){
    e.preventDefault();
    if(!LoginData.regNo ||!LoginData.password){
    toast.error("Please fill the all boxes!!!!");
    }
    const apiResponse=await dispatch(Login(LoginData));
    if(apiResponse)navigate('/')
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