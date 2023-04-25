import Image from 'next/image';
import styles from './page.module.css';
import { Orbitron } from 'next/font/google';
const orbitronTitle = Orbitron({
  subsets: ['latin'],
});


export default function Navbar() {
  return (
    <main className={styles.main}>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-transparent ">
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
              REFRAME
            </span>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
           
          </div>
            <button  className="bg-transparent hidden md:inline-block hover:bg-white hover:text-indigo-900 mt-10 w-48 h-10 rounded text-white border mb-10">
    Fale conosco
  </button>
        </div>
      </nav>
    </main>
  );
};