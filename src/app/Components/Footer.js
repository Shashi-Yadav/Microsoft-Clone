import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#f2f2f2]'>
            <div className='px-3 xl:px-16 grid md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto py-10 gap-x-10 max-[420px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 ' >
                <div className='grid grid-flow-row object-none gap-y-3 md:gap-x-3 mb-10 '>
                    <Link href="/" className='object-none'>What's new</Link>
                    <Link className="text-[0.77rem] text-gray-700 object-none" href="/">Microsoft 365</Link>
                    <Link className="text-[0.77rem] text-gray-700 object-none" href="/">Games</Link>
                    <Link className="text-[0.77rem] text-gray-700 object-none" href="/">Surface Pro 9</Link>
                    <Link className="text-[0.77rem] text-gray-700 object-none" href="/">Surface Laptop 5</Link>
                    <Link className="text-[0.77rem] text-gray-700 object-none" href="/">Surface Laptop Go 2</Link>
                    <Link className="text-[0.77rem] text-gray-700 object-none" href="/">Windows 11 apps</Link>
                </div>
                <div className='grid grid-flow-row gap-y-3 md:gap-x-3 mb-10'>
                    <Link href="/">Microsoft Store</Link>
                    <Link className="text-[0.77rem] text-gray-700 object-none" href="/">Account profile</Link>
                    <Link className="text-[0.77rem] text-gray-700 object-none" href="/">Download Center</Link>
                    <Link className="text-[0.77rem] text-gray-700 object-none" href="/">Microsoft Store Support</Link>
                    <Link className="text-[0.77rem] text-gray-700 object-none" href="/">Returns</Link>
                    <Link className="text-[0.77rem] text-gray-700 object-none" href="/">Order tracking</Link>

                </div>
                <div className='grid grid-flow-row gap-y-3 md:gap-x-3 mb-10'>
                    <Link href="/">Education</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Microsoft in education</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Devices for education</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Microsoft Teams for Education</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Microsoft 365 Education</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Office Education</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Educator training and development</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Deals for students and parents</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Azure for students</Link>
                </div>
                <div className='grid grid-flow-row gap-y-3 md:gap-x-3 mb-10'>
                    <Link href="/">Business</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Microsoft Cloud</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Microsoft Security</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Azure</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Dynamics 365</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Microsoft 365</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Microsoft Advertising</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Microsoft Industry</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Microsoft Teams</Link>
                </div>
                <div className='grid grid-flow-row gap-y-3 md:gap-x-3 mb-10'>
                    <Link href="/">Developer & IT</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Developer Center</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Documentation</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Microsoft Learn</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Microsoft Tech Community</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Azure Marketplace</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">AppSource</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Microsoft Power Platform</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Visual Studio</Link>
                </div>
                <div className='grid grid-flow-row gap-y-3 md:gap-x-3 mb-10'>
                    <Link href="/">Company</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Careers</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">About Microsoft</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Company news</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Privacy at Microsoft</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Investors</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Security</Link>
                    <Link className="text-[0.77rem] text-gray-700" href="/">Sustainability</Link>
                </div>
            </div>
            <div className='px-3 xl:px-16 md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto '>
                <div className='mb-2'>
                <div className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" height="24"  fill='gray' viewBox="0 -960 960 960" width="24"><path d="M480.174-132Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828-552.348 828-480.174q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132ZM480-160q134 0 227-93t93-227v-14q0-7-1-14-2 26-19.5 43T736-448H628q-26.4 0-45.2-18.76-18.8-18.759-18.8-45.103v-31.931H436v-63.863Q436-634 454.8-653q18.8-19 45.2-19h32v-40q0-31 21-47.5t50-16.5q-29-12-59.587-18-30.588-6-63.413-6-134 0-227 93t-93 227v15q0 7 1 15h173q54 0 91 37t37 90.547V-290h-96v109q26 10 55 15.5t59 5.5Z"/></svg>
                    <Link className='text-[0.77rem] text-gray-700' href='/'>English (India)</Link>
                    </div>
                    <Link className='text-[0.77rem] text-gray-700 ' href='/'>Your Privacy Choices</Link>
                </div>
                <div className='flex gap-x-4 justify-end flex-wrap pb-3'>
                    <Link className='text-[0.77rem] text-gray-700' href='/'>Contact Microsoft</Link>
                    <Link className='text-[0.77rem] text-gray-700' href='/'>Privacy </Link>
                    <Link className='text-[0.77rem] text-gray-700' href='/'>Terms of use </Link>
                    <Link className='text-[0.77rem] text-gray-700' href='/'>Trademarks </Link>
                    <Link className='text-[0.77rem] text-gray-700' href='/'>About our ads</Link>
                    <Link className='text-[0.77rem] text-gray-700' href='/'>© Microsoft 2024</Link>
                </div>

            </div>
        </div>
    )
}

export default Footer