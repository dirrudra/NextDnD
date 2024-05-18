
import Link from 'next/link'
import React from 'react'
import LoginForm from '../components/LoginForm';
import Loginform2 from '../components/Loginform2';
import SignUpForm from '../components/SignUpForm';
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
          {/* <p>
            Login to your account!
          </p> */}
          <Loginform2 />

        </div>
        <div className='signup-plate'>
          <h3>
            Sign up
          </h3>
          <div className='sg-content'>
            <h4 className='py-2'>
              Set up your DnD accout today!
            </h4>
            <div>
              <SignUpForm />
            </div>
            {/* <Link href="/select">
              Continue
            </Link> */}
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default page