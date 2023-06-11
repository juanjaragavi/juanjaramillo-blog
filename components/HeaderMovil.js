import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import LogoJJ from '../assets/logo-header.png';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

function HeaderMovil() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);
  const whatsAppWeb = (callback) => {
    window.open('https://wa.link/9emctf/', '_blank');
    if (callback) {
      callback();
    }
  };
  const handleWhatsAppClick = () => {
    setActiveComponent(null);
    whatsAppWeb(() => setIsOpen(!isOpen));
  };
  const JuanJaramillo = () => {
    window.open('https://juanjaramillo.tech/', '_self');
  };
  const linkBlog = () => {
    window.open('https://blog.juanjaramillo.tech/', '_self');
  };
  const logoCentrado = {
    margin: 0,
    padding: 0,
  };

  return (
    <div className="pt-24 sm:pt-0 md:pt-0 flex justify-center">
      <div className="h-auto w-auto sm:max-h-1 md:max-h-1 visible sm:invisible md:invisible">
        <Image
          style={logoCentrado}
          width={195}
          height={43}
          src={LogoJJ}
          alt="Juan Jaramillo | Prompt Engineer · Developer · AI and Machine Learning Expert"
          title="Juan Jaramillo | Prompt Engineer · Developer · AI and Machine Learning Expert"
        />
      </div>
      <div
        className="z-40 grid place-items-center absolute top-0 pt-2 w-full visible sm:invisible md:invisible lg:invisible xl:invisible 2xl:invisible bg-transparent"
        initial="initial"
        transition={{
          type: 'tween',
          duration: 0.5,
          delay: 1.5,
        }}
      >
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          className="font-league-spartan font-bold relative z-50"
        >
          <motion.button
            className="flex flex-row mt-5 bg-transparent font-league-spartan font-bold text-xl border border-gray-900 dark:border-white rounded-full py-2"
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="text-xl pt-0.5 pl-5 text-gray-900 dark:text-white text-left w-64">
              Menú de Navegación
            </p>
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.4 }}
              style={{ originY: 0.55, originX: 0.28 }}
            >
              <div className="pr-4 pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-circle-chevron-down stroke-gray-900 stroke-1 dark:stroke-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M15 11l-3 3l-3 -3"></path>
                  <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z"></path>
                </svg>
              </div>
            </motion.div>
          </motion.button>
          <motion.ul
            className="pt-5 px-5 pb-0 text-gray-900 dark:text-white text-xl mt-2 border border-gray-900 dark:border-white rounded-3xl backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-60 sm:bg-opacity-20 bg-opacity-90"
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: 'inset(0% 0% 100% 0% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          >
            <motion.li
              className="py-2"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05, textDecoration: 'underline' }}
              variants={itemVariants}
              style={{ cursor: 'pointer' }}
              onClick={() => setIsOpen(!isOpen)}
              onTap={JuanJaramillo}
            >
              Inicio
            </motion.li>
            <motion.li
              className="py-2"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05, textDecoration: 'underline' }}
              variants={itemVariants}
              style={{ cursor: 'pointer' }}
              onTap={() => setActiveComponent(null)}
              onClick={linkBlog}
            >
              Blog
            </motion.li>
            <motion.li
              className="py-2"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05, textDecoration: 'underline' }}
              variants={itemVariants}
              style={{ cursor: 'pointer' }}
              onTap={() => setActiveComponent(null)}
              onClick={handleWhatsAppClick}
            >
              Contacto
            </motion.li>
            <div className="rounded-full mt-2 mb-5 h-[0.06rem] w-full bg-gray-900 dark:bg-white"></div>
            <ThemeSwitcher className="mb-5 rounded-full hover:ring-1 hover:ring-pink-500 hover:ring-offset-4 ring-offset-[#999999] dark:ring-offset-[#2B195B] transition-all duration-300 ease-in-out" />
          </motion.ul>
        </motion.nav>
      </div>
    </div>
  );
}

export default HeaderMovil;
