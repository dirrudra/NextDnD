import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        Character Icon
      </div>
      <div>
        Skill,ability,Main
      </div>
      <div className='C'>
        <Link href={"/playerwait"}>
          Next
        </Link>
      </div>
    </div>
  )
}

export default page
