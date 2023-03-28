import control from '~/assets/imgs/controle-xbox.webp'

function SectionControl() {
  return (
    <div className="mb-[90px] mt-[58px] flex w-11/12 flex-col items-center text-left md:flex-row md:justify-between lg:mt-[200px]">
      <div className="text-center text-[24px] font-semibold text-[#9BF00B] md:mr-10 md:text-left md:text-[42px] lg:mb-14 lg:mr-40 lg:text-[64px]">
        Desempenho
        <span className="block text-[#FFFFFF] md:-mt-2 lg:-mt-7 ">
          aperfeiçoado
        </span>
        <p className="mt-6 text-sm font-medium text-[#C0C0C0] md:text-xl lg:text-[28px]">
          O controle sem fio Xbox traz um design elegante, conforto refinado e
          compartilhamento instantâneo para um favorito comum.
        </p>
      </div>
      <img
        src={control}
        alt="controle xbox"
        className="mt-12 h-[144px] w-[207px] md:my-auto md:h-[200px] md:w-[450px] lg:h-[300px] lg:w-[500px]"
      />
    </div>
  )
}

export default SectionControl
