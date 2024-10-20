import React from 'react'
import { Button } from "@/components/ui/button"
import { UserButton } from '@clerk/nextjs'

const page = () => {
  return (
    <div>
      <UserButton afterSwitchSessionUrl='/'/>
    </div>
  )
}

export default page