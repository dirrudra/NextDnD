import React from 'react'
'use client'
import Link from 'next';
const Player = () => {
  return (

    <div>
        <div>
            <h1>
                Player page
            </h1>
        </div>
        <div className='container'>
            <div className='invite-plate'>
                <a>
                    <h3>
                        Invite link?
                    </h3>
                </a>
            </div>
            <div className='char-plate'>
                <a>
                    <h3>
                        Character Setup
                    </h3>
                </a>
            </div>
        </div>
        <div className='footer'>
            <h3>
                Previous
            </h3>
        </div>
    </div>
  )
}

export default Player