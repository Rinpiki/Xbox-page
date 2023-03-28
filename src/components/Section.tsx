import xbox from '../imgs/xbox.png'
import deskbox from '../imgs/deskbox.png'

function Section() {
  return (
    <section className="mt-6 flex flex-col justify-center md:mt-[100px]">
      <div className="block text-center">
        <h1
          id="sectionh1"
          className="mbx: text-4xl font-semibold text-white md:text-5xl lg:text-7xl"
        >
          Xbox series X
        </h1>
        <p
          id="sectionp"
          className="mb-1 mt-1 text-base font-semibold text-[#9BF00B] md:mt-4 md:text-base lg:text-2xl"
        >
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
  )
}

export default Section
