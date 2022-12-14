import React from 'react';
import control from '../imgs/controle-xbox.svg';

function SectionControl() {
  return (
    <div className="mt-[58px] w-11/12 flex flex-col items-center md:flex-row text-left md:justify-between mb-[90px] lg:mt-[200px]">
      <div className="text-[24px] text-center font-semibold text-[#9BF00B] md:text-[42px] md:text-left md:mr-10 lg:text-[64px] lg:mr-40 lg:mb-14">
        Desempenho
        <span className="block text-[#FFFFFF] md:-mt-2 lg:-mt-7 ">
          aperfeiçoado
        </span>
        <p className="text-[#C0C0C0] mt-6 text-sm font-medium md:text-xl lg:text-[28px]">
          O controle sem fio Xbox traz um design elegante, conforto refinado e
          compartilhamento instantâneo para um favorito comum.
        </p>
      </div>
      <img
        src={control}
        alt="controle xbox"
        className="w-[207px] h-[144px] mt-12 md:my-auto md:w-[450px] md:h-[200px] lg:w-[500px] lg:h-[300px]"
      />
    </div>
  );
}

export default SectionControl;
