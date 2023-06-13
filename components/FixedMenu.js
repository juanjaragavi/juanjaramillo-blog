import React from "react";
import GitHub from "../socialIcons/GitHub";
import Telegram from "../socialIcons/Telegram";
import LinkedIn from "../socialIcons/LinkedIn";
import WhatsApp from "../socialIcons/WhatsApp";
import Instagram from "../socialIcons/Instagram";

function FixedMenu() {
  const LinkGitHub = () => {
    window.open("https://github.com/juanjaragavi/cv-virtual", "_blank");
  };

  const LinkTelegram = () => {
    window.open("https://t.me/juanjaragavi", "_blank");
  };

  const LinkLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/juan-jaramillo-ai/",
      "_blank"
    );
  };
  const LinkInstagram = () => {
    window.open(
      "https://www.instagram.com/juanjaragavi/",
      "_blank"
    );
  };

  return (
    <div
      className="flex z-50 w-[100%] h-auto justify-between fixed bottom-0 left-0 p-6 bg-transparent"
    >
      <nav className="flex justify-start max-h-10">
        <ul className="flex cursor-pointer rounded-full p-1 justify-items-center justify-between border border-gray-900 dark:border-white hover:border-pink-500 dark:hover:border-pink-500 max-h-10 transition-all duration-300 ease-in-out hover:scale-105">
          <li onClick={LinkLinkedIn} className="px-2.5 hover:text-pink-500 transition-all duration-300 ease-in-out ml-2.5">
            <LinkedIn />
          </li>
          <li onClick={LinkGitHub} className="px-2.5 hover:text-pink-500 transition-all duration-300 ease-in-out">
            <GitHub />
          </li>
          <li
            onClick={LinkTelegram}
            className="px-2.5 hover:text-pink-500 transition-all duration-300 ease-in-out mr-2.5"
          >
            <Telegram />
          </li>
          <li
            onClick={LinkInstagram}
            className="px-2.5 hover:text-pink-500 transition-all duration-300 ease-in-out mt-[0.05em] -ml-1 mr-3"
          >
            <Instagram />
          </li>
        </ul>
      </nav>
      <div
        className="px-3 pb-20 -mb-24 pt-3 w-16 justify-end mr-3 rounded-t-full border border-gray-900 dark:border-white hover:border-pink-500 dark:hover:border-pink-500"
      >
        <WhatsApp />
      </div>
    </div>
  );
}

export default FixedMenu;
