import React from 'react';
import Link from 'next/link';
import { motion, useAnimationControls } from 'framer-motion';

function Nav({ setMoveItems }) {
    const controls = useAnimationControls();
    const Home = () => {
        window.open('https://juanjaramillo.tech/', '_self');
    };
    const WhatsApp = () => {
        window.open('https://wa.link/9emctf/', '_self');
    };

    return (
        <div>
        <nav className="invisible sm:visible md:visible lg:visible xl:visible 2xl:visible opacity-95 dark:opacity-80 bg-gray-900 dark:bg-white rounded-full hover:ring-1 hover:ring-pink-500 hover:ring-offset-4 ring-offset-[#6B42BE] dark:ring-offset-[#2B2665] transition-all duration-300 ease-in-out">
            <ul className="flex text-lg font-bold font-league-spartan px-5 space-x-4 align-middle py-1.5">
            <motion.li
                onClick={Home}
                className="text-center text-white dark:text-gray-900 px-2 cursor-pointer dark:hover:text-white z-50 min-w-[6rem] max-w-[6.1rem] transition-all duration-300 ease-in-out"
                whileHover={() => {
                controls.start({
                    x: 12,
                    opacity: 1,
                    transition: { duration: 0.3 },
                });
                }}
                onHoverEnd={() => {
                controls.start({
                    opacity: 0,
                    transition: { duration: 0.3 },
                });
                }}
            >
                Inicio
            </motion.li>
            <Link href="/">
                <motion.li
                className="text-center text-white dark:text-gray-900 px-2 cursor-pointer dark:hover:text-white z-50 min-w-[6rem] max-w-[6.1rem] transition-all duration-300 ease-in-out"
                whileHover={() => {
                    controls.start({
                    x: 124,
                    opacity: 1,
                    transition: { duration: 0.3 },
                    });
                }}
                onHoverEnd={() => {
                    controls.start({
                    opacity: 0,
                    transition: { duration: 0.3 },
                    });
                }}
                >
                Blog
                </motion.li>
            </Link>
            <motion.li
                onClick={WhatsApp}
                className="text-center text-white dark:text-gray-900 px-2 cursor-pointer dark:hover:text-white z-50 min-w-[6rem] max-w-[6.1rem] transition-all duration-300 ease-in-out"
                whileHover={() => {
                controls.start({
                    x: 236,
                    opacity: 1,
                    transition: { duration: 0.3 },
                });
                }}
                onHoverEnd={() => {
                controls.start({
                    opacity: 0,
                    transition: { duration: 0.3 },
                });
                }}
            >
                Contacto
            </motion.li>
            </ul>
            <motion.div
            className="border-2 border-gray-800 dark:border-white rounded-full bg-[#FF00A1] w-28 h-10 -mt-10"
            animate={controls}
            initial={{ x: 12, opacity: 0 }}
            ></motion.div>
        </nav>
        </div>
    );
}

export default Nav;
