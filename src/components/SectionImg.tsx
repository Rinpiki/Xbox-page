import oneText from '../imgs/games/onetext.png'
import twoText from '../imgs/games/twotext.png'
import threeText from '../imgs/games/threetext.png'
import fourText from '../imgs/games/fourtext.png'

function SectionImg() {
  return (
    <div className="mb-[90px] flex flex-col space-y-8 md:flex-row md:flex-wrap md:justify-center md:space-y-0 ">
      <div className="h-[497px] w-[312px] bg-one md:mb-10 md:mr-10 lg:mb-0 lg:mr-0 ">
        <img
          src={oneText}
          alt="titulo game farcry"
          className="mx-auto mt-[414px] h-[42px] w-[190px] "
        />
      </div>
      <div className="h-[493px] w-[312px] bg-two md:mb-10 lg:mb-0">
        <img
          src={twoText}
          alt="titulo game forza"
          className="mx-auto mt-[414px] h-[54px] w-[195px]"
        />
      </div>
      <div className="h-[497px] w-[312px] bg-three md:mr-10 lg:mb-0 lg:mr-0">
        <img
          src={threeText}
          alt="titulo game fifa"
          className="mx-auto mt-[434px] h-[42px] w-[130px]"
        />
      </div>
      <div className="h-[497px] w-[312px] bg-four">
        <img
          src={fourText}
          alt="titulo game minecraft"
          className="mx-auto mt-[444px] h-[32px] w-[195px]"
        />
      </div>
    </div>
  )
}

export default SectionImg
