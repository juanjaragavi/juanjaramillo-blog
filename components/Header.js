import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from "./ThemeSwitcher";
import LogoJJ from '../assets/logo-header.png';

function Header() {
  return (
    <header className='flex flex-row justify-between px-8 pt-5 relative w-screen h-auto z-20'>
      <Link href='https://juanjaramillo.tech/' target='_self'>
        <a>
          <Image
            width={195}
            height={43}
            src={LogoJJ}
            alt='Juan Jaramillo | Prompt Engineer · Developer · AI and Machine Learning Expert'
            title='Juan Jaramillo | Prompt Engineer · Developer · AI and Machine Learning Expert'
          />
        </a>
      </Link>
      <Nav />
      <ThemeSwitcher className="-mt-3 p-0 rounded-full hover:ring-1 hover:ring-pink-500 hover:ring-offset-4 ring-offset-[#8F57CD] dark:ring-offset-[#2B195B] transition-all duration-300 ease-in-out" />
    </header>
  );
}

export default Header;
