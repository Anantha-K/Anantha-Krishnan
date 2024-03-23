import Link from '@/node_modules/next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='bg-red-500 w-full h-16 hidden md:flex items-center justify-center'>
      <ul className='flex space-x-5'>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/'>About</Link></li>
        <li><Link href='/'>Projects</Link></li>
        <li><Link href='/Contact'>Contact</Link></li>


      </ul>
    </div>
  )
}

export default Nav