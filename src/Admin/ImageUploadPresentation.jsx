import { useLocation } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

function ImageUploadPresentation(handelFormSubmit,handelUserInput){
const location =useLocation();
const type=location.state.imageType;

    return (
<div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen flex flex-col justify-between">
<Header PageType={"FinalImage"}/>
<div className="flex flex-row">
<div className=" w-full h-full pl-5 mt-7 basis-6/12">
<div    className=" transition ease-in-out delay-150   w-[350px] h-[350px] border-2 shadow-xl  hover:shadow-none border-gray-500 rounded-md flex flex-col justify-end items-center" >
      <div className='flex flex-col justify-center items-center w-full h-full'><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" className =" hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" width="50px" fill="#5f6368"><path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z"/></svg> 
      </div>
    <div className=' w-[90%] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... bg-slate-50  rounded-md pb-5 shadow-md flex flex-row justify-center item-center bg-cyan-50 '>
      <h1 className='font-bold text-2xl  playwrite-de-grund-font2  text-transparent bg-gradient-to-l from-orange-200 to-cyan-500  transition bg-clip-text font-bold'>Add Image</h1>
    </div>
</div>

</div>
<div className="basis-6/12 pr-4 mr-5 flex flex-col  items-start">
<span className="satisfy-regular text-2xl mb-3"> Name of Event </span> 
<input
        type='text'
        required
        minLength={5}
        maxLength={20}
        name='productName'
        id='productName'
        placeholder='Give the Name '
      //  onChange={}
        className='w-full h-[50px]  border border-gray-300  rounded-lg focus:border-indigo-500 sm:text-sm'
        />  

<span className="satisfy-regular text-2xl mb-3 mt-4"> Description of the Event </span> 
<textarea
    required
    name="eventDescription"
    id="eventDescription"
    placeholder="Provide a description of the event"
    className="w-full h-[100px] border border-gray-300 rounded-lg focus:border-indigo-500 sm:text-sm"
  />
</div>
</div>
<Footer/>
</div>
)
}
    


export default ImageUploadPresentation