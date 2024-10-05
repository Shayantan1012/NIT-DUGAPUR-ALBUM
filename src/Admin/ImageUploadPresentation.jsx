import { useNavigate } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

function ImageUploadPresentation({handelFormSubmit,handelUserInput,handleImageChange,preViewImage,type,name}){
const navigate=useNavigate();
    return (
<div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen flex flex-col justify-between">
<Header PageType={"ImageUpload"}/>
<div className="flex flex-row">

<div className=" w-full h-full pl-5 mt-7 basis-6/12">
{
preViewImage?
<div    className=" transition ease-in-out delay-150   w-[350px] h-[350px]  shadow-xl  hover:shadow-none  rounded-md flex flex-col justify-end items-center" >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <img
        src={preViewImage}
        className="w-[350px] h-[350px] rounded-xl mr-5 ml-5"
  />  
      </div>
    <div className=' w-[100%] transition ease-in-out delay-150 mt-1 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... bg-slate-50  rounded-md pb-5 shadow-md flex flex-row justify-center item-center bg-cyan-50 '>
      <label  htmlFor="imageUpload" className='font-bold text-2xl  playwrite-de-grund-font2  text-transparent bg-gradient-to-l from-orange-200 to-cyan-500  transition bg-clip-text font-bold'>Change Image</label>
        <input
          type="file"
          id="imageUpload"
          accept=".jpg, .jpeg, .png"
          className="hidden"
          onChange={handleImageChange}
        />   
    </div>
</div>

 :
<div    className=" transition ease-in-out delay-150   w-[350px] h-[350px] border-2 shadow-xl  hover:shadow-none border-gray-500 rounded-md flex flex-col justify-end items-center" >
      <div className='flex flex-col justify-center items-center w-full h-full'><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" className =" hover:opacity-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" width="50px" fill="#5f6368"><path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z"/></svg> 
      </div>
    <div className=' w-[90%] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... bg-slate-50  rounded-md pb-5 shadow-md flex flex-row justify-center item-center bg-cyan-50 '>
      <label  htmlFor="imageUpload" className='font-bold text-2xl  playwrite-de-grund-font2  text-transparent bg-gradient-to-l from-orange-200 to-cyan-500  transition bg-clip-text font-bold'>Add Image</label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />   
    </div>
</div>
  }
</div>

  
<div className="basis-6/12 pr-4 mr-5 flex flex-col  items-start">

<form onSubmit={handelFormSubmit}>
 {
 !name ? 
 <div>
  <span className="satisfy-regular text-2xl mb-3"> {(type==='EVENT')?"Name of the Event":(type==='CAMPUS')?"Name of the Place":"Name of the Department"} </span> 
  <input
          type='text'
          required
          minLength={5}
          maxLength={20}
          name='ImageName'
          id='ImageName'
          placeholder='Give the Name '
          onChange={handelUserInput}
  
          className='w-full h-[50px]  border border-gray-300  rounded-lg focus:border-indigo-500 sm:text-sm'
          />  
 </div>:null
  
}

<span className="satisfy-regular text-2xl mb-3 mt-4">{(type==='EVENT')?"Description of the Event":(type==='CAMPUS')?"Description of the Place":"Description of the Department"}</span> 
<textarea
    required
    name="ImageDescription"
    id="ImageDescription"
    placeholder="Provide a description of the event"
    className="w-full h-[100px] border border-gray-300 rounded-lg focus:border-indigo-500 sm:text-sm"
    onChange={handelUserInput}
  />
  
<button  type="submit"  className="w-full h-[50px] rounded-lg border-zinc-950 bg-orange-300 mt-[10px] satisfy-regular text-xl hover:bg-orange-400 delay-150 transition ease-in-out delay-150 hover:-translate-y-1">Submit</button>

</form>



</div>
</div>
<Footer/>
</div>
)
}
    


export default ImageUploadPresentation