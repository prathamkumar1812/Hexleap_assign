"use client";
import Collection from "@/Components/Collection/Collection";
import Frame from "@/Components/Frame/Frame";
import Image from "next/image";
import Rightarrow from '../../public/righarrow.svg'
import Leftarrow from '../../public/leftarrow1.svg'
import Ads from "@/Components/Ads/Ads";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { useState } from "react";
import { persons,collections } from "./Constants/index";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  }
  return (
    <main className="w-screen flex flex-col gap-10 items-center justify-center">
      <div className="w-10 h-10 rounded-full   absolute right-0 cursor-pointer top-0 m-3" onClick={()=>toggleDarkMode()}>
          { darkMode?<IoSunnyOutline className="w-10 h-10 text-yellow-500"/>:
           <IoMoon className="w-10 h-10 text-white"/>}
      </div>
      <div className="w-[86.25vw] ">
      <h2 className="textSport text-black dark:text-white">Sports</h2>
        <div className="w-full  gap-3 flex flex-col md:flex-row flex-wrap items-center justify-center my-[10px] ">
          {persons.map((person:any,index:any)=><Frame key={index} person={person}/>)}
          <Ads/>
        </div>
       <div className=" mt-[30px] w-full flex  justify-center"><button className="button12">See More</button></div>
      </div>
      <div className="flex flex-col dark:collectionbg gap-10  items-center w-[85.63vw] h-[918px]">
        <h1 className="textCollection mt-12 text-black dark:text-white">Collection Spotlight</h1>
        <p className="text-center  text-black dark:text-white">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br></br> experience. Grab yours today!</p>
        <div className=" flex items-center w-[74.98vw]  justify-between">
          <div className="h-[49px] flex items-center justify-center w-[2.53vw] border border-[#2C9CF0]">
            <Image src={Leftarrow} alt="left-arrow" width={20}  />
          </div>
          <div className="flex  w-[58.70vw] gap-10  relative justify-start items-center overflow-scroll remove-scrollbars">
            {collections.map((collection:any,index:any)=><Collection key={index} collection={collection}/>)}
      
          
          
          
       
          </div>
          <div className="h-[49px] flex items-center justify-center w-[2.53vw]  border border-[#2C9CF0]">
            <Image src={Rightarrow} alt="right-arrow" width={20} />
          </div>
        
        </div>
      </div>
     
    </main>
  );
}
