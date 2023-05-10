import Image from 'next/image';
import styles from './page.module.css';
import { Orbitron } from 'next/font/google';
import { Montserrat } from 'next/font/google';


export const Header = () => {
  const router = useRouter();
}
const orbitronTitle = Orbitron({
  subsets: ['latin'],
});
const MontTitle = Montserrat({
  subsets: ['latin'],
});

export default function Navbar() {
  return (
    <main className={styles.main}>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-transparent  ">
        <div class="flex flex-wrap items-center mt-10 justify-center md:justify-between md:mr-64 md:ml-64">
          <a href="/" class="flex items-   mr-10">
            <img
              src="/logo.png"
              className={`${orbitronTitle.className} h-9 mr-3 sm:h-9l`}
              alt="REFRAME Logo"
            />
            <span
              className={`${orbitronTitle.className} self-center text-xl font-semibold whitespace-nowrap dark:text-white`}
            >
              SKYFRAME
            </span>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a  href='/' className={`${MontTitle.className} [&.active]:text-white block py-2 pl-3 pr-4 text-gray-700 bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white`} aria-current="page">Inicio</a>
        </li>
        <li>
          <a  href='/' className={`${MontTitle.className} [&.active]:text-white-500 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Serviços</a>
        </li>
        <li>
          <a  href='/' className={`${MontTitle.className}  [&.active]:text-white-500 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Projetos</a>
        </li>
        <li>
          <a  href='/' className={`${MontTitle.className}  [&.active]:text-white-500 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Sobre</a>
        </li>
      </ul>
    </div>
          </div>
            <button  className="bg-transparent hidden md:inline-block hover:bg-white hover:text-indigo-900 mt-10 w-48 h-10 rounded text-white border mb-10">
    Fale conosco
  </button>
        </div>
      </nav>
    </main>
  );
};