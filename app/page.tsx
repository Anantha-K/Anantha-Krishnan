"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import img from './assets/Image.png'
const page = () => {
  return (
    <>
      <div className="h-screen w-full">
        <div className="bg-black w-full flex items-end justify-center h-[75%] text-white">
          <div className="flex flex-col">

          <Image src={img} width={500} height={500} className='z-0 translate-y-32'></Image>
          <div className="flex-col items-center -translate-y-10 z-10 justify-center">
            <h1 className="text-6xl">Anantha Krishnan</h1>
            <div className="flex justify-center text-3xl my-5">
            <Typewriter
            options={{
              strings: ["Developer", "Designer","Entrepreneur"],
              autoStart: true,
              loop: true,
            }}
            />
            </div>
          </div>
          </div>
        </div>







        <footer className="bg-red-500 h-48 w-full text-white flex justify-center">
            <h1>Get in touch..</h1>
        </footer>
      </div>
    </>
  );
};

export default page;
