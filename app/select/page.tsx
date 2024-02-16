'use client'

import React from 'react'
import Link from 'next/Link';
import next from 'next';

const page = () => {
  return (
    <div>
        <div className='dm-pl-banner'>
            <div className='dm-plate'>
                <Link href="/dmpage">    
                    <h3>
                        Dungeon Master
                    </h3>
                </Link>
            </div>
            <div className='pl-plate'>
                
                    <h3>
                        Player
                    </h3>
            </div>
        </div>
    </div>
  )
}

export default page