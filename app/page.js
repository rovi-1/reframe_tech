import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './navbar'
import { Orbitron } from 'next/font/google'
import { Montserrat } from 'next/font/google'
const orbitronTitle = Orbitron({ 
    subsets: ['latin'],

  })

  const MontTitle = Montserrat({ 
    subsets: ['latin'],
  })

export default function Home() {
  return (
    
    <main className={styles.main}>
      <div id="bg" className='pb-20 '>
      <Navbar />
      <div className='ml-10 md:ml-64 mt-10 md:mt-28 mr-10 md:mr-64 justify-center flex flex-col mb-auto md:mb-72 '>
      <h1 className={`${orbitronTitle.className} text-transparent justify-center text-left flex flex-row text-white md:bg-clip-text md:bg-gradient-to-r from-white md:text-8xl text-2xl  mb-10 animate-pulse`}>Transforme seus desafios em soluções </h1> 
      <h3 className={`${MontTitle.className} text-white justify-center  text-2xl lg:text-2xl md:text-4xl flex flex-row text-justify`}>Na Reframe, fornecemos soluções personalizadas para o crescimento da sua empresa através de consultoria, desenvolvimento de software e análise de dados.</h3>
      <button className='bg-transparent  hover:bg-white hover:text-indigo-900 mt-10 w-48 h-10 rounded text-white border animate-bounce '>Saiba mais</button>
      </div>
      </div>
      <div className='md:mt-96 md:mr-56 md:mb-96 md:ml-56 mt-10 ml-14 mr-14 flex flex-row justify-center '>
        <span className={`${orbitronTitle.className}  text-white text- sm:text-2xl mt-10`} >Entendemos que cada negócio é único, com seus próprios desafios e oportunidades. É por isso que nossa consultoria organizacional é altamente personalizada e visa entender de perto as dificuldades que sua empresa enfrenta. A partir daí, desenvolvemos soluções inovadoras e certeiras para ajudá-lo a alcançar seus objetivos e desbloquear seu potencial máximo.</span>
        </div>
        <div className='mt-40'> </div>
      <div className='mt-24 ml-10 mr-10  md:ml-32 md:mr-32 h-96 justify-center flex flex-col md:flex-row'>
        <div id="bg_1" className=' md:mr-12 w-1/2 md:w-1/2 h-96  md:h-auto rounded-3xl'></div>
        <div className='mt-10 flex flex-col w-1/2'>
        <h3 className={`${orbitronTitle.className} text-left  text-white text-2xl md:text-4xl`}>Desbloqueamos todo o potencial  da sua empresa, de maneira personalizada</h3>
        <span className={`${orbitronTitle.className} text-left  text-white text- md:text-2xl mt-10`} >Entendemos que cada negócio é único, com seus  próprios desafios e oportunidades. É por isso que  nossa consultoria organizacional é altamente personalizada e visa entender de perto as dificuldades que sua empresa enfrenta. A partir  daí, desenvolvemos soluções inovadoras e certeiras para ajudá-lo a alcançar seus objetivos e desbloquear seu potencial máximo.</span>
        </div>
      </div>
      <div className='mt-32 ml-10 mr-10 md:ml-32 md:mr-32 h-96 justify-center flex flex-col md:flex-row'>
        <div className='mt-10 flex flex-col w-1/2'>
        <h3 className={`${orbitronTitle.className} text-left  text-white text-2xl md:text-4xl`}>Softwares inteligentes epersonalizados ao seu alcance</h3>
        <span className={`${orbitronTitle.className} text-left text-white text- md:text-2xl mt-10`} >Entendemos que cada negócio é único, com seus  próprios desafios e oportunidades. É por isso que  nossa consultoria organizacional é altamente personalizada e visa entender de perto as dificuldades que sua empresa enfrenta. A partir  daí, desenvolvemos soluções inovadoras e certeiras para ajudá-lo a alcançar seus objetivos e desbloquear seu potencial máximo.</span>
        </div>
        <div id="bg_1" className=' md:ml-12 w-3/3 md:w-1/2 h-96  md:h-auto rounded-3xl'></div>
      </div>
      <div className='mt-32 ml-10 mr-10 md:ml-32 md:mr-32 h-96 justify-center flex flex-col md:flex-row'>
        <div id="bg_1" className=' md:mr-12 w-3/3 md:w-1/2  md:h-auto rounded-3xl'></div>
        <div className='mt-10 flex flex-col w-1/2 '>
        <h3 className={`${orbitronTitle.className} text-left  text-white text-2xl md:text-4xl`}>Transformamos dados em ação</h3>
        <span className={`${orbitronTitle.className} text-left text-white text- md:text-2xl mt-10`} >Transformamos suas ideias em realidade com nossas soluções personalizadas de  desenvolvimento de  software. Com uma abordagem colaborativa e ágil, estamos prontos para ajudá-lo a atingir seus objetivos e se destacar no mercado.</span>
        </div>
      </div>
  
      <div className='pb-20'></div>
    </main>
  )
}
