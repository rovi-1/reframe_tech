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
          Desenvolvemos softwares personalizados para empresas que desejam se manter atualizadas e competitivas, com soluções que atendem às necessidades únicas de cada negócio.

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
      <div className="mt-24 ml-10 mr-10 md:ml-32 md:mr-32 h-2/3 justify-center flex flex-col md:flex-row">
        <div
          id="bg_1"
          className=" md:mr-12 w-96 h-96 md:w-1/2 md:h-auto rounded-3xl"
        ></div>
        <div className="mt-10 flex flex-col md:w-1/2">
          <h3
            className={`${orbitronTitle.className} text-left  text-white text-2xl md:text-4xl`}
          >
            Desbloqueamos todo o{' '}
            <span className="text-purple-900"> potencial</span> da sua empresa,
            de maneira personalizada
          </h3>
          <span
            className={`${orbitronTitle.className} text-left  text-white text- md:text-2xl mt-10`}
          >
            Entendemos que cada negócio é único, com seus próprios desafios e
            oportunidades. É por isso que nossa consultoria organizacional é
            altamente personalizada e visa entender de perto as dificuldades que
            sua empresa enfrenta. A partir daí, desenvolvemos soluções
            inovadoras e certeiras para ajudá-lo a alcançar seus objetivos e
            desbloquear seu potencial máximo.
          </span>
        </div>
      </div>
      <div className="mt-32 ml-10 mr-10 md:ml-32 md:mr-32 h-2/3 justify-center flex flex-col md:flex-row">
        <div className="flex flex-col md:w-1/2">
          <h3
            className={`${orbitronTitle.className} text-left  text-white text-2xl md:text-4xl`}
          >
            Softwares inteligentes epersonalizados ao seu{' '}
            <span className="text-purple-900"> alcance</span>
          </h3>
          <span
            className={`${orbitronTitle.className} text-left text-white text-2xl md:text-2xl mt-10`}
          >
            Entendemos que cada negócio é único, com seus próprios desafios e
            oportunidades. É por isso que nossa consultoria organizacional é
            altamente personalizada e visa entender de perto as dificuldades que
            sua empresa enfrenta. A partir daí, desenvolvemos soluções
            inovadoras e certeiras para ajudá-lo a alcançar seus objetivos e
            desbloquear seu potencial máximo.
          </span>
        </div>
        <div
          id="bg_2"
          className=" md:ml-12 w-3/3 md:w-1/2 h-96 mt-10 md:h-auto rounded-3xl"
        ></div>
      </div>
      <div className="mt-32 ml-10 mr-10 md:ml-32 md:mr-32 h-2/3 justify-center flex flex-col md:flex-row">
        <div
          id="bg_3"
          className=" md:mr-12 w-3/3 md:w-1/2 h-96  md:h-auto rounded-3xl"
        ></div>
        <div className="mt-10 flex flex-col md:w-1/2">
          <h3
            className={`${orbitronTitle.className} text-left  text-white text-2xl md:text-4xl`}
          >
            Transformamos dados em{' '}
            <span className="text-purple-900"> ação</span>
          </h3>
          <span
            className={`${orbitronTitle.className} text-left text-white text- md:text-2xl mt-10`}
          >
            Transformamos suas ideias em realidade com nossas soluções
            personalizadas de desenvolvimento de software. Com uma abordagem
            colaborativa e ágil, estamos prontos para ajudá-lo a atingir seus
            objetivos e se destacar no mercado.
          </span>
        </div>
      </div>

      <div className="pb-20"></div>
    </main>
  );
}
