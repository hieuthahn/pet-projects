import Navbar from '@/components/nav/navbar'
import React from 'react'



const BaseLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default BaseLayout
