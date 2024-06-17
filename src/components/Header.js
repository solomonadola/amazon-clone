import React from 'react'
import Image from "next/image"
import {MenuIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline'

function Header() {
  return (
    <header>

      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        {/* logo */}
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image src="/images/Amazon_logo.png"
            height={40}
            width={150}
            objectFit='contain'
            className='cursor-pointer'
            />
        </div>
        {/* search */}
        <div className="hidden sm:flex items-center rounded-md flex-grow cursor-pointer bg-yellow-400 h-10 hover:bg-yellow-500">
          <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none'/>
          <SearchIcon className='h-12 p-4'/>
        </div>
        {/* right */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6'>
          <div>
            <p>Hello sol</p>
            <p>Account  & Lists</p>
          </div>
          <div>
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <div>
            <ShoppingCartIcon className='h-10'/>
            <p>Basket</p>
          </div>
        </div>


      </div>
      <div></div>
    </header>
  )
}

export default Header
