import Image from 'next/image'
import Game from '../../../public/GamePass.jpeg'
import GamePasss from '../../../public/GamePass.avif'
import NewXboxS from '../../../public/XboxSNew.webp'
import NewXS from '../../../public/NewXS.jpeg'


import React from 'react'

const GamePass = () => {
  return (
    <div>
      <div className='SmallScreen px-3 xl:px-16 md:max-w-screen-lg max-w-screen-md mx-auto relative min-[1079px]:hidden'>
      <Image className='z-10' src={NewXS}></Image>
      <div className='px-3 max-[860px]:px-0'>

      <div className='relative min-[860px]:p-12 max-[860px]:py-4 max-[860px]:px-5  max-w-screen-lg mx-auto min-[860px]:relative bg-white min-[860px]:shadow-lg min-[860px]:bottom-14 z-20 space-y-2  '>
          <h1 className='text-xl font-medium'>
          Xbox Series S
          </h1>
          <p className='text-sm'>Next-gen performance in the smallest Xbox ever</p>
          <button className='bg-[#0067b8] text-white py-2 px-3 hover:bg-[#025a9f]'>Shop Xbox Series S</button>
        </div>
      
      </div>
      </div>

      <div className='LargScreen flex  items-center flex-col my-20 px-3 xl:px-16 md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl md:mx-auto relative max-[1079px]:hidden'>
        <Image className='min-h-[400px]' src={NewXboxS}></Image>
        <div className='absolute inset-0 h-36 my-auto left-32 max-w-[30%] space-y-5'>
          <h1 className='text-4xl font-medium'>
          Xbox Series S
          </h1>
          <p className='text-sm'>Next-gen performance in the smallest Xbox ever</p>
          <button className='bg-[#0067b8] py-2 px-3 text-white text-sm font-medium hover:bg-[#025a9f]'>Shop Xbox Series S</button>
        </div>
      </div>

    </div>
  )
}
export default GamePass