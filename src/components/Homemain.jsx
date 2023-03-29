import React from 'react'
import Image1 from '../assets/placeholder-logo.png'

function Homemain() {
  return (
    <div name='' className='w-full h-screen'>
        <div className='max-w-[2000px] mx-auto px-8 flex flex-col justify-center items-center h-full select-none pt-[170px] pb-[130px]'>
            <img className='aspectw-16 aspect-h-9'
              style={{width: '2000px'}} src={Image1} alt='Home Image'/>
        </div>
    </div>
  )
}

export default Homemain