import logo from '../assets/logo.webp'

function Header(){


    return (
        <div className="flex flex-row justify-between bg-" >
            <span className="p-3 font-semibold "> 
           <img
           className='w-[60px] h-[60px]'
           src={logo}
           />
            </span>
            <div className="p-3 flex items-center">
            <span className="p-3 font-semibold">About </span>
            <span className="p-3 font-semibold">My Collage </span>
            <span className="p-3 font-semibold">Events</span>

            </div>

        </div>
    )
}

export default Header