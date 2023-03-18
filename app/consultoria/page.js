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

export default function Consultoria() {
  return (
    <main className={styles.main}>
      <div id="consultoriaBG" className="pb-20 ">
        <Navbar />
        <div className="ml-10 md:ml-64 mt-10 md:mt-48 mr-10 md:mr-64 justify-center flex flex-col mb-auto md:mb-72 ">
          <h1
            className={`${orbitronTitle2.className} text-transparent justify-left text-left flex flex-row md:bg-clip-text md:bg-gradient-to-b text-white md:text-8xl text-2xl `}
          >
            Consultoria
          </h1>
          <h3
            className={`${orbitronTitle2.className} text-white justify-left  text-2xl lg:text-4xl md:text-4xl flex flex-row text-justify mb-14`}
          >
            Inovação e transformação digital
          </h3>
          <h3
            className={`${MontTitle.className} text-white justify-left  text-2xl lg:text-2xl md:text-2xl flex flex-row text-justify`}
          >
           Nossa solução de consultoria, visa entender seus desafios únicos e oferecer soluções personalizadas que atendam às suas necessidades. Nosso objetivo é ajudá-lo a tomar decisões mais informadas e inteligentes para impulsionar o sucesso de sua empresa.


          </h3>
         
        </div>
      </div>
      <div className="md:mt-96 md:mr-56 md:mb-10 md:ml-56 mt-10 ml-14 mr-14  justify-center ">
        <span
          className={`${orbitronTitle.className}  text-white text- sm:text-3xl text-left tracking-widest mt-10`}
        >
         Compreendemos como a falta de conhecimento tecnológico pode afetar uma empresa. Muitas empresas no contexto atual enfrentam dificuldades como:
        </span>
       
    
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-16"/>
      <span
          className={`${MontTitle.className}  text-white text-2xl sm:text-2xl text-left tracking-widest mt-10 mb-32`}
        >
        1 - Perda de competitividade devido a defasagem tecnológica das soluções atuais. <br/>
        2 - Baixa produtividade devido a processos manuais, ineficientes e demorados,  <br/>
        3 - Monitoramento insuficiente dos resultados e falta de tangibilidade de dados.  <br/>
        4 - Menor qualidade de produtos e serviços. 
        </span>
        <h3
          className={`${MontTitle.className}  text-white text-2xl sm:text-2xl text-left tracking-widest mt-10 mb-32`}
        >
          Dessa forma, buscamos oferecer desde melhorias em processos e sistemas até estratégias de eficiência e produtividade de equipe, através de implementações e expertise tecnológica alinhadas ao contexto organizacional de sua empresa.
        </h3>
        </div>
    </main>
  );
}
