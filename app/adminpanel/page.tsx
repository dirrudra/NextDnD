import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h3>
        admin panel
      </h3>
      <div className='admit'>
        <Link href={"/adminadmit"}>
          Next
        </Link>
      </div>
    </div>
  )
}

export default page
