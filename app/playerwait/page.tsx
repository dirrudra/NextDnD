import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h3>
            Player wait
        </h3>
        <div className='game'>
            <Link href={"/gameroom"}>
                Next
            </Link>
        </div>
    </div>
  )
}

export default page
