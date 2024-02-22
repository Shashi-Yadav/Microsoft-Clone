import Image from 'next/image'
import Laptop5 from '../../../public/B1.webp'
import LaptopSurface from '../../../public/B2.webp'
import XboxS from '../../../public/B3.avif'
import XboxX from '../../../public/B4.webp'
import React from 'react'
import Link from 'next/link'

const CartOne = () => {
    return (
        <div>
            <div className='px-3 xl:px-16 mb-10 grid gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4 md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto'>
                <div className='one max-w-md md:max-w-lg lg:max-w-2xl mx-auto' >
                    <Image  src={Laptop5}></Image>
                    <h1 className='text-2xl md:text-xl font-semibold my-4'>Surface for Business</h1>
                    <p className='mb-4'>No matter what you do, there’s a Surface to help you do it</p>
                    <div className='flex group'>
                        <Link className='text-[#0067b8]' href="/">Learn more</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0067b8] group-hover:translate-x-2 duration-300' height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                    </div>
                </div>
                <div className='two max-w-md  md:max-w-lg mx-auto'>
                    <Image src={LaptopSurface}></Image>
                    <h1 className='text-2xl md:text-xl font-semibold my-4'>Get Microsoft Teams for free</h1>
                    <p className='mb-4'>Online meetings, chat and shared cloud storage – all in one place.</p>
                    <div className='flex group '>
                        <Link className='text-[#0067b8]' href="/">Sign up for free</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0067b8] group-hover:translate-x-2 duration-300' height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                    </div>
                </div>
                <div className='three max-w-md  md:max-w-lg mx-auto'>
                    <Image src={XboxX}></Image>
                    <h1 className='text-2xl md:text-xl font-semibold my-4'>Windows 11 for business</h1>
                    <p className='mb-4'>Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.</p>
                    <div className='flex group'>
                        <Link className='text-[#0067b8]' href="/">Learn more</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0067b8] group-hover:translate-x-2 duration-300' height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                    </div>
                </div>
                <div className='four max-w-md md:max-w-lg mx-auto'>
                    <Image src={XboxS}></Image>
                    <h1 className='text-2xl md:text-xl font-semibold my-4'>Join the era of AI</h1>
                    <p className='mb-4'>Create, communicate, and code with the latest Microsoft AI solutions.</p>
                    <div className='flex group'>
                        <Link className='text-[#0067b8]' href="/">Explore AI solutions</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0067b8] group-hover:translate-x-2 duration-300' height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartOne


















































