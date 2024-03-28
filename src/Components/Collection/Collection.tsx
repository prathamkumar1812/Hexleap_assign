import Image from 'next/image'
import React from 'react'
import Person from '../../../public/unnamed 1.svg'


export default function Collection({collection}: Props & {collection: any}) {
  return (
    <div className='w-[257px]  relative h-[625px]  flex  flex-col items-center justify-between bg-[#ffff] dark:bg-[#818A97]'>
      <div className=' relative h-[401px] w-[226px]'>
      <Image className='mx-auto' fill src={collection.image} alt='Person' />
      </div>
          
          
          <div className='w-full flex relative'><div className='w-[20px] h-[20px] absolute left-[-10px] rounded-full circle3 dark:circle1'></div><div className='mx-auto text-[#A9ACB2]'>- - - - - - - - - - - - - - - - - -</div><div className='w-[20px] h-[20px]  absolute right-[-10px] rounded-full circle2 dark:circle' ></div></div>
          <div className=' text-center w-[213px]'>
            <h3 className='text1 dark:text-white text-black'>{collection.name}</h3>
            <span className='text5 dark:text-white text-black'>OCT 15</span>
            <span className='mx-2 dark:text-white text-black'>|</span>
            <span className='text5 dark:text-white text-black'>SUN</span>
            <span className='mx-2 dark:text-white text-black' >|</span>
            <span className='text5 dark:text-white text-black'>4:30</span>
            <div className='text4 mt-2'>{collection.location}</div>
          </div>
          <button className='w-[213px] mx-5 h-[36px] bg-black text-center mb-2 text6'>{collection.button}</button>
    </div>
  )
}