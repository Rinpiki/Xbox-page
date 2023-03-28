import xbox from '../imgs/logo.svg'

function Footer() {
  return (
    <footer className="mb-[28px] mt-[34px] flex  items-center justify-between lg:mb-[92px] ">
      <img
        src={xbox}
        alt="logo xbox"
        className="h-[25px] w-[83px] md:h-[44px] md:w-[144px]"
      />
      <div className="text-xs text-[#777777] md:text-lg lg:flex lg:space-x-12">
        <p>© Microsoft 2022</p>
        <p>Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
