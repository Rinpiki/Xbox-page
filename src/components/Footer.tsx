import React from 'react';
import xbox from '../imgs/logo.svg';

function Footer() {
  return (
    <footer className="flex items-center justify-between  mt-[34px] mb-[28px] lg:mb-[92px] ">
      <img
        src={xbox}
        alt="logo xbox"
        className="w-[83px] h-[25px] md:w-[144px] md:h-[44px]"
      />
      <div className="text-xs text-[#777777] md:text-lg lg:flex lg:space-x-12">
        <p>© Microsoft 2022</p>
        <p>Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
