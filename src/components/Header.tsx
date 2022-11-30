import React from 'react';
import logo from '../imgs/logo.svg';

function Header() {
  return (
    <header className="flex-col items-center">
      <img src={logo} alt="xbox" className="my-[24px] mx-auto" />
      <ul className="text-[9px] text-white flex space-x-5">
        <li className="bg-[#67676763] py-[6px] px-[10px] rounded-2xl">
          visão geral
        </li>
        <li className="bg-[#67676763] py-[6px] px-[10px] rounded-2xl">JOGOS</li>
        <li className="bg-[#67676763] py-[6px] px-[10px] rounded-2xl">
          GALERIA
        </li>
        <li className="bg-[#67676763] py-[6px] px-[10px] rounded-2xl">UNBOX</li>
      </ul>
    </header>
  );
}

export default Header;
