import Link from "next/link";
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

{/* Interface for Animation of Navbar in desktop resolution*/} 
interface PropsNavbar {
    openNavbar: () => void
}


const Navbar = ({openNavbar}:PropsNavbar) => {
  return (
    <div className="h-[11vh] bg-[#081414e5]">
      <div className="flex items-center justify-between mx-auto w-[90%] xl:w-[80%] lg:w-[95%] h-full">
        {/* Add text on top left Navbar as a Logo*/}
        <div className="text-white font-semibold lg:text-[30px] lg:mr-5 xl:text-[40px] md:text-[20px]">
          <span className="text-blue-400">D</span>A
          <span className="text-blue-400">V</span>I
          <span className="text-blue-400">D</span>
        </div>
        {/* Add the Nav Links */}
        <ul className="lg:flex hidden text-white items-center space-x-6 xl:space-x-10">
          <li className="navlink">
            <Link href="#">Home</Link>
          </li>
          <li className="navlink">
            <Link href="#">Sobre Mí</Link>
          </li>
          <li className="navlink">
            <Link href="#">Proyectos</Link>
          </li>
          <li className="navlink">
            <Link href="#">Tecnologías</Link>
          </li>
          <li className="navlink">
            <Link href="#">Experiencia</Link>
          </li>
          <li className="navlink">
            <Link href="#">Contacto</Link>
          </li>
        </ul>
        {/* Donwload CV Button*/}
        <div className="flex space-x-3 items-center">
          <Link href="/images/CV+DavidH.pdf" target="_blank" download="CV">
            <button
              className=" lg:ml-2 group relative h-12 w-48 overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
            py-3 px-6 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 
            hover:shadow-xl focus:outline-none after:content-[''] after:absolute after:bg-white after:opacity-20 
            after:h-full after:w-full after:rounded-full after:scale-0 
            after:hover:scale-100 after:transition-transform after:duration-500 
            after:top-0 after:left-0 after:origin-center flex"
            >
              Descargar CV
              <FaFileDownload className="ml-2 mt-1" />
            </button>
          </Link>
          {/* Mobile menu */}
          <HiBars3BottomRight 
          onClick={openNavbar} className="cursor-pointer lg:hidden text-white w-[2rem] h-[2rem]"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
