'use client'
import Link from 'next/link'
import React from 'react'
const DMPage = () => {
  return (
    <div>
       <h1 className='sg-title'>
         Dmpage
       </h1>
       <div className='sg-lg-banner'>
         <div className='login-plate'>
           <h3>
             Sessions
           </h3>
           <div className='box'></div>
           <div className='box'></div>
           <div className='box'></div>
         </div>
         <div className='signup-plate'>
           <h3>
             New Sessions
           </h3>
           <Link href={"/adminpanel"}>
            Next
           </Link>
         </div>
       </div>
     </div>
  )
}

export default DMPage