"use client";
import Image from 'next/image';
import styles from './page.module.css';
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Orbitron } from 'next/font/google';
import { Montserrat } from 'next/font/google';
const orbitronTitle = Orbitron({
  subsets: ['latin'],
});
const MontTitle = Montserrat({
  subsets: ['latin'],
});
const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0 }
  };
export default function Proposito() {
  
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
    <div className="md:mt-96 md:mr-56 md:mb-96 md:ml-56 mt-10 ml-14 mr-14 flex flex-row justify-center ">
      <span
        className={`${orbitronTitle.className}  text-white text- sm:text-3xl text-center tracking-widest mt-10`}
      >
        Entendemos que cada negócio é único, com seus próprios desafios e
        oportunidades. É por isso que nossa consultoria organizacional é
        altamente personalizada e visa entender de perto as dificuldades que sua
        empresa enfrenta. A partir daí, desenvolvemos soluções inovadoras e
        certeiras para ajudá-lo a alcançar seus objetivos e desbloquear seu
        potencial máximo.
      </span>
    </div>
    </motion.div>
  );
  
}
