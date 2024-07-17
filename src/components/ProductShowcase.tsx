'use client'

import Image from 'next/image';
import appScreen from '../assets/images/app-screen.png';
import {motion,useScroll, useTransform} from "framer-motion"
import { useEffect, useRef } from 'react';

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null)
  const {scrollYProgress} = useScroll({
    target:appImage,
    offset:['start end','end end']
  });
  // dooble-checking
  // useEffect(()=>{
  //   scrollYProgress.on("change",(latestValue)=>
  //     console.log("latestValue",latestValue)
  //   )
  // },[scrollYProgress])
  const rotateX = useTransform(scrollYProgress,[0,1],[15,0])
  const opacity=useTransform(scrollYProgress,[0,1],[.5,1])
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intutive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app deisgned to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <motion.div
        style={{
          opacity,
          rotateX,
          transformPerspective:"800px",
        }}
        >
        <Image
          src={appScreen}
          alt="The product screenshot"
          className="container mt-14"
          ref={appImage}
        />
        </motion.div>
      </div>
    </div>
  );
};
