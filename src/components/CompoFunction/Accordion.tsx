/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import down from '../../imgs/icondown.svg';

interface props {
  pergunta: string;
  resposta: string;
}

function Accordion({ pergunta, resposta }: props) {
  const [open, setOpen] = useState(false);
  const set = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div>
        <div className="flex mt-10 mb-[21px] justify-between">
          <span className="text-xs  text-[#FFFFFF] mr-2 md:text-2xl">
            {pergunta}
          </span>
          <img src={down} alt="icone pra baixo" id="up" onClick={set} />
        </div>
        {open ? (
          <p className="text-xs text-[#C0C0C0] mb-[22px] md:text-lg">
            {resposta}
          </p>
        ) : null}
        <div className="bg-[#2E2E2E] w-full h-[2px] mb-[23px]"> </div>
      </div>
    </div>
  );
}

export default Accordion;
