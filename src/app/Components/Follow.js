'use client'
import Image from 'next/image'
import Facebook from '../../../public/Facebook.avif'
import X from '../../../public/x.webp'
import Youtube from '../../../public/YouTube.webp'
import React from 'react'
import Link from 'next/link'

import { useEffect, useState } from 'react';

const Follow = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the value (e.g., 200) to determine when the link becomes sticky
      setIsSticky(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='px-3 xl:px-16 md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto '>
        <div className='flex justify-start space-x-2 sm:space-x-5 items-center mt-20 px-2'>
            <h1>Follow Microsoft</h1>
            <Image className='w-8 ' src={Facebook}></Image>
            <Image className='w-8 ' src={X}></Image>
            <Image className='w-8 ' src={Youtube}></Image>

        </div>
        <div className={`flex pt-10 px-2 justify-end ${isSticky ? 'sticky top-0' : ''}`}>
            <Link href='#Top' className='bg-gray-200 px-6 py-3 mb-20' >Back to Top</Link>
        </div>

    </div>
  )
}

export default Follow