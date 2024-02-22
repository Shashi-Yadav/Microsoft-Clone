import Image from 'next/image'
import React from 'react'
import Devices from '@/../../public/SurfaceDevices.svg'
import Xbox from '@/../../public/Xbox.svg'
import Micro from '@/../../public/Microsoft-365.svg'


const Promo = () => {
  return (
    <div className=' start px-3 xl:px-16 md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl md:mx-auto'>
      <div className='normal min-[405px]:hidden min-[926px]:flex min-[926px]:space-x-10 justify-center min-[926px]:max-w-screen-lg mx-auto'>
        <div className='items-center'>
          <Image className='mx-auto max-w-10 mb-2' src={Micro}></Image>
          <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Choose your Microsoft 365</p>
        </div>
        <div className='items-center'>
          <Image className='mx-auto max-w-10 mb-2' src={Xbox}></Image>
          <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Shop Xbox games and consoles</p>
        </div>
        <div className='items-center'>
          <Image className='mx-auto max-w-10 mb-2' src={Micro}></Image>
          <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Get Windows 11</p>
        </div>
        <div className='items-center'>
          <Image className='mx-auto max-w-10 mb-2' src={Devices}></Image>
          <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Explore Surface devices</p>
        </div>

      </div>

      <div className='third  max-[464px]:hidden min-[464px]:grid min-[545px]:hidden'>
        <div className='items-center'>
          <Image className='mx-auto max-w-10 mb-2' src={Micro}></Image>
          <p className='text-center  underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Choose your Microsoft 365</p>
        </div>
        <div className='flex space-x-10 max-w-screen-sm justify-center'>
          <div className='items-center'>
            <Image className='mx-auto max-w-10 mb-2' src={Xbox}></Image>
            <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Shop Xbox games and consoles</p>
          </div>

          <div className='items-center'>
            <Image className='mx-auto max-w-10 mb-2' src={Micro}></Image>
            <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Get Windows 11</p>
          </div>
        </div>

        <div className='items-center'>
          <Image className='mx-auto max-w-10 mb-2' src={Devices}></Image>
          <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Explore Surface devices</p>
        </div>
      </div>


      <div className='second max-[405px]:hidden min-[464px]:hidden'>
        <div className='items-center'>
          <Image className='mx-auto max-w-10 mb-2' src={Micro}></Image>
          <p className='text-center  underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Choose your Microsoft 365</p>
        </div>
        <div className='items-center'>
          <Image className='mx-auto max-w-10 mb-2' src={Xbox}></Image>
          <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Shop Xbox games and consoles</p>
        </div>
        <div className='min-[405px]:flex justify-center max-w-screen-sm space-x-10'>
          <div className='items-center'>
            <Image className='mx-auto max-w-10 mb-2' src={Micro}></Image>
            <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Get Windows 11</p>
          </div>
          <div className='items-center'>
            <Image className='mx-auto max-w-10 mb-2' src={Devices}></Image>
            <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Explore Surface devices</p>
          </div>
        </div>
      </div>



      <div className='forth max-[545px]:hidden min-[545px]:grid min-[709px]:hidden'>
        <div className='flex space-x-10 max-w-screen-sm justify-center items-center'>
          <div className='items-center'>
            <Image className='mx-auto max-w-10 mb-2 ' src={Micro}></Image>
            <p className='text-center  underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Choose your Microsoft 365</p>
          </div>
          <div className='items-center'>
            <Image className='mx-auto max-w-10 mb-2' src={Xbox}></Image>
            <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Shop Xbox games and consoles</p>
          </div>
        </div>
        <div className='flex space-x-10 max-w-screen-sm justify-center items-center'>
          <div className='items-center'>
            <Image className='mx-auto max-w-10 mb-2' src={Micro}></Image>
            <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Get Windows 11</p>
          </div>
          <div className='items-center'>
            <Image className='mx-auto max-w-10 mb-2' src={Devices}></Image>
            <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Explore Surface devices</p>
          </div>
        </div>
      </div>


      <div className='fifth  max-[709px]:hidden min-[709px]:grid min-[926px]:hidden '>
        <div className='flex justify-center space-x-10 max-w-screen-sm mx-auto'>
          <div className='items-center'>
            <Image className='mx-auto max-w-10 mb-2' src={Micro}></Image>
            <p className='text-center  underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Choose your Microsoft 365</p>
          </div>
          <div className='items-center'>
            <Image className='mx-auto max-w-10 mb-2' src={Xbox}></Image>
            <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Shop Xbox games and consoles</p>
          </div>
          <div className='items-center'>
            <Image className='mx-auto max-w-10 mb-2' src={Micro}></Image>
            <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Get Windows 11</p>
          </div>
        </div>
        <div className='items-center'>
          <Image className='mx-auto max-w-10 mb-2' src={Devices}></Image>
          <p className='text-center underline text-[#0067b8] text-sm cursor-pointer font-semibold mb-10'>Explore Surface devices</p>
        </div>
      </div>




    </div>
  )
}

export default Promo