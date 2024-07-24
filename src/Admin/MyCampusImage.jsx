import imageUpload from '../assets/imageUpload.svg'

function MyCampusType(){

return(
<div className="flex flex-row">
    <img
    
src={imageUpload}
/>
    
<form className="flex flex-col w-full justify-center ">
    <div className='border-solid border-black border-[1px] rounded-md'>
    <label className='flex flex-col text-xl font-semibold  font-sans text-slate-500 pl-3'>EventType</label>
    <div className='mr-4 '>
    <select className='w-full h-10 p-2 mt-5  rounded-lg border-slate-950'>
        <option>RECSTACY</option>
        <option>AROHAN</option>
        <option>WEB CRAZE</option>
        <option>New</option>

    </select>   
    </div>
    </div>
</form>
</div>

)

}

export default MyCampusType