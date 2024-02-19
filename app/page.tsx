"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import img from "./assets/Image.png";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "@/node_modules/next/link";

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
                    strings: ["Developer", "Designer", "Entrepreneur"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-yellow-400 w-full items-center justify-center flex flex-col">
          <div className="w-[80%] flex flex-col items-center " >

          <h1 className="text-3xl">About<span className="text-red-500">.</span></h1>
          <p>I'm a 21-year-old engineering student passionate about the power of technology.  As a self-taught full-stack developer, I love building functional and sleek web and mobile applications. I'm always exploring new tech frontiers, especially in the world of artificial intelligence.</p>
          </div>
          

        </div>

        {/* Projects */}
        <div className="bg-green-400 w-full flex flex-col items-center ">
          <h1 className="text-4xl">Projects</h1>
          {/* cards */}
          <div>hi</div>
        </div>

        <footer className=" h-48  w-full text-white items-center flex-col flex align-middle justify-between bottom-0">
          <Link href="#" className="button mt-5 border-2 border-white">
            <svg viewBox="0 0 384 512" className="svgIcon">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
            </svg>
          </Link>

          <div className="flex space-x-10 text-4xl mb-4">
            <FaInstagram className="hover:cursor-pointer hover:-translate-y-1 transition transform  duration-300 " />
            <FaGithub className="hover:cursor-pointer hover:-translate-y-1 transition transform  duration-300" />

            <FaXTwitter className="hover:cursor-pointer hover:-translate-y-1 transition transform  duration-300" />
            <FaLinkedin className="hover:cursor-pointer hover:-translate-y-1 transition transform  duration-300" />
          </div>
          <p className="text-sm">Anantha Krishnan</p>
        </footer>
      </div>
    </>
  );
};

export default page;
