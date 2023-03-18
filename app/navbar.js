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
        <div class="flex flex-wrap items-center mt-10 justify-evenly">
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
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className={`${orbitronTitle.className} block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white`}
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="sobre"
                  class={`${orbitronTitle.className} block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class={`${orbitronTitle.className} block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Soluções
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class={`${orbitronTitle.className} block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Parceiros
                </a>
              </li>
            </ul>
          </div>
          <button className="bg-transparent hover:bg-white hover:text-indigo-900 mt-10 w-48 h-10 rounded text-white border mb-10">
            Fale conosco
          </button>
        </div>
      </nav>
    </main>
  );
}
