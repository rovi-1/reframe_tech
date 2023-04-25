import Image from 'next/image';
import styles from '../page.module.css';
import Navbar from '../navbar';
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

const MontTitle2 = Montserrat({
  subsets: ['latin'],
  weight: '600',
});

export default function Desenvolvimento() {
  return (
    <main className={styles.main}>
      <div id="desenvolvimentoBG" className="pb-20 ">
        <Navbar />
        <div className="ml-10 md:ml-64 mt-10 md:mt-48 mr-10 md:mr-64 justify-center flex flex-col mb-auto md:mb-72 ">
          <h1
            className={`${orbitronTitle2.className} text-transparent justify-left text-left flex flex-row md:bg-clip-text md:bg-gradient-to-b text-white md:text-8xl text-2xl `}
          >
            Desenvolvimento
          </h1>
          <h3
            className={`${orbitronTitle2.className} text-transparent justify-left text-left flex flex-row md:bg-clip-text md:bg-gradient-to-b text-white md:text-8xl text-2xl mb-10`}
          >
            de software
          </h3>
          <h3
            className={`${MontTitle.className} text-white justify-left  text-2xl lg:text-2xl md:text-2xl flex flex-row text-justify`}
          >
            Desenvolvemos softwares personalizados para empresas que desejam se
            manter atualizadas e competitivas, com soluções que atendem às
            necessidades únicas de cada negócio.
          </h3>
        </div>
      </div>
      <div className="md:mt-96 md:mr-56 md:mb-96 md:ml-56 mt-10 ml-14 mr-14 flex flex-row justify-center ">
        <span
          className={`${orbitronTitle.className}  text-white text- sm:text-3xl text-center tracking-widest mt-10`}
        >
          Trabalhamos com uma ampla variedade de tecnologias de software,
          incluindo desenvolvimento de websites, desenvolvimento de sistemas
          industriais e soluções de software sob medida.Não entregamos somente
          um projeto, mas sim uma diferenciação com alta personalização que
          impulsiona o seu negócio para o próximo nível.
        </span>
      </div>
      <div className="flex justify-center items-center mt-20 bg-purple-900 p-20 md:h-screen">
        <div className="flex flex-col md:flex-row gap-10 ml-64 mr-64">
          <div className="flex flex-col">
            <div
              className={`${MontTitle2.className}   align-middle  text-center text-2xl md:text-4xl`}
            >
              Criação de páginas web
            </div>
            <div
              className={`${MontTitle2.className}  align-middle  text-center  text-lg md:text-xl`}
            >
              <br />
              Desenvolvemos o site da sua empresa a partir do zero, criando uma
              página que transmita a essência de seu negócio.
            </div>
          </div>
          <div className="flex flex-col">
            <div
              className={`${MontTitle2.className}   align-middle  text-center   text-2xl md:text-4xl`}
            >
              Desenvolvimento de softwares
            </div>
            <div
              className={`${MontTitle2.className}  align-middle  text-center text-lg md:text-xl`}
            >
              <br />
              Entenderemos o seu processo e criamos uma solução personalizada
              para atender as suas necessidades.
            </div>
          </div>
          <div className="flex flex-col">
            <div
              className={`${MontTitle2.className}   align-middle  text-center  text-2xl md:text-4xl`}
            >
              Assistência e melhorias
            </div>
            <div
              className={`${MontTitle2.className}  align-middle  text-center text-lg md:text-xl`}
            >
              <br />
              Reestruturamos o seu site para aumentar as vendas, corrigir ou
              melhorar processos anteriores.
            </div>
          </div>
        </div>
      </div>
      <section id="contato" class="bg-white dark:bg-gray-900 pb-32 pt-32">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            COMO PODEMOS TE AJUDAR?
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Está com dúvidas? Nos contate para que possamos conversar um pouco
            mais!
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Seu e-mail
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="seu-email@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Nos deixe saber em como te ajudar"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Sua mensagem
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Descreva aqui suas duvidas"
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none border-2 border-white focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
