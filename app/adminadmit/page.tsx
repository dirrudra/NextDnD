import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h3>
            admin admit 
        </h3>
        <div className='gameroom'>
            <Link href={"/gameroom"}>
                Next
            </Link>
        </div>
    </div>
  )
}

export default page
