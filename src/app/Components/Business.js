import React from 'react'
import Courosal from './Courosal'
import slide2 from '../../../public/Slide2.avif'
import New from '../../../public/New.jpeg'


const Business = () => {
    let slides = [ slide2,New]

    return (
        <div className=''>
            <Courosal slides={slides} />

        </div>
    )
}

export default Business