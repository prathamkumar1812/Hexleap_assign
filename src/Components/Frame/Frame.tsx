"use client";
import React from 'react'
import Image from 'next/image'
import Person from '/public/person1.svg'

type Props = {}

function Frame({person}: Props & {person: any}) {
  return (
    <div className=' w-[237px] dark:bg-[#3B3E47] bg-[#ffff] h-[511px] dark:frame p-2 flex flex-col justify-between '>
       <div className='w-[217px] h-[385px] relative'>
            <Image fill={true} src={person.image} alt='Person'  />
       </div>
        <div className='text1  text-left text-black dark:text-white'>{person.name}</div>
        <div className='p-2 w-[217px] h-[54px] flex bg-[#F7F7F8]  gap-14 dark:bg-[#292B32]  rounded-[0.104vw]'>
            <div>
                <div className='text2 mb-1 text-[#525965] dark:text-[#DFDFDF]'>Total Event </div>
                <div className='text3 dark:text-white text-black '>{person.event}</div>
            </div>
            <div>
                <div className='text2 mb-1 text-[#525965] dark:text-[#DFDFDF]'>Sport</div>
                <div className='text3 dark:text-white text-black '>{person.sport}</div>
            </div>
        </div>
    </div>
  )
}

export default Frame