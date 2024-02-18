"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import img from './assets/Image.png'
import { FaInstagram,FaGithub,FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <div className="h-screen w-full">
        <div className="bg-black w-full flex items-end justify-center h-[75%] text-white">
          <div className="flex flex-col">

          {/* <Image src={img} width={500} height={500} className='z-0 translate-y-32'></Image> */}
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




        {/* Projects */}
        <div className="bg-green-400 w-full flex flex-col items-center ">
          <h1 className="text-4xl">
            Projects
            </h1>
            {/* cards */}
            <div>
              hi
            </div>

        </div>


        <footer className="bg-red-500 h-48 w-full text-white items-center flex flex-col justify-between bottom-0">
            <h1>Get in touch</h1>
            <div className="flex space-x-10 text-4xl pb-8">

            <FaInstagram  className='hover:cursor-pointer hover:-translate-y-1 transition transform  duration-300'/>
            <FaGithub className='hover:cursor-pointer hover:-translate-y-1 transition transform  duration-300' />

            <FaXTwitter className='hover:cursor-pointer hover:-translate-y-1 transition transform  duration-300' />
            <FaLinkedin className='hover:cursor-pointer hover:-translate-y-1 transition transform  duration-300' />
            </div>


        </footer>
      </div>
    </>
  );
};

export default page;
