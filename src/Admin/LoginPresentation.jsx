import { Link } from "react-router-dom";
import Login from '../assets/LoginSvg.svg'
function LoginPresentation({handelUserInput,handelFormSubmit}){

    return (
        <div>
            <section >
                <div className="flex flex-col  justif-center md:flex-row justify-between bg-slate-100 h-screen">
                    <div className="hidden md:flex  basis-[70%] items-center  justify-center">
                        <img src={Login}/>
                      </div>
                      
                    <div className=" flex ml-5 p-4 w-full  basis-full items-center flex-col md:basis-[35%] justify-center items-end mr-6 ">
                    <form className="flex flex-col w-[75%] bg-slate-200 p-6 rounded-lg h-[95%] md:w-full  ">
                        <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
                        <label className="font-semibold">Registration No  <span className="text-red-500">*</span></label>
                        
                        <input
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700  border-2xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="text"
                        placeholder="23U10248"
                        required
                        minLength={8}
                        maxLength={8}
                        id="regNo"
                        name="regNo"
                        onChange={handelUserInput}
                        />
                        <label className="font-semibold">Password  <span className="text-red-500">*</span></label>
                        
                        <input
                        type:text
                        className="w-full p-6 rounded-md h-9 mt-2 text-grey-700  border-2xl border-solid border-slate-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
                        type="text"
                        placeholder="*******"
                        required
                        minLength={6}
                        id="password"
                        name="password"
                        onChange={handelUserInput}
                        />
                        <button onClick={handelFormSubmit} className="w-full px-8 py-2 mt-3 text-lg text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600 hover:text-slate-500">
                            Sign In</button>
                            
    
                    </form>
                    </div>
                </div>
            </section>
        </div>
    )

}
export default LoginPresentation;