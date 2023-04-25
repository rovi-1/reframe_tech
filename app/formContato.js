import Image from 'next/image';
import styles from './page.module.css';
import { Orbitron } from 'next/font/google';
import { Montserrat } from 'next/font/google';
const orbitronTitle = Orbitron({
  subsets: ['latin'],
});
const MontTitle = Montserrat({
  subsets: ['latin'],
});

export default function Contato() {
  return (
    <section id="contato" class="bg-white dark:bg-gray-900 pb-32 pt-32">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        QUAL O SEU DESAFIO?
      </h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Nos contate para que possamos conversar um pouco
        mais!
      </p>
      <form action="#" class="space-y-8">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Seu e-mail
          </label>
          <input
            type="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Seu melhor e-mail"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="De um nome para o seu projeto"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Sua mensagem
          </label>
          <textarea
            id="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Descreva seu projeto"
          ></textarea>
        </div>
        <button
          type="submit"
          class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none border-2 border-white focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Enviar
        </button>
      </form>
    </div>
  </section>
  );
};