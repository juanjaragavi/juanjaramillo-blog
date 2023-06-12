import Nav from './Nav';
import Link from 'next/link';
import LogoJJComp from './logoJJComp';
import HeaderMovil from './HeaderMovil';
import ThemeSwitcher from './ThemeSwitcher';

function Header() {
  return (
    <div>
      <HeaderMovil />
      <header className="invisible sm:visible md:visible flex flex-row justify-between px-8 pt-5 relative w-screen h-auto z-20">
        <Link href="https://juanjaramillo.tech/" target="_self">
          <a>
          <LogoJJComp />
          </a>
        </Link>
        <Nav />
        <ThemeSwitcher className="invisible sm:visible md:visible -mt-3 p-0 rounded-full hover:ring-1 hover:ring-pink-500 hover:ring-offset-4 ring-offset-[#8F57CD] dark:ring-offset-[#2B195B] transition-all duration-300 ease-in-out" />
      </header>
    </div>
  );
}

export default Header;
