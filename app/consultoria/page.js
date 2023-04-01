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
export default function Consultoria() {
  return (
    <main className={styles.main}>
      <div id="consultoriaBG" className="pb-20 ">
        <Navbar />
        <div className="ml-10 md:ml-64 mt-10 md:mt-48 mr-10 md:mr-64 justify-center flex flex-col mb-auto md:mb-72 ">
          <h1
            className={`${orbitronTitle2.className} text-transparent justify-left mt-32 md:mt-0 text-left flex flex-row md:bg-clip-text md:bg-gradient-to-b text-white md:text-8xl text-2xl `}
          >
            Consultoria
          </h1>
          <h3
            className={`${orbitronTitle2.className} text-white justify-left text-xl lg:text-4xl md:text-4xl flex flex-row text-justify mb-14`}
          >
            Inovação e transformação digital
          </h3>
          <h3
            className={`${MontTitle.className} text-white justify-left md:mt-10 text-xl lg:text-2xl md:text-2xl flex flex-row text-justify`}
          >
           Nossa solução de consultoria, visa entender seus desafios únicos e oferecer soluções personalizadas que atendam às suas necessidades. Nosso objetivo é ajudá-lo a tomar decisões mais informadas e inteligentes para impulsionar o sucesso de sua empresa.


          </h3>
         
        </div>
      </div>
      <div className="md:mt-96 md:mr-56 md:mb-10 md:ml-56 mt-10 ml-14 mr-14  justify-center ">
        <span
          className={`${orbitronTitle.className}  text-white text-xl sm:text-3xl text-left tracking-widest mt-10`}
        >
         Compreendemos como a falta de conhecimento tecnológico pode afetar uma empresa. Muitas empresas no contexto atual enfrentam dificuldades como:
        </span>
       
    
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-16"/>
      <h3
          className={`${MontTitle.className}  text-white text-xl sm:text-2xl text-left tracking-widest mt-10 mb-5`}
        >
        1 - Perda de competitividade devido a defasagem tecnológica das soluções atuais.
        </h3>
        <h3
          className={`${MontTitle.className}  text-white text-xl sm:text-2xl text-left tracking-widest mt-10 mb-5`}
        >
        2 - Baixa produtividade devido a processos manuais, ineficientes e demorados.
        </h3>
        <h3
          className={`${MontTitle.className}  text-white text-xl sm:text-2xl text-left tracking-widest mt-10 mb-5`}
        >
        3 - Monitoramento insuficiente dos resultados e falta de tangibilidade de dados.
        </h3>
        <h3
          className={`${MontTitle.className}  text-white text-xl sm:text-2xl text-left tracking-widest mt-10 mb-5`}
        >
        4 - Menor qualidade de produtos e serviços. 
        </h3>
        <h3
          className={`${MontTitle.className}  text-white text-xl sm:text-2xl text-left tracking-widest mt-80 mb-5`}
        >
          Dessa forma, buscamos oferecer desde melhorias em processos e sistemas até estratégias de eficiência e produtividade de equipe, através de implementações e expertise tecnológica alinhadas ao contexto organizacional de sua empresa.
        </h3>

        <h3
          className={`${MontTitle.className}  text-white text-xl sm:text-2xl text-left tracking-widest mt-10 mb-14`}
        >
          Através de nossa análise e trasnformação organizacional, auxiliamos sua empresa a  atingir:
        </h3>

        <div class="flex flex-col gap-4 mb-64  md:flex-row">
        <div className={`${MontTitle2.className}  bg-purple-900 p-10 text-center rounded-3xl text-xl md:text-2xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 `}>Redução de custos</div>
        <div className={`${MontTitle2.className} bg-purple-900 p-10 text-center rounded-3xl text-xl md:text-2xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 `}>Melhoria de processos</div>
        <div className={`${MontTitle2.className} bg-purple-900 p-10 text-center rounded-3xl text-xl md:text-2xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 `}>Aumento na produtividade</div>
        <div className={`${MontTitle2.className} bg-purple-900 p-10 text-center rounded-3xl text-xl md:text-2xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 `}>Qualidade em produtos</div>
        </div>
        </div>

      
        <section class="bg-white dark:bg-gray-900 pb-32 pt-32">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">COMO PODEMOS TE AJUDAR?</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Está com dúvidas? Nos contate para que possamos conversar um pouco mais!</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seu e-mail</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="seu-email@gmail.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Assunto</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Nos deixe saber em como te ajudar" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sua mensagem</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Descreva aqui suas duvidas"></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none border-2 border-white focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar</button>
      </form>
  </div>
</section>
    </main>
  );
}
