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
      <div id="bg" className='pb-20'>
      <Navbar />
      <div className='ml-10 md:ml-64 mt-10 md:mt-28 mr-10 md:mr-64 justify-center flex flex-col mb-auto md:mb-72'>
      <h1 className={`${orbitronTitle.className} text-transparent text-white md:bg-clip-text md:bg-gradient-to-r from-white md:text-8xl text-2xl  mb-10`}>Transforme seus desafios em soluções </h1> 
      <h3 className={`${MontTitle.className} text-white text-2xl lg:text-2xl md:text-4xl flex flex-row text-justify`}>Na Reframe, fornecemos soluções personalizadas para o crescimento da sua empresa através de consultoria, desenvolvimento de software e análise de dados.</h3>
      <button className='bg-transparent hover:bg-white hover:text-indigo-900 mt-10 w-48 h-10 rounded text-white border'>Saiba mais</button>
      </div>
      </div>
      <div className='md:mt-56 md:mr-56 md:mb-56 md:ml-56 ml-14 mr-14 flex flex-row justify-center '>
        <span className={`${orbitronTitle.className}  text-white text- sm:text-2xl mt-10`} >Entendemos que cada negócio é único, com seus próprios desafios e oportunidades. É por isso que nossa consultoria organizacional é altamente personalizada e visa entender de perto as dificuldades que sua empresa enfrenta. A partir daí, desenvolvemos soluções inovadoras e certeiras para ajudá-lo a alcançar seus objetivos e desbloquear seu potencial máximo.</span>
        </div>
      <div className='mt-40 justify-center flex flex-row'>
        <div id="bg_1" className='ml-10 mr-5 md:mr-32 w-0 md:w-1/3  rounded-3xl'></div>
        <div className='flex flex-col mr-10'>
        <h3 className={`${orbitronTitle.className}  text-white text-2xl md:text-4xl`}>Desbloqueamos todo o <br/>  potencial  da sua empresa, de <br/>  maneira personalizada</h3>
        <span className={`${orbitronTitle.className}  text-white text- md:text-2xl mt-10`} >Entendemos que cada negócio é único, com seus <br/>  próprios desafios e oportunidades. É por isso que <br/>  nossa consultoria organizacional é altamente <br/> personalizada e visa entender de perto as <br/> dificuldades que sua empresa enfrenta. A partir <br/>  daí, desenvolvemos soluções inovadoras e <br/>  certeiras para ajudá-lo a alcançar seus objetivos e <br/> desbloquear seu potencial máximo.</span>
        </div>
      </div>
      <div className='mt-40 justify-center flex flex-row'>
        <div className='ml-14 flex flex-col md:mr-32'>
        <h3 className={`${orbitronTitle.className}  text-white text-2xl md:text-4xl`}>Softwares inteligentes e <br/> personalizados ao seu alcance</h3>
        <span className={`${orbitronTitle.className}  text-white text- md:text-2xl mt-10`} >Transformamos suas ideias em realidade com <br/> nossas soluções personalizadas de <br/> desenvolvimento de  software. Com uma <br/> abordagem colaborativa e ágil, estamos prontos <br/> para ajudá-lo a atingir seus objetivos e se <br/> destacar no mercado.</span>
        </div>
        <div id="bg_1" className=' mr-5 md:mr-32 w-0 md:w-1/3  rounded-3xl'></div>
      </div>
      <div className='mt-40 justify-center flex flex-row'>
        <div id="bg_1" className='ml-10 mr-5 md:mr-32 w-0 md:w-1/3  rounded-3xl'></div>
        <div className='flex flex-col mr-10'>
        <h3 className={`${orbitronTitle.className}  text-white text-2xl md:text-4xl`}>Transformamos dados em ação</h3>
        <span className={`${orbitronTitle.className}  text-white text- md:text-2xl mt-10`} >Entendemos que cada negócio é único, com seus <br/> próprios desafios e oportunidades. É por isso que <br/> nossa consultoria organizacional é altamente <br/> personalizada e visa entender de perto as <br/> dificuldades que sua empresa enfrenta. A partir <br/> daí, desenvolvemos soluções inovadoras e certeiras <br/> para ajudá-lo a alcançar seus objetivos e <br/> desbloquear seu potencial máximo.</span>
        </div>
      </div>
      <div className='pb-20'></div>
    </main>
  )
}
