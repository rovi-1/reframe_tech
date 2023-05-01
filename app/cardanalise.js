'use client';
import Image from 'next/image';
import styles from './page.module.css';
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Orbitron } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import AOS from 'aos';
import Link from 'next/link';
import 'aos/dist/aos.css';

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
export default function CardAnalise() {
    AOS.init();
  return (
    <Link href={'analise'}>
      <section class="mx-auto w-fit p-12 flex justify-center items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          class="w-full h-full group m-10"
        >
          <div class="relative overflow-hidden  flex flex-col md:flex-row">
            <img
              class="h-full w-full  md:w-1/2 object-cover"
              src="..\analisededados.png"
              alt=""
            />
            <div class="absolute h-full w-full md:w-1/2 bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button class="bg-gray-900 rounded-full text-white py-4 px-16 hover:bg-gray-500">
                SAIBA MAIS
              </button>
            </div>
            <div className="md:m-10 flex flex-col w-full md:w-1/2 md:ml-10 items-left mt-10">
              <h3
                className={`${orbitronTitle.className} md:text-left text-center   text-white text-2xlxl:text-xl 2xl:text-4xl`}
              >
                Transformamos dados em{' '}
                <span className="text-purple-900"> ação</span>
              </h3>
              <span
                className={`${orbitronTitle.className} md:text-left text-center  text-white text-sm xl:text-lg 2xl:text-2xl mt-10 tracking-widest `}
              >
                Transformamos suas ideias em realidade com nossas soluções
                personalizadas de desenvolvimento de software. Com uma abordagem
                colaborativa e ágil, estamos prontos para ajudá-lo a atingir
                seus objetivos e se destacar no mercado.
              </span>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}
