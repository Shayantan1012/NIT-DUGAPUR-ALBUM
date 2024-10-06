import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { LogOut } from '../Redux/Slices/AdminSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
function Header({PageType,name,imageType}){
    const dipatch=useDispatch();
const navigate=useNavigate();
const location =useLocation();
const role=localStorage.getItem('role')||'USER'
const LogoutState=localStorage.getItem('logoutState')
const isLoggedIn=localStorage.getItem('isLoggedIn')
async function handelLogout(){
const response =await dipatch(LogOut());
return response;
}
async function handelLogIn(){
    navigate('/nitdgp/admin/')
}
        return (
        <div className="flex pb-2 flex-row justify-between items-center bg-gradient-to-r from-purple-500 to-pink-500 ">
            <span className="p-3 font-semibold  shadow-md rounded-lg   "> 
           <img
           className='w-[60px] h-[60px]'
           src={logo}
           onClick={()=>navigate('/')}
           />
            </span>
            {PageType=='MyCampus'?
            <div className="p-3 flex items-center justify-between">
            <button onClick={()=>navigate('/')} className=' hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md satisfy-regular text-2xl hover:shadow-lg rounded-lg mr-2 border-1'>Home</button>
            <button onClick={()=>navigate('/events')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md satisfy-regular text-2xl hover:shadow-lg rounded-lg mr-2'>Events</button>
            <button onClick={()=>navigate('/departments')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  satisfy-regular text-2xl hover:shadow-lg rounded-lg mr-2 border-1'>Departments</button>
            {(role==='ADMIN' && isLoggedIn==='true')? <button onClick={handelLogout} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold bg-yellow-300 text-lg shadow-md  satisfy-regular hover:shadow-xl hover:bg-yellow-400 rounded-lg mr-2 border-1 hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>Logout</button>:null}      
            {( LogoutState==='true' && role!=='USER' )? <button onClick={handelLogIn} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold bg-yellow-300 text-lg shadow-md  satisfy-regular hover:shadow-xl hover:bg-yellow-400 rounded-lg mr-2 border-1 hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>LogIn</button>:null}

            </div>:null
            }
            {PageType=='Events'?
            <div className="p-3 flex items-center justify-between">
            <button onClick={()=>navigate('/')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md font-mono hover:shadow-lg rounded-lg mr-2 satisfy-regular text-2xl border-1'>Home</button>
            <button onClick={()=>navigate('/mycampus')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  font-mono hover:shadow-lg  satisfy-regular text-2xl rounded-lg mr-2 border-1'>MyCampus</button>
            <button onClick={()=>navigate('/departments')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  font-mono hover:shadow-lg satisfy-regular text-2xl rounded-lg mr-2 border-1'>Departments</button>
            {(role==='ADMIN' && isLoggedIn==='true')? <button onClick={handelLogout} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold bg-yellow-300 text-lg shadow-md  satisfy-regular hover:shadow-xl hover:bg-yellow-400 rounded-lg mr-2 border-1 hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>Logout</button>:null}      
            {( LogoutState==='true' && role!=='USER' )? <button onClick={handelLogIn} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold bg-yellow-300 text-lg shadow-md  satisfy-regular hover:shadow-xl hover:bg-yellow-400 rounded-lg mr-2 border-1 hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>LogIn</button>:null}

            </div>:null
            }
            {
                PageType=='Home'?
                <h1 className='hover:opacity-90 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 w-full h-full flex flex-col justify-center items-center text-6xl 
                font-extrabold italic font-mono uppercase text-transparent   bg-gradient-to-r from-slate-50 to-slate-500 bg-clip-text  merienda-font3' > Campus Chronicles</h1>
                         :null
            }

            {PageType=='FinalImage'?
            <div className="p-3 flex items-center justify-between">
            <button onClick={()=>navigate('/')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>Home</button>
            <button onClick={()=>navigate('/mycampus')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>MyCampus</button>
            <button onClick={()=>navigate('/events')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>Events</button>
            <button onClick={()=>navigate('/departments')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>Departements</button>
            {(role==='ADMIN' && isLoggedIn==='true')?<button onClick={()=>navigate('/admin/imageUpload',{state:{name:name,imageType:imageType}})} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-md shadow-md  satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" className =" hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" width="40px" fill="#5f6368"><path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z"/></svg> </button>:null}
            {(role==='ADMIN' && isLoggedIn==='true')? <button onClick={handelLogout} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold bg-yellow-300 text-lg shadow-md  satisfy-regular hover:shadow-xl hover:bg-yellow-400 rounded-lg mr-2 border-1 hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>Logout</button>:null}      
            {( LogoutState==='true' && role!=='USER' )? <button onClick={handelLogIn} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold bg-yellow-300 text-lg shadow-md  satisfy-regular hover:shadow-xl hover:bg-yellow-400 rounded-lg mr-2 border-1 hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>LogIn</button>:null}
            </div>:null
            }
            {PageType=='ImageUpload'?
            <div className="p-3 flex items-center justify-between">
            <button onClick={()=>navigate('/')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>Home</button>
            <button onClick={()=>navigate('/mycampus')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>MyCampus</button>
            <button onClick={()=>navigate('/events')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>Events</button>
            <button onClick={()=>navigate('/departments') } className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>Departements</button>
            {(role==='ADMIN' && isLoggedIn==='true')? <button onClick={handelLogout} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold bg-yellow-300 text-lg shadow-md  satisfy-regular hover:shadow-xl hover:bg-yellow-400 rounded-lg mr-2 border-1 hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>Logout</button>:null}      
            {( LogoutState==='true' && role!=='USER' )? <button onClick={handelLogIn} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold bg-yellow-300 text-lg shadow-md  satisfy-regular hover:shadow-xl hover:bg-yellow-400 rounded-lg mr-2 border-1 hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>LogIn</button>:null}

            </div>:null
            }
            {PageType=='Departments'?
            <div className="p-3 flex items-center justify-between">
            <button onClick={()=>navigate('/')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md satisfy-regular text-2xl hover:shadow-lg rounded-lg mr-2 border-1'>Home</button>
            <button onClick={()=>navigate('/mycampus')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  satisfy-regular text-2xl hover:shadow-lg rounded-lg mr-2 border-1'>MyCampus</button>
            <button onClick={()=>navigate('/events')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  satisfy-regular text-2xl hover:shadow-lg rounded-lg mr-2 border-1'>Events</button>
            {(role==='ADMIN' && isLoggedIn==='true')? <button onClick={handelLogout} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold bg-yellow-300 text-lg shadow-md  satisfy-regular hover:shadow-xl hover:bg-yellow-400 rounded-lg mr-2 border-1 hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>Logout</button>:null}      
            {( LogoutState==='true' && role!=='USER' )? <button onClick={handelLogIn} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold bg-yellow-300 text-lg shadow-md  satisfy-regular hover:shadow-xl hover:bg-yellow-400 rounded-lg mr-2 border-1 hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>LogIn</button>:null}

            </div>:null
            }
            {PageType=='OnlyImage'?
            <div className="p-3 flex items-center justify-between">
            <button onClick={()=>navigate('/')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>Home</button>
            <button onClick={()=>navigate('/mycampus')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>MyCampus</button>
            <button onClick={()=>navigate('/events')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>Events</button>
            <button onClick={()=>navigate('/departments')} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold text-lg shadow-md  satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>Departements</button>
            {(role==='ADMIN' && isLoggedIn==='true')? <button onClick={handelLogout} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold bg-yellow-300 text-lg shadow-md  satisfy-regular hover:shadow-xl hover:bg-yellow-400 rounded-lg mr-2 border-1 hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>Logout</button>:null}      
            {( LogoutState==='true' && role!=='USER' )? <button onClick={handelLogIn} className='hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-3 font-semibold bg-yellow-300 text-lg shadow-md  satisfy-regular hover:shadow-xl hover:bg-yellow-400 rounded-lg mr-2 border-1 hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>LogIn</button>:null}

            </div>:null
            }


        </div>
    )
}

export default Header