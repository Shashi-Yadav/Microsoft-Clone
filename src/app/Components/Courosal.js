'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";

export default function Courosal({ slides }) {

    const [current, setCurrent] = useState(0);
    let previousSlide=()=>{
        if(current === 0) setCurrent(slides.length-1);
        else setCurrent(current-1);
    };
    let nextSlide=()=>{
        if(current === slides.length-1) setCurrent(0);
        else setCurrent(current+1);
    };
    return (
        <div className='overflow-hidden'>
            <div className={`flex transition ease-out duration-300`} style={{transform:`translateX(-${current * 100}%)`}}>
            {/* <div className={`flex transition ease-out duration-300 `} style={{transform:`translateX(-${current * 100}%)`}}> */}
                {slides.map((s, index) => (
                    <Image key={index} src={s} alt={`Slide ${index}`} />
                ))}
            </div>
            <div className='text-2xl flex w-16 m-auto'>
            <button onClick={previousSlide}><GrPrevious/></button>
            <button onClick={nextSlide}><GrNext/></button>
            </div>
        </div>
    );
}








