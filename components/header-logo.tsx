import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeaderLogo = () => {
  return (
    <Link href="/">
        <div className='items-center hidden lg:flex'>
            <Image src="/logoFull.png" alt='logo' width={100} height={100}/>
        </div>
    </Link>
  )
}

export default HeaderLogo