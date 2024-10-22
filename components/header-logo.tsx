import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeaderLogo = () => {
  return (
    <Link href="/">
        <div className='items-center hidden lg:flex space-x-4'>
        <Image src="/logo.png" alt='logo' width={30} height={30}/>
        <Image src="/finto.png" alt='logo' width={80} height={80} className=''/>
        </div>
    </Link>
  )
}

export default HeaderLogo