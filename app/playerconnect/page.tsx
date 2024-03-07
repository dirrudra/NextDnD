import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='char-make'>
          <h3>
            sessions
          </h3>
          <h3>
            join sessions
          </h3>
          <Link href={"/charmaker"}>
            Next
          </Link>
        </div>
    </div>
  )
}

export default page