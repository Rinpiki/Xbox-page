import React from 'react';
import Accordion from './CompoFunction/Accordion';

function Perguntas() {
  return (
    <div className="flex flex-col ">
      <div>
        <span className="text-2xl font-semibold text-[#9BF00B]">Perguntas</span>
        <span className="text-[#FFFFFF] text-2xl font-semibold">
          frequentes
        </span>
        <Accordion />
      </div>
    </div>
  );
}

export default Perguntas;
