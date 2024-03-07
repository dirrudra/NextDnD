import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <h3>
          Character maker
        </h3>
      </div>
      <div className='player-card'>
        <Link href={"/playercard"}>
          <h3>
            Next
          </h3>
        </Link>
      </div>
    </div>
  )
}

export default page
