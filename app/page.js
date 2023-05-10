'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from './navbar';
import Contato from './formContato';
import Link from 'next/link';
import { Orbitron } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';
import AOS from 'aos';
import dynamic from 'next/dynamic';
import 'aos/dist/aos.css';

const orbitronTitle = Orbitron({
  subsets: ['latin'],
  preload: false,
});
const orbitronTitle2 = Orbitron({
  subsets: ['latin'],
  weight: '600',
  preload: false,
});
const MontTitle = Montserrat({
  subsets: ['latin'],
  preload: false,
});


const Proposito = dynamic(() => import('./proposito'), {
  ssr: false,
});
const CardConsultoria = dynamic(() => import('./cardconsultoria'), {
  ssr: false,
});
const CardDesenvolvimento = dynamic(() => import('./carddesenvolvimento'), {
  ssr: false,
});

const CardAnalise = dynamic(() => import('./cardanalise'), { ssr: false });




export default function Home() {
  return (
    <main className={styles.main}>
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

      <Proposito />

      <CardConsultoria />

      <CardDesenvolvimento />

      <CardAnalise />

      <Contato />
    </main>
  );
}
