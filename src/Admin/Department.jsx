import imageUpload from '../assets/imageUpload.svg'

function Department(){

return(
<div className="flex flex-row">
    <img
    
src={imageUpload}
/>
    <div className='w-full flex flex-col justify-center '>
    <form className="flex flex-col w-full justify-center ">
    <div className='border-solid border-black border-[1px] rounded-md'>
    <label className='flex flex-col text-xl font-semibold  font-mono text-slate-500 pl-3'>Event Type</label>
    <div className='mr-4 '>
    <select className='w-full h-10 p-2 mt-5  rounded-lg border-slate-950'>
        <option>CSE</option>
        <option>Chemical</option>
        <option>Mechanical</option>
        <option>ECE</option>
        <option>New</option>
    </select>   
    </div>
    </div>

    <div className='border-solid border-black mt-2 border-[1px] rounded-md'>
    <label className='flex flex-col text-xl font-semibold  font-mono text-slate-500 pl-3'>Description</label>
    <div className='mr-4 '>
    <input className='w-full h-10 p-2 mt-5  rounded-lg border-slate-950'
type="textarea"
    />
    </div>
    </div>


    <div className='border-solid border-black mt-2 border-[1px] rounded-md'>
    <label className='flex flex-col text-xl font-semibold  font-mono text-slate-500 pl-3'>UploadImage</label>
    <div className='mr-4 '>
    <input className='w-full h-10 p-2 mt-5  rounded-lg border-slate-950 bg-slate-200'
     type='file'
    />
    </div>
    </div>
    </form>
    <div className='border-solid border-black mt-2 border-[1px] rounded-md h-9 bg-yellow-300 hover:bg-yellow-200 shadow-md flex flex-col justify-center'>
    <button className=' text-xl font-mono'>Submit</button>
    </div>
    </div>
</div>

)

}

export default Department