import Image from "next/dist/client/image"
import logo from "../images/rentulo.png"
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, DesktopComputerIcon, DeviceMobileIcon, CameraIcon, TruckIcon, HomeIcon, MusicNoteIcon} from '@heroicons/react/solid'
import Link from "next/dist/client/link"

function Header() {
  const handleSearch = () => {
    console.log('Searching')
  }
  return (
    <>
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 md:px-10">
        {/* Left | Logo holder */}
        <div className="relative flex items-center h-10 cursor-pointer">
           <Image 
           src={logo}
           layout='fill'
           objectFit="contain"
           objectPosition="left"
           />
        </div>
        
        {/* Middle | Search holder */}

        <div 
        className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
          <input 
          type='text' 
          placeholder="search" 
          className="px-5 bg-transparent outline-none flex-grow"/>
          <Link href={'./search/searchList'}>
            <SearchIcon
            className="h-8 cursor-pointer bg-yellow-500 text-white rounded-full p-2 hidden md:inline-flex mr-2"/>
        </Link>
       
        </div>

        {/* Right */}
        <div 
        className="flex space-x-4 items-center justify-end ">
          <p className="hidden md:inline">Satıcı Ol</p>
          <GlobeAltIcon className="h-6 text-neutral-800 cursor-pointe "/>

          <div className="flex items-center border-2 p-2 rounded-full space-x-2">
            <MenuIcon className="h-6 text-neutral-800 cursor-pointer"/>
            <UserCircleIcon className="h-6 text-neutral-800 cursor-pointer"/>
          </div>
        </div>
    </header>
    <nav class="flex items-center justify-between flex-wrap p-6 shadow-sm bg-gray-100 ">
    <div class=" block flex-grow lg:flex lg:items-center px-10">
      <div class="text-lg text-center lg:flex-grow navholder">
        <a href="#responsive-header" class=" mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-10 font-bold">
          Real State
        </a>
        <a href="#responsive-header" class=" mt-4 lg:inline-block lg:mt-0 text-gray-700 font-bold mr-10">
        Vehicles
        </a>
        <a href="#responsive-header" class=" mt-4 lg:inline-block lg:mt-0 text-gray-700 font-bold ">
        Techenology
        </a>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Header