'use client'
import React from 'react';
import Image from 'next/image';
import New from '@/../../public/New.jpeg';
import SmallNew from '@/../../public/SmallNew.avif';
import SlideTwo from '@/../../public/Slide2.avif';
import SlideTwoSmall from '@/../../public/SS2.avif';
import Next3 from '../../../public/next3.svg';
import Pre from '../../../public/Pre1.svg';
import Nex from '../../../public/Next11.svg';
import Pause from '../../../public/Pause.svg';
import Play from '../../../public/Play.svg';
import { useState, useEffect } from 'react';


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 2 : 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 1 : 2));
  };

  const toggleAutoPlayPause = () => {
    setIsAutoPlayPaused((prevIsAutoPlayPaused) => !prevIsAutoPlayPaused);
  };

  useEffect(() => {
    let autoPlayInterval;

    if (!isAutoPlayPaused) {
      autoPlayInterval = setInterval(() => {
        handleNextSlide();
      }, 5000); // Change the interval as needed
    }


    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [currentSlide, isAutoPlayPaused]);


  return (
    <div>
      {currentSlide === 1 && (
        <div id='First' className=''>
          <div className={`SmallScreen px-3 xl:px-16  mx-auto  min-[1084px]:hidden `}>
            <div className='right z-10 '>
              <Image className="px-1  mb-3" src={SmallNew} ></Image>
            </div>
            <div className='px-3 max-[860px]:px-0'>
              <div className='container min-[860px]:p-12 max-[860px]:py-4 max-[860px]:px-5  max-w-screen-lg mx-auto min-[860px]:relative bg-white shadow-lg bottom-14 z-20 space-y-2 '>
                <div className='left items-center justify-center'>
                  <button className='bg-[#ffb900] px-3 py-1 font-semibold ' src='/'>New</button>
                  <h1 className='text-2xl mb-4'>Get more from Copilot</h1>
                  <p className='mb-4'>See how your everyday AI companion can help enhance life and work. – all in one plan.</p>
                  <div className='btn flex items-center gap-x-4'>
                    <button className='bg-[#0067b8] hover:bg-[#025a9f] text-white  px-4 py-2'>For individuals</button>
                    <div className='flex text-[#0067b8]  group hover:underline decoration-2 cursor-pointer'>
                      <span> For business</span>
                      <Image className=" m-0 translate-x-0 group-hover:translate-x-2 duration-300" src={Next3}></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='relative LargScreen flex  items-center flex-col mx-1 max-w-screen-2xl 2xl:mx-auto max-[1083px]:hidden'>
            <Image className='min-h-[400px]' src={New}></Image>
            <div className='absolute inset-0 h-64 my-auto left-32 max-w-[30%] space-y-5'>
              <button className='bg-[#ffb900] px-3 py-1 font-semibold' src='/'>New</button>
              <h1 className='text-4xl font-medium'>
                Get more from Copilot
              </h1>
              <p className='text-sm'>See how your everyday AI companion can help enhance life and work.</p>
              <div className='flex items-center space-x-4'>
                <button className='bg-[#0067b8] hover:bg-[#025a9f] text-white mb-4 px-4 py-2'>For individuals</button>
                <div className='flex font-medium mb-4 text-[#0067b8]  group hover:underline decoration-2 cursor-pointer'>
                  <span> For business</span>
                  <Image className=" m-0 translate-x-0 group-hover:translate-x-2 duration-300" src={Next3}></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentSlide === 2 && (
        <div id='Second' className=''>
          <div className='SmallScreen  px-3 xl:px-16 mx-auto  min-[1084px]:hidden'>
            <div className='right z-10 '>
              <Image className="px-1 mb-3" src={SlideTwoSmall} ></Image>
            </div>
            <div className='px-3 max-[860px]:px-0'>
              <div className='container min-[860px]:p-12 max-[860px]:py-4 max-[860px]:px-5  max-w-screen-lg mx-auto min-[860px]:relative bg-white shadow-lg bottom-14 z-20 space-y-2 '>
                <div className='left items-center justify-center'>
                  <h1 className='text-2xl font-medium mb-4'>Surface Pro 9</h1>
                  <p className='mb-4'>Tablet versatility and laptop power — all in one ultra-portable device</p>
                  <div className='btn flex items-center gap-x-4'>
                    <button className='bg-[#0067b8] hover:bg-[#025a9f] text-white  px-4 py-2'>Learn more</button>

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='relative LargScreen flex  items-center flex-col mx-1 2xl:mx-auto max-w-screen-2xl  max-[1083px]:hidden'>
            <Image className='min-h-[400px]' src={SlideTwo}></Image>
            <div className='absolute inset-0 h-36 my-auto  max-w-[30%] space-y-5 ml-[60%] '>
              <h1 className='text-4xl font-medium'>
                Surface Pro 9
              </h1>
              <p className='text-sm'>Tablet versatility and laptop power — all in one ultra-portable device</p>
              <div className='flex items-center space-x-4'>
                <button className='bg-[#0067b8] hover:bg-[#025a9f] text-white mb-4 px-4 py-2'>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className=' flex items-center justify-center text-center mt-3 mb-12'>
        <button
          className='px-2 py-2'
          onClick={toggleAutoPlayPause}
        >
          {isAutoPlayPaused ? (
            <Image src={Pause}></Image>
          ) : (
            <Image src={Play}></Image>
          )}
        </button>

        <button
          className=' px-2 py-2 mr-2'
          onClick={handlePrevSlide}
        >
          <Image src={Pre}></Image>

        </button>
        <button
          className='px-2 py-2'
          onClick={handleNextSlide}
        >
          <Image src={Nex}></Image>
        </button>
      </div>
    </div>
  );
};

export default Slider;