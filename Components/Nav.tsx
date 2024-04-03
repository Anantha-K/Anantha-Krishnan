import Link from '@/node_modules/next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='fixed text-white w-full h-24 hidden md:flex items-center justify-center'>
      <ul className='flex space-x-12 text-xl'>
        <li><Link href='/' className='hover:text-red-500 transition-all duration-700'>Home</Link></li>
        <li><Link href='/#About' className='hover:text-red-500 transition-all duration-700'>About</Link></li>
        <li><Link href='/#Projects' className='hover:text-red-500 transition-all duration-700'>Projects</Link></li>
        <li><Link href='/Contact' className='hover:text-red-500 transition-all duration-700'>Contact</Link></li>


      </ul>
    </div>
  )
}

export default Nav