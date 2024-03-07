
import Link from 'next/link'
import React from 'react'
import CompApp from '../components/CompApp'
import LoginAuth from '../components/LoginAuth'

const page = () => {
  return (

     <div>
       <h1 className='sg-title'>
         Sign up
       </h1>
       <div className='sg-lg-banner'>
         <div className='login-plate'>
           <h3>
             Login
           </h3>
           <div>
            <LoginAuth />
           </div>
         </div>
         <div className='signup-plate'>
           <h3>
             Sign up
           </h3>
           <div className='sg-content'>
             <h4>
               Set up your DnD accout today!
             </h4>
             <Link href="/select">
               Continue
             </Link>

             <CompApp />
           </div>
         </div>
       </div>
     </div>
  )
}

export default page