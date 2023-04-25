'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from './navbar';
import Contato from './formContato';
import Proposito from './proposito';
import Link from 'next/link';
import { Orbitron } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';
import AOS from 'aos';

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

AOS.init();
function FrontOfCardConsultoria() {
  return (
    <Link href={'consultoria'}>
      <section class="mx-auto w-fit p-12 flex justify-center items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          class="w-full h-full group m-10"
        >
          <div class="relative overflow-hidden flex flex-col md:flex-row">
            <img
              class="h-full w-full  md:w-1/2 object-cover"
              src="..\consultoria.png"
              alt=""
            />
            <div class="absolute h-full w-full md:w-1/2 bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button class="bg-gray-900 rounded-full text-white py-4 px-16 hover:bg-gray-500">
                SAIBA MAIS
              </button>
            </div>
            <div className="md:m-10 mt-10 flex flex-col w-full md:w-1/2 md:ml-10 items-center">
              <h3
                className={`${orbitronTitle.className} md:text-left text-center  text-white text-2xl xl:text-xl 2xl:text-4xl tracking-widest`}
              >
                Desbloqueamos todo o{' '}
                <span className="text-purple-900"> potencial</span> da sua
                empresa, de maneira personalizada
              </h3>
              <span
                className={`${orbitronTitle.className}  md:text-left text-center   text-white text-sm xl:text-lg 2xl:text-2xl mt-10 tracking-widest `}
              >
                Com uma abordagem colaborativa e ágil, trabalhamos em estreita
                colaboração para entender as suas necessidades e desafios, a fim
                de desenvolver soluções que atendam aos seus requisitos.
                Utilizamos tecnologia para oferecer as soluções mais eficazes,
                eficientes e personalizadas.
              </span>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}
function FrontOfCardDesenvolvimento() {
  return (
    <Link href={'desenvolvimento'}>
      <section class="mx-auto w-fit p-12 flex justify-center items-center">
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          class="w-full h-full group m-10"
        >
          <div class="relative overflow-hidden flex flex-col md:flex-row">
            <div className="md:m-10 flex flex-col w-full md:w-1/2 md:ml-10 items-center mb-10">
              <h3
                className={`${orbitronTitle.className} text-center md:text-left text-white text-2xl xl:text-xl 2xl:text-4xl`}
              >
                Softwares inteligentes epersonalizados ao seu{' '}
                <span className="text-purple-900"> alcance</span>
              </h3>
              <span
                className={`${orbitronTitle.className} text-center md:text-left  text-white text-sm xl:text-lg 2xl:text-2xl mt-10 tracking-widest `}
              >
                Transformamos suas ideias em realidade com nossas soluções
                personalizadas de desenvolvimento de software. Com uma abordagem
                colaborativa e ágil, estamos prontos para ajudá-lo a atingir
                seus objetivos e se destacar no mercado.
              </span>
            </div>
            <div>
              <img
                class="h-full w-full object-cover"
                src="..\desenvolvimento.png"
                alt=""
              />
              <div class="absolute h-full w-full md:w-1/2 place-content-center bg-black/20 flex items-center justify-left -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class="bg-gray-900 rounded-full text-white py-4 px-16 hover:bg-gray-500">
                  SAIBA MAIS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}
function FrontOfCardAnalise() {
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

      <FrontOfCardConsultoria />

      <FrontOfCardDesenvolvimento />

      <FrontOfCardAnalise />

      <Contato />
    </main>
  );
}
