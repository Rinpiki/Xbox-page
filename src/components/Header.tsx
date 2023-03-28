import logo from '../imgs/logo.svg'

function Header() {
  return (
    <header className="flex flex-col items-center md:mt-5 md:w-full md:flex-row md:content-center md:justify-between md:self-center">
      <img
        src={logo}
        alt="xbox"
        className="mx-auto my-[24px] md:mx-0 md:my-0 md:w-24 lg:w-32"
      />
      <ul
        id="ul"
        className="flex space-x-5 text-[8px] text-white mb:text-[10px] md:space-x-9"
      >
        <li className="cursor-pointer rounded-2xl bg-[#67676763] px-[10px] py-[6px] md:bg-inherit md:px-0 md:py-0">
          VISÃO GERAL
        </li>
        <li className="cursor-pointer rounded-2xl bg-[#67676763] px-[10px] py-[6px] md:bg-inherit md:px-0 md:py-0">
          JOGOS
        </li>
        <li className="cursor-pointer rounded-2xl bg-[#67676763] px-[10px] py-[6px] md:bg-inherit md:px-0 md:py-0">
          GALERIA
        </li>
        <li className="cursor-pointer rounded-2xl bg-[#67676763] px-[10px] py-[6px] md:bg-inherit md:px-0 md:py-0">
          UNBOX
        </li>
      </ul>
      <div
        id="btn"
        className="mt-[56px] bg-[#9AF10C] px-[78px] py-3 text-center text-xs font-extrabold text-[#0C0C0C] md:mt-0 md:px-[30px]"
      >
        VER DISPONIBILIDADE
      </div>
    </header>
  )
}

export default Header
