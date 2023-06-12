import React from 'react';
import Image from 'next/image';
import LogoJJImg from '../assets/logo-header.png';
import LogoJJImgDark from '../assets/logo-header-light.png';

function LogoJJComp() {
    return (
        <div className="ml-[40%] dark:mb-4 sm:m-0 p-0 w-100 flex flex-col dark:flex-col-reverse">
            <div className="mb-5 dark:mb-0 visible dark:invisible dark:h-0 dark:w-0 mt-0 relative w-44 h-[2.3rem] sm:w-[12rem] sm:h-[2.5rem] 2xl:mr-24">
                <Image
                width={195}
                height={43}
                src={LogoJJImgDark}
                alt="Juan Jaramillo | Prompt Engineer · Developer · AI and Machine Learning Expert"
                title="Juan Jaramillo | Prompt Engineer · Developer · AI and Machine Learning Expert"
                />
            </div>
            <div className="dark:visible invisible h-0 w-0 m-0 p-0 dark:mt-0 relative dark:w-44 dark:h-[2.3rem] dark:sm:w-[12rem] dark:sm:h-[2.5rem] dark:2xl:mr-24">
                <Image
                width={195}
                height={43}
                src={LogoJJImg}
                alt="Juan Jaramillo | Prompt Engineer · Developer · AI and Machine Learning Expert"
                title="Juan Jaramillo | Prompt Engineer · Developer · AI and Machine Learning Expert"
                />
            </div>
        </div>
    );
}

export default LogoJJComp;
