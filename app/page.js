import Image from 'next/image'
import { Orbitron } from 'next/font/google'
import styles from './page.module.css'
import Navbar from './navbar'

const orbitronTitle = Orbitron({ 
  subsets: ['latin'],
  variable: '--orbitron-font'
})

export default function Home() {
  return (
    
    <main className={styles.main}>
      <Navbar />
      <div className='m-10'>
      <h1 className={`${orbitronTitle.variable} text-indigo-700 text-4xl md:text-8xl mb-10`}>Transforme seus <br/> desafios em soluções </h1> 
      <h3 className={`${orbitronTitle.variable} text-white text-2xl md:text-4xl flex flex-row`}>Na Reframe, fornecemos soluções personalizadas para o crescimento da <br/> sua empresa através de consultoria, desenvolvimento de software e <br/> análise de dados. Oferecemos inovação através de uma abordagem <br/> integrada para impulsionar o crescimento do seu negócio.</h3>
      <button className='bg-indigo-700 mt-10 w-48 h-10 rounded text-white border'>Saiba mais</button>
      </div>
      <div className='mt-20 justify-center flex flex-row '>
        <div className='w-1/3 bg-indigo-700 ml-10 mr-5 md:mr-32 rounded-3xl md:ml-0'></div>
        <div className='flex flex-col mr-10'>
        <h3 className={`${orbitronTitle.variable}  text-white text-2xl md:text-4xl`}>Desbloqueamos todo o potencial  da <br/> sua empresa, de maneira <br/>  personalizada </h3>
        <span className={`${orbitronTitle.variable}  text-white text- md:text-2xl mt-10`} >Entendemos que cada negócio é único, com seus <br/> próprios desafios e oportunidades. É por isso que <br/> nossa consultoria organizacional é altamente <br/> personalizada e visa entender de perto as <br/> dificuldades que sua empresa enfrenta. A partir <br/> daí, desenvolvemos soluções inovadoras e certeiras <br/> para ajudá-lo a alcançar seus objetivos e <br/> desbloquear seu potencial máximo.</span>
        </div>
      </div>
      <div className='mt-20 justify-center flex flex-row '>
      <div className='flex flex-col mr-10'>
        <h3 className={`${orbitronTitle.variable}  text-white text-2xl md:text-4xl`}>Softwares inteligentes e <br/> personalizados ao seu  <br/>  alcance </h3>
        <span className={`${orbitronTitle.variable}  text-white text- md:text-2xl mt-10`} > Transformamos suas ideias em realidade  <br/> com nossas soluções personalizadas de  <br/> desenvolvimento de software. Com uma  <br/> abordagem colaborativa e ágil, estamos  <br/> prontos para ajudá-lo a atingir seus objetivos  <br/> e se destacar no mercado.</span>
        </div>
        <div className='w-1/3 bg-indigo-700 ml-10 mr-5 md:ml-32 rounded-3xl '></div>
      </div>
      <div className='mt-20 justify-center flex flex-row mb-20   '>
        <div className='w-1/3 bg-indigo-700 ml-10 mr-5 md:mr-32 rounded-3xl md:ml-0'></div>
        <div className='flex flex-col mr-10'>
        <h3 className={`${orbitronTitle.variable}  text-white text-2xl md:text-4xl`}>Transformamos dados em ação</h3>
        <span className={`${orbitronTitle.variable}  text-white text- md:text-2xl mt-10`} >Entendemos que cada negócio é único, com seus <br/> próprios desafios e oportunidades. É por isso que <br/> nossa consultoria organizacional é altamente <br/> personalizada e visa entender de perto as <br/> dificuldades que sua empresa enfrenta. A partir <br/> daí, desenvolvemos soluções inovadoras e certeiras <br/> para ajudá-lo a alcançar seus objetivos e <br/> desbloquear seu potencial máximo.</span>
        </div>
      </div>
    </main>
  )
}
