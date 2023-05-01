"use client";
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from './navbar';
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Orbitron } from 'next/font/google';
import { Montserrat } from 'next/font/google';
const orbitronTitle = Orbitron({
    subsets: ['latin'],
  });
  const orbitronTitle2 = Orbitron({
    subsets: ['latin'],
    weight: '600',
  });
  const MontTitle = Montserrat({
    subsets: ['latin'],
  });
const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0 }
  };
export default function MoveSky() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  return (
    
    <motion.div
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={squareVariants}
    className="square"
  >
   <div id="bg" className="pb-20 ">
        <Navbar />
        <div className="ml-10 md:ml-64 mt-10 md:mt-28 mr-10 md:mr-64 justify-center flex flex-col mb-auto md:mb-72 ">
          <h1
            className={`${orbitronTitle2.className} text-transparent justify-center text-left flex flex-row md:bg-clip-text md:bg-gradient-to-b text-white md:text-8xl text-2xl  mb-10`}
          >
            Transforme seus desafios em soluções{' '}
          </h1>
          <h3
            className={`${MontTitle.className} text-white justify-center  text-2xl lg:text-2xl md:text-4xl flex flex-row text-justify`}
          >
            Na Reframe, fornecemos soluções personalizadas para o crescimento da
            sua empresa através de consultoria, desenvolvimento de software e
            análise de dados.
          </h3>
        </div>
      </div>
    </motion.div>
  );
  
}
