import Image from 'next/image';
import styles from '../page.module.css';
import Navbar from '../navbar';
import Contato from '../formContato';
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
      <Contato />
    </main>
  );
}
