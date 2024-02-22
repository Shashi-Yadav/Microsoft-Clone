import Image from 'next/image'
import Laptop5 from '../../../public/1.avif'
import LaptopSurface from '../../../public/2.jpeg'
import XboxX from '../../../public/3.jpeg'
import XboxS from '../../../public/4.jpeg'
import React from 'react'
import Link from 'next/link'

const CartOne = () => {
    return (
        <div>
            <div className='px-3 xl:px-16 mb-10 grid gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4 md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto'>
                <div className='one max-w-md md:max-w-lg lg:max-w-2xl mx-auto' >
                    <Image  src={Laptop5}></Image>
                    <h1 className='text-2xl md:text-xl font-semibold my-4'>Surface Laptop 5</h1>
                    <p className='mb-4'>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.</p>
                    <div className='flex group'>
                        <Link className='text-[#0067b8]' href="/">Learn more</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0067b8] group-hover:translate-x-2 duration-300' height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                    </div>
                </div>
                <div className='two max-w-md  md:max-w-lg mx-auto'>
                    <Image src={LaptopSurface}></Image>
                    <h1 className='text-2xl md:text-xl font-semibold my-4'>Surface Laptop Studio</h1>
                    <p className='mb-4'>Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.</p>
                    <div className='flex group '>
                        <Link className='text-[#0067b8]' href="/">Learn more</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0067b8] group-hover:translate-x-2 duration-300' height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                    </div>
                </div>
                <div className='three max-w-md  md:max-w-lg mx-auto'>
                    <Image src={XboxX}></Image>
                    <h1 className='text-2xl md:text-xl font-semibold my-4'>Surface Laptop Studio</h1>
                    <p className='mb-4'>The fastest, most powerful Xbox ever.</p>
                    <div className='flex group'>
                        <Link className='text-[#0067b8]' href="/">Shop Xbox Series X</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0067b8] group-hover:translate-x-2 duration-300' height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                    </div>
                </div>
                <div className='four max-w-md md:max-w-lg mx-auto'>
                    <Image src={XboxS}></Image>
                    <h1 className='text-2xl md:text-xl font-semibold my-4'>Xbox Series X</h1>
                    <p className='mb-4'>Next-gen performance in the smallest Xbox ever.</p>
                    <div className='flex group'>
                        <Link className='text-[#0067b8]' href="/">Shop Xbox Series S</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0067b8] group-hover:translate-x-2 duration-300' height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartOne



















































// import Image from 'next/image'
// import Laptop5 from '../../../public/surface5.webp'
// import LaptopSurface from '../../../public/SurfaceStudio.webp'
// import XboxX from '../../../public/XboxX.webp'
// import XboxS from '../../../public/XboxS.webp'
// import React from 'react'
// import Link from 'next/link'

// const CartOne = () => {
//     return (
//         <div>
//             <div className='md:grid md:grid-cols-2 md:mt-10 justify-center mx-auto md:gap-x-10 px-2'>
//                 <div className='w-80 mx-auto my-8 md:mx-0 md:my-0 cursor-pointer'>
//                 <Image className="w-80 h-48" src={Laptop5}></Image>
//                 <h1 className='text-2xl font-semibold my-4'>Surface Laptop 5</h1>
//                 <p className='mb-4'>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.</p>
//                 <div className='flex group'>
//                 <Link className='text-[#0067b8]' href="/">Learn more</Link>
//                 <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0067b8] group-hover:translate-x-2 duration-300' height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
//                 </div>
//                 </div>

//                 <div className='w-80 mx-auto my-8 md:mx-0 md:my-0 cursor-pointer'>
//                 <Image className="w-80 h-48" src={LaptopSurface}></Image>
//                 <h1 className='text-2xl font-semibold my-4'>Surface Laptop Studio</h1>
//                 <p className='mb-4'>Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.</p>
//                 <div className='flex group'>
//                 <Link className='text-[#0067b8]' href="/">Learn more</Link>
//                 <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0067b8] group-hover:translate-x-2 duration-300' height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
//                 </div>
//                 </div>

//                 <div className='w-80 mx-auto my-8 md:mx-0 md:my-0 cursor-pointer'>
//                 <Image className="w-80 h-48" src={XboxX}></Image>
//                 <h1 className='text-2xl font-semibold my-4'>Xbox Series X</h1>
//                 <p className='mb-4'>The fastest, most powerful Xbox ever.</p>
//                 <div className='flex group'>
//                 <Link className='text-[#0067b8]' href="/">Shop Xbox Series X</Link>
//                 <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0067b8] group-hover:translate-x-2 duration-300' height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
//                 </div>
//                 </div>

//                 <div className='w-80 mx-auto my-8 md:mx-0 md:my-0 cursor-pointer'>
//                 <Image className="w-80 h-48" src={XboxS}></Image>
//                 <h1 className='text-2xl font-semibold my-4'>Xbox Series S</h1>
//                 <p className='mb-4'>Next-gen performance in the smallest Xbox ever.</p>
//                 <div className='flex group'>
//                 <Link className='text-[#0067b8]' href="/">Shop Xbox Series S</Link>
//                 <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#0067b8] group-hover:translate-x-2 duration-300' height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CartOne