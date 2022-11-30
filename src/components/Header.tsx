import React from 'react';
import logo from '../imgs/logo.svg';

function Header() {
  return (
    <header className="flex-col items-center">
      <img src={logo} alt="xbox" className="my-[24px] mx-auto" />
      <ul className="text-[8px] mmb:text-[10px] text-white flex space-x-5">
        <li className="bg-[#67676763] py-[6px] px-[10px] rounded-2xl">
          VISÃO GERAL
        </li>
        <li className="bg-[#67676763] py-[6px] px-[10px] rounded-2xl">JOGOS</li>
        <li className="bg-[#67676763] py-[6px] px-[10px] rounded-2xl">
          GALERIA
        </li>
        <li className="bg-[#67676763] py-[6px] px-[10px] rounded-2xl">UNBOX</li>
      </ul>
      <div className="text-xs mbb:text-sm py-3 px-[70px] mmb:px-[90px] bg-[#9AF10C] mt-[56px] text-[#0C0C0C] font-bold text-center">
        VER DISPONIBILIDADE
      </div>
    </header>
  );
}

export default Header;
