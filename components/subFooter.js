import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Columna from '../components/Columna';
import LogoJJ from '../assets/logo-header.png';

function SubFooter() {
    const EmailJJ = () => {
        window.open('mailto:info@juanjaramillo.tech', '_parent');
    };
    const estiloPrimeraColumna = {
        border: 0,
        borderColor: 'white',
        borderRadius: 0,
        flexBasis: '50%;',
        margin: 0,
        padding: 0,
        justifyItems: 'center',
    };

    return (
        <footer className="grid place-items-center font-league-spartan text-center text-lg border border-gray-900 dark:border-white rounded-3xl md:px-3 md:pt-5 md:pb-5">
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row w-full justify-center items-center">
            <Columna style={estiloPrimeraColumna}>
            <h4 className="leading-[1rem] text-gray-900 text-sm sm:text-[1rem] 2xl:text-xl dark:text-white font-medium">
                © 2023{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hover:from-violet-500 hover:to-orange-500 font-bold">
                Juan Jaramillo
                </span>
            </h4>
            <p className="leading-[1rem] dark:text-white font-light text-sm sm:text-[1rem] sm:mt-0.5 2xl:mt-0.5 w-full">
                Todos los derechos reservados
            </p>
            </Columna>
            <div className='basis-1/2 flex flex-col items-center justify-center my-2 sm:mx-2 sm:w-full sm:px-3 pb-2 sm:pt-3 dark:border-white border-l-1 border-0 sm:border-l-2 sm:border-r-0 border-white rounded-none'>
            <a
                href={EmailJJ}
                onClick={EmailJJ}
                className="dark:text-pink-500 hover:scale-105 hover:underline hover:underline-offset-2 font-bold ml-0 group hover:cursor-pointer text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl transition-all duration-300 ease-in-out"
            >
                <svg
                className="fill-none w-[24px] h-[24px] stroke-2 stroke-pink-900 dark:stroke-pink-500 inline pb-0.5 mr-1 group-hover:scale-110 group-hover:stroke-pink-500 transition-all duration-300 ease-in-out"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
                </svg>
                info@juanjaramillo.tech
            </a>
            </div>
        </div>
        </footer>
    );
}
export default SubFooter;
