import { useNavigate } from "react-router-dom";
import RegisterAdminPresentation from "./RegisterAdminPresentation";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { createAccount } from "../Redux/Slices/AdminSlice";
import  toast  from "react-hot-toast";


function RegisterAdmin(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const isLoggedIn=localStorage.getItem('isLoggedIn');
    useEffect(()=>{
        if(!isLoggedIn || isLoggedIn==='false'){
            navigate('/nitdgp/admin',{state:"FromRegistration"})
            return ;
        }
        },[])
    const [signUpState,setSignUpState]=useState({
    firstName:'',
    lastName:'',
    mobileNumber:'',
    CurrentYear:'',
    Roll:'',
    Reg:'',
    email:'',
    password:'',
  })
   function  handelUserInput(e){
  const {name,value}=e.target;
  setSignUpState({
      ...signUpState,
      [name]:value,
  })
   }
  async function handelFormSubmit(e){
    e.preventDefault();
    console.log(signUpState);
  if(!signUpState.firstName || !signUpState.lastName ||!signUpState.mobileNumber || !signUpState.CurrentYear||!signUpState.Roll||!signUpState.Reg||!signUpState.email||!signUpState.password){
  toast.error("Please fill the all boxes!!!!");
  return ;
  }    
  if(signUpState.mobileNumber.length<10 || signUpState.mobileNumber.length>10){
      toast.error("Please give a valid mobilenumber!!!!");
      return ;
      }
  if(!signUpState.email.includes('@') || !signUpState.email.includes('nitdgp')){
              toast.error("Please give a valid emailId!!!!");
              return ;
          }
  const apiRespone=await dispatch(createAccount(signUpState));
  console.log("This is api response for registration->",apiRespone);
          if(apiRespone.payload.data.success){
            navigate('/nitdgp/admin/')
          }
  return ;
      }
      
      return (
<div>
<RegisterAdminPresentation  handelUserInput={handelUserInput} handelFormSubmit={handelFormSubmit} />
</div>
)

}


export default RegisterAdmin;