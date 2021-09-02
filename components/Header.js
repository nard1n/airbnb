import React from 'react';
import Image from "next/image";
import { 
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    MenuIcon,
 } from '@heroicons/react/solid';

function Header() {
    return (
        <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image 
                    src="https://links.papareact.com/qd3"
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            {/* Middle */}
            <div className="flex item-center md:border-2 md:shadow-sm rounded-full py-2">
                <input className=" flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400" type="text" placeholder="Start your search" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2" />
            </div>
            {/* Right */}
            <div className="flex items-center justify-end text-gray-500 space-x-4">
                <p>Become a host</p>
                <GlobeAltIcon className="h-6" />
            </div>
        </div>
    )
}

export default Header
