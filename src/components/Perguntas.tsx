import React from 'react';
import Accordion from './CompoFunction/Accordion';
import Footer from './Footer';

function Perguntas() {
  return (
    <div className="flex flex-col w-10/12 lg:w-11/12">
      <div>
        <span className="text-2xl mr-2 font-semibold text-[#9BF00B] md:text-4xl">
          Perguntas
        </span>
        <span className="text-[#FFFFFF] text-2xl font-semibold md:text-4xl">
          frequentes
        </span>
        <Accordion
          pergunta="Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?"
          resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Accordion
          pergunta="O que está incluído no Xbox Series X?"
          resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Accordion
          pergunta="Como sei se minha TV é compatível com 4K?"
          resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <Footer />
    </div>
  );
}

export default Perguntas;
