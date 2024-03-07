'use client'

import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="main-page">
        <div className="mp-title">
          <h1>
            Hello Dungeoneers
          </h1>
        </div>
        
        <div className="forwarder">
          <Link href="/signup">Sign up | Login</Link>
        </div>
      </div>
    </main>
  );
}
