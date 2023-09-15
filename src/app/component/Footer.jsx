"use client"

import Image from 'next/image'

export function Footer() {
  return (
    <footer className="sticky top-full w-full bg-white h-[64px] border-t p-2 flex justify-center items-center sticky bottom-0">
      <a className='flex items-center gap-4'
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Powered by{" "}</p>
        <p className="">
          <Image src="/vercel.svg" alt="Vercel Logo" className="h-auto" width={72} height={16} />
        </p>
      </a>
    </footer>
  );
}
