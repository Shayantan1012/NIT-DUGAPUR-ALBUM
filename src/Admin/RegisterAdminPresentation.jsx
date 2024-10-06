import Header from "../Layout/Header";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"
function RegisterAdminPresentation({handelUserInput,handelFormSubmit}){

    return (
        <div className="h-fit flex flex-col">
            <section className="h-screen  bg-slate-100">
                <div className="flex col md:flex-row justify-between bg-slate-100 h-screen basis-6/12">
                    <div className="hidden md:flex items-center justify-center basis-6/12">
                        <img
                        src={logo}  
                        className="ml-6 max-h-96 max-w-96"                                
                        />
                    </div>
                    <div className=" flex  w-[50%] h-screen flex-col justify-center items-end mr-6 ">
                    <form onSubmit={handelFormSubmit} className="flex flex-col h-screen overflow-auto bg-slate-200 p-4 rounded-lg  md:w-[75%]  ">
                        <h1 className="text-2xl playwrite-de-grund-font4 font-semibold mb-4">Registration</h1>
                        <label className="text-base playwrite-de-grund-font4 font-semibold">First Name  <span className="text-red-500">*</span></label>
                        
                        <input
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700 rounded outline-noe border-xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="text"
                        placeholder="John"
                        required
                        
                        id="firstName"
                        name="firstName"
                        onChange={handelUserInput}
                        
                        />
                        <label className="text-base playwrite-de-grund-font4 font-semibold">Last Name <span className="text-red-500">*</span></label>
                        
                        <input
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700 rounded outline-noe border-xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="text"
                        placeholder="Doe"
                        required
                        
                        id="lastName"
                        name="lastName"
                        onChange={handelUserInput}
                        
                        />
                        <label className="playwrite-de-grund-font4 font-semibold">Mobile Number  <span className="text-red-500">*</span></label>
                        
                        <input
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700  border-2xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="text"
                        placeholder="91666*****"
                        required
                        minLength={10}
                        maxLength={10}
                        id="mobileNumber"
                        name="mobileNumber"
                        onChange={handelUserInput}

                        />
                        <label className="playwrite-de-grund-font4 font-semibold">Current Year<span className="text-red-500">*</span></label>
                        
                        <input
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700  border-2xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="text"
                        placeholder="2nd"
                        required
                      //  minLength={6}
                        id="CurrentYear"
                        name="CurrentYear"
                        onChange={handelUserInput}

                        />
                        <label className="playwrite-de-grund-font4 font-semibold">Roll Number  <span className="text-red-500">*</span></label>
                        
                        <input
                      //  type:text
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700  border-2xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="text"
                        placeholder="23CS8064"
                        required
                        minLength={8}
                        maxLength={8}
                        id="Roll"
                        name="Roll"
                        onChange={handelUserInput}

                        />
                        <label className="font-semibold playwrite-de-grund-font4">Reg Number  <span className="text-red-500">*</span></label>
                        
                        <input
                       // type:text
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700  border-2xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="text"
                        placeholder="23U10248"
                        required
                        minLength={8}
                        maxLength={8}
                        id="Reg"
                        name="Reg"
                        onChange={handelUserInput}

                        />
                        <label className="font-semibold playwrite-de-grund-font4">Official Email  <span className="text-red-500">*</span></label>
                        
                        <input
                      //  type:text
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700  border-2xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="text"
                        placeholder="sb23cs8064@nitdgp"
                        required
                        minLength={6}
                        id="email"
                        name="email"
                        onChange={handelUserInput}

                        />
                        <label className="playwrite-de-grund-font4 font-semibold">Password  <span className="text-red-500">*</span></label>
                        
                        <input
                       // type:text
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700  border-2xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="text"
                        placeholder="*******"
                        required
                        minLength={6}
                        id="password"
                        name="password"
                        onChange={handelUserInput}

                        />
                        
                        <button  type="submit" className="w-full px-8 py-2 mt-3 text-lg text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600 hover:text-slate-500">
                            Create Acount</button>
                            <span className="mt-3 text-xs text-gray-500">Already have an acount? <Link to="/nitdgp/admin/"className="text-yellow-500">Login</Link></span>
                            
    
                    </form>
                    </div>
                </div>
            </section>
        </div>
    )
     
     }
     

export default RegisterAdminPresentation;