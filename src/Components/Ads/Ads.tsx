import Image from 'next/image'
import React from 'react'
import addd from '../../../public/addd.svg'

const Ads = () => {
  return (
    <div className='w-[237px] h-[511px] p-2 flex flex-col gap-8 bg-[#ffff] dark:bg-[#818A97]'>
    <div className='w-[217px] h-[218px] border'>
         <Image src={addd} alt='Person' height={230}  />
    </div>
    <div>
    <h2 className='textAd text-black dark:text-white'>Advertisement title</h2>
     <p  className='textAdp dark:text-[#DFDFDF] text-[#525965] px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
     
 </div>
  )
}

export default Ads