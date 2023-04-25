import Image from 'next/image';
import styles from './page.module.css';
import Navbar from './navbar';
import Link from 'next/link';
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

function FrontOfCardConsultoria() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all duration-100 delay-200 z-20 hover:opacity-0">
      <Link href={'consultoria'}>
        <div className="mt-24 ml-10 mr-10 md:ml-32 md:mr-32 h-2/3 mb-40 justify-center flex rounded-lg items-center flex-col md:flex-row">
          <div
            id="bg_1"
            className=" md:mr-12 w-96 md:w-1/2 mt-10 md:h-auto rounded-3xl"
          ></div>
          <div className="mt-10 flex flex-col md:w-1/2">
            <h3
              className={`${orbitronTitle.className} text-left  text-white text-2xl xl:text-xl 2xl:text-4xl `}
            >
              Desbloqueamos todo o{' '}
              <span className="text-purple-900"> potencial</span> da sua
              empresa, de maneira personalizada
            </h3>
            <span
              className={`${orbitronTitle.className} text-left  text-white text-sm xl:text-lg 2xl:text-2xl mt-10 `}
            >
              Entendemos que cada negócio é único, com seus próprios desafios e
              oportunidades. É por isso que nossa consultoria organizacional é
              altamente personalizada e visa entender de perto as dificuldades
              que sua empresa enfrenta. A partir daí, desenvolvemos soluções
              inovadoras e certeiras para ajudá-lo a alcançar seus objetivos e
              desbloquear seu potencial máximo.
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
function FrontOfCardDesenvolvimento() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all duration-100 delay-200 z-20 hover:opacity-0">
      <Link href={'desenvolvimento'}>
        <div className="mt-32 ml-10 mr-10 md:ml-32 md:mr-32 h-2/3 justify-center flex rounded-lg items-center flex-col-reverse md:flex-row mb-80">
          <div className="flex flex-col md:w-1/2 mt-10">
            <h3
              className={`${orbitronTitle.className} text-left text-white text-2xl xl:text-xl 2xl:text-4xl`}
            >
              Softwares inteligentes epersonalizados ao seu{' '}
              <span className="text-purple-900"> alcance</span>
            </h3>
            <span
              className={`${orbitronTitle.className} text-left text-white text-sm xl:text-lg 2xl:text-2xl mt-10`}
            >
              Entendemos que cada negócio é único, com seus próprios desafios e
              oportunidades. É por isso que nossa consultoria organizacional é
              altamente personalizada e visa entender de perto as dificuldades
              que sua empresa enfrenta. A partir daí, desenvolvemos soluções
              inovadoras e certeiras para ajudá-lo a alcançar seus objetivos e
              desbloquear seu potencial máximo.
            </span>
          </div>
          <div
            id="bg_2"
            className=" md:ml-12 w-3/3 md:w-1/2 h-64 mt-10 md:h-auto rounded-3xl"
          ></div>
        </div>
      </Link>
    </div>
  );
}
function FrontOfCardAnalise() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all duration-100 delay-200 z-20 hover:opacity-0">
      <Link href={'analise'}>
        <div className="mt-32 ml-10 mr-10 md:ml-32 md:mr-32 h-2/3 justify-center flex rounded-lg items-center flex-col md:flex-row pb-56 md:flex-grow md:items-center md:justify-center">
          <div
            id="bg_3"
            className=" md:mr-12 w-3/3 md:w-1/2 h-64 mt-10  md:h-auto rounded-3xl"
          ></div>
          <div className="mt-10 flex flex-col md:w-1/2">
            <h3
              className={`${orbitronTitle.className} text-left  text-white text-2xlxl:text-xl 2xl:text-4xl`}
            >
              Transformamos dados em{' '}
              <span className="text-purple-900"> ação</span>
            </h3>
            <span
              className={`${orbitronTitle.className} text-left text-white text-sm xl:text-lg 2xl:text-2xl mt-10`}
            >
              Transformamos suas ideias em realidade com nossas soluções
              personalizadas de desenvolvimento de software. Com uma abordagem
              colaborativa e ágil, estamos prontos para ajudá-lo a atingir seus
              objetivos e se destacar no mercado.
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
function BackOfCardConsultoria() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
      <div className="absolute z-20">
        <div className="bg-white py-2 px-4 rounded-lg shadow-lg text-gray-800">
          <span className="font-bold">Saiba mais</span>
        </div>
      </div>
      <Link href={'consultoria'} className="opacity-30">
        <div className="mt-24 ml-10 mr-10 md:ml-32 md:mr-32 h-2/3 mb-40 justify-center flex rounded-lg items-center flex-col md:flex-row">
          <div
            id="bg_1"
            className=" md:mr-12 w-96 md:w-1/2 mt-10 md:h-auto rounded-3xl"
          ></div>
          <div className="mt-10 flex flex-col md:w-1/2">
            <h3
              className={`${orbitronTitle.className} text-left text-white text-2xl xl:text-xl 2xl:text-4xl `}
            >
              Desbloqueamos todo o{' '}
              <span className="text-purple-900"> potencial</span> da sua
              empresa, de maneira personalizada
            </h3>
            <span
              className={`${orbitronTitle.className} text-left text-white text-sm xl:text-lg 2xl:text-2xl mt-10 `}
            >
              Entendemos que cada negócio é único, com seus próprios desafios e
              oportunidades. É por isso que nossa consultoria organizacional é
              altamente personalizada e visa entender de perto as dificuldades
              que sua empresa enfrenta. A partir daí, desenvolvemos soluções
              inovadoras e certeiras para ajudá-lo a alcançar seus objetivos e
              desbloquear seu potencial máximo.
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
function BackOfCardDesenvolvimento() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
      <div className="absolute z-20">
        <div className="bg-white py-2 px-4 rounded-lg shadow-lg text-gray-800">
          <span className="font-bold">Saiba mais</span>
        </div>
      </div>
      <Link href={'desenvolvimento'} className="opacity-30">
        <div className="mt-32 ml-10 mr-10 md:ml-32 md:mr-32 h-2/3 justify-center flex rounded-lg items-center flex-col-reverse md:flex-row mb-80">
          <div className="flex flex-col md:w-1/2 mt-10">
            <h3
              className={`${orbitronTitle.className} text-left text-white text-2xl xl:text-xl 2xl:text-4xl`}
            >
              Softwares inteligentes epersonalizados ao seu{' '}
              <span className="text-purple-900"> alcance</span>
            </h3>
            <span
              className={`${orbitronTitle.className} text-left text-white text-sm xl:text-lg 2xl:text-2xl mt-10`}
            >
              Entendemos que cada negócio é único, com seus próprios desafios e
              oportunidades. É por isso que nossa consultoria organizacional é
              altamente personalizada e visa entender de perto as dificuldades
              que sua empresa enfrenta. A partir daí, desenvolvemos soluções
              inovadoras e certeiras para ajudá-lo a alcançar seus objetivos e
              desbloquear seu potencial máximo.
            </span>
          </div>
          <div
            id="bg_2"
            className=" md:ml-12 w-3/3 md:w-1/2 h-64 mt-10 md:h-auto rounded-3xl"
          ></div>
        </div>
      </Link>
    </div>
  );
}
function BackOfCardAnalise() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
      <div className="absolute z-20">
        <div className="bg-white py-2 px-4 rounded-lg shadow-lg text-gray-800">
          <span className="font-bold">Saiba mais</span>
        </div>
      </div>
      <Link href={'analise'} className="opacity-30">
        <div className="mt-32 ml-10 mr-10 md:ml-32 md:mr-32 h-2/3 justify-center flex rounded-lg items-center flex-col md:flex-row pb-56 md:flex-grow md:items-center md:justify-center">
          <div
            id="bg_3"
            className=" md:mr-12 w-3/3 md:w-1/2 h-64 mt-10  md:h-auto rounded-3xl"
          ></div>
          <div className="mt-10 flex flex-col md:w-1/2">
            <h3
              className={`${orbitronTitle.className} text-left  text-white text-2xlxl:text-xl 2xl:text-4xl`}
            >
              Transformamos dados em{' '}
              <span className="text-purple-900"> ação</span>
            </h3>
            <span
              className={`${orbitronTitle.className} text-left text-white text-sm xl:text-lg 2xl:text-2xl mt-10`}
            >
              Transformamos suas ideias em realidade com nossas soluções
              personalizadas de desenvolvimento de software. Com uma abordagem
              colaborativa e ágil, estamos prontos para ajudá-lo a atingir seus
              objetivos e se destacar no mercado.
            </span>
          </div>
        </div>
      </Link>
    </div>
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
      <div className="md:mt-96 md:mr-56 md:mb-96 md:ml-56 mt-10 ml-14 mr-14 flex flex-row justify-center ">
        <span
          className={`${orbitronTitle.className}  text-white text- sm:text-3xl text-center tracking-widest mt-10`}
        >
          Entendemos que cada negócio é único, com seus próprios desafios e
          oportunidades. É por isso que nossa consultoria organizacional é
          altamente personalizada e visa entender de perto as dificuldades que
          sua empresa enfrenta. A partir daí, desenvolvemos soluções inovadoras
          e certeiras para ajudá-lo a alcançar seus objetivos e desbloquear seu
          potencial máximo.
        </span>
      </div>
      <div className="mt-40"> </div>
      <div className="relative w-screen h-screen rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
        <FrontOfCardConsultoria />
        <BackOfCardConsultoria />
      </div>
      <div className="relative w-screen h-screen rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
        <FrontOfCardDesenvolvimento />
        <BackOfCardDesenvolvimento />
      </div>
      <div className="relative w-screen h-screen rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
        <FrontOfCardAnalise />
        <BackOfCardAnalise />
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
