import React from 'react';
import xbox from '../imgs/xbox.png';
import deskbox from '../imgs/deskbox.png';

function Section() {
  return (
    <section className="mt-6 md:mt-[100px] flex justify-center flex-col">
      <div className="block text-center">
        <h1 className="text-4xl text-white font-semibold md:text-5xl lg:text-7xl">
          Xbox series X
        </h1>
        <p className="text-[#9BF00B] mb-1 text-base mt-1 font-semibold md:text-base md:mt-4 lg:text-2xl">
          PEDIDO ANTECIPADO
        </p>
      </div>
      <img id="xbox" src={xbox} alt="imagem de xbox" className="md:hidden" />
      <img
        id="xbox"
        src={deskbox}
        alt="imagem de xbox"
        className="hidden md:block"
      />
    </section>
  );
}

export default Section;
