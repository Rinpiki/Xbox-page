import React from 'react';
import logo from '../imgs/logo.svg';

function Header() {
  return (
    <header className="items-center flex flex-col md:flex-row md:mt-5 md:w-full md:justify-between md:content-center md:self-center">
      <img
        src={logo}
        alt="xbox"
        className="my-[24px] mx-auto md:my-0 md:mx-0 md:w-24 lg:w-32"
      />
      <ul
        id="ul"
        className="text-[8px] mb:text-[10px] text-white flex space-x-5 md:space-x-9"
      >
        <li className="bg-[#67676763] cursor-pointer py-[6px] px-[10px] rounded-2xl md:py-0 md:px-0 md:bg-inherit">
          VISÃO GERAL
        </li>
        <li className="bg-[#67676763] cursor-pointer py-[6px] px-[10px] rounded-2xl md:py-0 md:px-0 md:bg-inherit">
          JOGOS
        </li>
        <li className="bg-[#67676763] cursor-pointer py-[6px] px-[10px] rounded-2xl md:py-0 md:px-0 md:bg-inherit">
          GALERIA
        </li>
        <li className="bg-[#67676763] cursor-pointer py-[6px] px-[10px] rounded-2xl md:py-0 md:px-0 md:bg-inherit">
          UNBOX
        </li>
      </ul>
      <div
        id="btn"
        className="text-xs py-3 px-[78px] bg-[#9AF10C] mt-[56px] md:mt-0 md:px-[30px] text-[#0C0C0C] font-extrabold text-center"
      >
        VER DISPONIBILIDADE
      </div>
    </header>
  );
}

export default Header;
