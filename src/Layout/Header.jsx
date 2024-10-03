import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.webp'
function Header({PageType}){
const navigate=useNavigate();
    return (
        <div className="flex pb-2 flex-row justify-between items-center bg-gradient-to-r from-purple-500 to-pink-500 ">
            <span className="p-3 font-semibold  shadow-md rounded-lg   "> 
           <img
           className='w-[60px] h-[60px]'
           src={logo}
           />
            </span>
            {PageType=='MyCampus'?
            <div className="p-3 flex items-center justify-between">
            <button onClick={()=>navigate('/')} className='p-3 font-semibold text-lg shadow-md satisfy-regular text-2xl hover:shadow-lg rounded-lg mr-2 border-1'>Home</button>
            <button onClick={()=>navigate('/events')} className='p-3 font-semibold text-lg shadow-md satisfy-regular text-2xl hover:shadow-lg rounded-lg mr-2'>Events</button>
            <button onClick={()=>navigate('/departments')} className='p-3 font-semibold text-lg shadow-md  satisfy-regular text-2xl hover:shadow-lg rounded-lg mr-2 border-1'>Departments</button>

            </div>:null
            }
            {PageType=='Events'?
            <div className="p-3 flex items-center justify-between">
            <button onClick={()=>navigate('/')} className='p-3 font-semibold text-lg shadow-md font-mono hover:shadow-lg rounded-lg mr-2 satisfy-regular text-2xl border-1'>Home</button>
            <button onClick={()=>navigate('/mycampus')} className='p-3 font-semibold text-lg shadow-md  font-mono hover:shadow-lg  satisfy-regular text-2xl rounded-lg mr-2 border-1'>MyCampus</button>
            <button onClick={()=>navigate('/departments')} className='p-3 font-semibold text-lg shadow-md  font-mono hover:shadow-lg satisfy-regular text-2xl rounded-lg mr-2 border-1'>Departments</button>

            </div>:null
            }
            {
                PageType=='Home'?
                <h1 className='w-full h-full flex flex-col justify-center items-center text-6xl 
                font-extrabold italic font-mono uppercase text-transparent   bg-gradient-to-r from-slate-50 to-slate-500 bg-clip-text  merienda-font3' > Campus Chronicles</h1>
                :null
            }

            {PageType=='FinalImage'?
            <div className="p-3 flex items-center justify-between">
            <button onClick={()=>navigate('/')} className='p-3 font-semibold text-lg shadow-md satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>Home</button>
            <button onClick={()=>navigate('/mycampus')} className='p-3 font-semibold text-lg shadow-md  satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>MyCampus</button>
            <button onClick={()=>navigate('/events')} className='p-3 font-semibold text-lg shadow-md  satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>Events</button>
            <button onClick={()=>navigate('/departments')} className='p-3 font-semibold text-lg shadow-md  satisfy-regular hover:shadow-lg rounded-lg mr-2 border-1'>Departements</button>
            </div>:null
            }
            {PageType=='Departments'?
            <div className="p-3 flex items-center justify-between">
            <button onClick={()=>navigate('/')} className='p-3 font-semibold text-lg shadow-md satisfy-regular text-2xl hover:shadow-lg rounded-lg mr-2 border-1'>Home</button>
            <button onClick={()=>navigate('/mycampus')} className='p-3 font-semibold text-lg shadow-md  satisfy-regular text-2xl hover:shadow-lg rounded-lg mr-2 border-1'>MyCampus</button>
            <button onClick={()=>navigate('/events')} className='p-3 font-semibold text-lg shadow-md  satisfy-regular text-2xl hover:shadow-lg rounded-lg mr-2 border-1'>Events</button>

            </div>:null
            }

        </div>
    )
}

export default Header