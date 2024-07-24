import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate=useNavigate();
    return (
        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
        
            <nav className="mt-2">
                <div className="flex-col justify-center">
                    <a href="#" className="flex px-6 py-3 mt-3 items-center shadow-md rounded-lg  hover:shadow-lg">
                        <button onClick={()=>navigate('/mycampus')} className="text-gray-200 hover:text-gray-700 text-xl mx-3">My Campus</button>
                    </a> 
                    <a href="#" className="flex px-6 py-3 mt-3 items-center shadow-md rounded-lg  hover:shadow-lg">
                        <button onClick={()=>navigate('/events')} className="text-gray-200 hover:text-gray-700 text-xl mx-3">Events</button>
                    </a> 
                    <a href="#" className="flex px-6 py-3 mt-3 items-center shadow-md rounded-lg  hover:shadow-lg">
                        <button onClick={()=>navigate('/events')} className="text-gray-200 hover:text-gray-700 text-xl mx-3">Departments</button>
                    </a> 
                    <a href="#" className="flex px-6 py-3 mt-3 items-center shadow-md rounded-lg hover:shadow-lg">
                        <button  className="text-gray-200 hover:text-gray-700 text-xl mx-3">About</button>
                    </a> 
                </div>
            </nav>
        </div>
    );
}

export default Dashboard;
