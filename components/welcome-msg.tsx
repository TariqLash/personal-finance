"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs'

export default function WelcomeMsg() {
    const {user, isLoaded} = useUser();
  return (
    <div>
        <h2 className='text-2xl lg:text-4xl text-white font-medium'>
            Welcome Back{isLoaded ? ", " : " "}{user?.firstName}
            </h2>
        <p className='text-sm lg:text-base text-[#} mb-3'>
            This is your financial overview Report
        </p>
    </div>
  )
}
