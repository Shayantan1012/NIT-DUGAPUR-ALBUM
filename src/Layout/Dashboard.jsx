import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate=useNavigate();
    //Hello
    return (
        <div className="h-full bg-gradient-to-r  from-purple-500 to-pink-500 rounded-lg">
        
            <nav className="mt-2">
                <div className="flex-col justify-center">
                    <a href="#" className="flex px-6 py-3 mt-3 items-center shadow-md rounded-lg  hover:shadow-lg">
                        <button onClick={()=>navigate('/mycampus')} className="text-gray-200 hover:text-gray-700 text-2xl satisfy-regular font-bold mx-3">My Campus</button>
                    </a> 
                    <a href="#" className="flex px-6 py-3 mt-3 items-center shadow-md rounded-lg  hover:shadow-lg">
                        <button onClick={()=>navigate('/events')} className="text-gray-200 hover:text-gray-700 text-2xl satisfy-regular mx-3">Events</button>
                    </a> 
                    <a href="#" className="flex px-6 py-3 mt-3 items-center shadow-md rounded-lg  hover:shadow-lg">
                        <button onClick={()=>navigate('/departments')} className="text-gray-200 hover:text-gray-700 satisfy-regular text-2xl mx-3">Departments</button>
                    </a> 
                    <a href="#" className="flex px-6 py-3 mt-3 items-center shadow-md rounded-lg hover:shadow-lg">
                        <button onClick={()=>navigate('/aboutUs')} className="text-gray-200 hover:text-gray-700 satisfy-regular text-2xl mx-3">About Us</button>
                    </a> 
                </div>
            </nav>
        </div>
    );
}

export default Dashboard;
