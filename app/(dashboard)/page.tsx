import React from 'react'
import { UserButton } from '@clerk/nextjs'

const page = () => {
  return (
    <div>
      <UserButton afterSwitchSessionUrl='/'/>
    </div>
  )
}

export default page