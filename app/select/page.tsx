'use client'

import React from 'react'
import Link from 'next/link';

function page() {
    return (
        <div>
       <h1 className='sg-title'>
         Select
       </h1>
       <div className='dm-pl-banner'>
         <div className='dm-plate'>
           <Link href={"/dmpage"}>
            <h3>
                Dungeon master
            </h3>
           </Link>
         </div>
         <div className='pl-plate'>
            <Link href={"/playerconnect"}>
                <h3>
                    Player
                </h3>
            </Link>

         </div>
       </div>
     </div>
    );
}

export default page