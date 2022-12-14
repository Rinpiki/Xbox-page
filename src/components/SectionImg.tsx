import React from 'react';
import oneText from '../imgs/games/onetext.png';
import twoText from '../imgs/games/twotext.png';
import threeText from '../imgs/games/threetext.png';
import fourText from '../imgs/games/fourtext.png';

function SectionImg() {
  return (
    <div className="flex flex-col space-y-8 mb-[90px] md:flex-wrap md:flex-row md:justify-center md:space-y-0 ">
      <div className="bg-one w-[312px] h-[497px] md:mr-10 md:mb-10 lg:mb-0 lg:mr-0 ">
        <img
          src={oneText}
          alt="titulo game farcry"
          className="w-[190px] h-[42px] mx-auto mt-[414px] "
        />
      </div>
      <div className="bg-two w-[312px] h-[493px] md:mb-10 lg:mb-0">
        <img
          src={twoText}
          alt="titulo game forza"
          className="w-[195px] h-[54px] mx-auto mt-[414px]"
        />
      </div>
      <div className="bg-three w-[312px] h-[497px] md:mr-10 lg:mb-0 lg:mr-0">
        <img
          src={threeText}
          alt="titulo game fifa"
          className="w-[130px] h-[42px] mx-auto mt-[434px]"
        />
      </div>
      <div className="bg-four w-[312px] h-[497px]">
        <img
          src={fourText}
          alt="titulo game minecraft"
          className="w-[195px] h-[32px] mx-auto mt-[444px]"
        />
      </div>
    </div>
  );
}

export default SectionImg;
