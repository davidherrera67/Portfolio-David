import Link from "next/link";
import React from "react";
import { ImCross } from "react-icons/im";

{/* Interface for Animation of Navbar in Mobile Resolution*/} 
interface PropsNavbar {
    showNavbar:boolean;
    closeNavbar: () => void;
}
const MobileNavbar = ({closeNavbar,showNavbar}:PropsNavbar) => {

    const navOpen = showNavbar ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} top-0 transform transition-all duration-500 z-[10000] left-0 right-0 
        bottom-0 bg-black opacity-70 w-full h-[100vh]`}
        ></div>
      {/* NavLinks */}
      <ul
        className={`text-white ${navOpen} fixed flex top-0 items-center justify-center flex-col 
            h-[100vh] transform transition-all duration-300 delay-300 w-[80%] sm:w-[60%]
            bg-blue-500 space-y-10 z-[10006]`}>
        <li className="navlink text-[25px] sm:text-[30px]">
          <Link href="#">Home</Link>
        </li>
        <li className="navlink text-[25px] sm:text-[30px]">
          <Link href="#">Sobre Mí</Link>
        </li>
        <li className="navlink text-[25px] sm:text-[30px]">
          <Link href="#">Proyectos</Link>
        </li>
        <li className="navlink text-[25px] sm:text-[30px]">
          <Link href="#">Tecnologías</Link>
        </li>
        <li className="navlink text-[25px] sm:text-[30px]">
          <Link href="#">Experiencia</Link>
        </li>
        <li className="navlink text-[25px] sm:text-[30px]">
          <Link href="#">Contacto</Link>
        </li>
        {/* Close navbar icon */}
        <ImCross 
        onClick={closeNavbar} className="cursor-pointer absolute top-[-1.4rem] right-[+1.4rem] w-[-1.4rem] h-[-1.4rem] text-white" />
      </ul>
    </div>
  );
};

export default MobileNavbar;
