"use client"

import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header>
      <div className="fixed z-50 w-full flex items-center justify-center drop-shadow">
        <div className='flex w-[1000px] items-center justify-between p-4 bg-gray-100 md:rounded-b-xl md:rounded-none'>
      
         <div className="">
          <a className="pointer-events-none flex place-items-center gap-2 p-2 lg:pointer-events-auto p-0" href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer" >
          <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={22} priority={false} />
          </a>
        </div>

       <div className="flex gap-4">
         <Link href='/' className="border-b-2 border-transparent hover:border-current">top</Link>
         <Link href='/news' className="border-b-2 border-transparent hover:border-current">news</Link>
         <Link href='/about' className="border-b-2 border-transparent hover:border-current">about</Link>
         <Link href='/about/info' className="border-b-2 border-transparent hover:border-current">info</Link>
       </div>

        </div>
      </div>

    </header>
  );
}
