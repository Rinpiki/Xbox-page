import xbox from '~/assets/imgs/xbox.png'
import deskbox from '~/assets/imgs/deskbox.avif'

function Section() {
  return (
    <section className="mt-6 flex flex-col justify-center md:mt-[100px]">
      <div className="block text-center">
        <h1
          id="sectionh1"
          className="text-4xl font-semibold text-white md:text-5xl lg:text-7xl"
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
<<<<<<< HEAD
      <img
        id="xbox"
        src={xbox}
        alt="imagem de xbox"
        className="md:hidden"
        width={268}
        height={165}
      />
=======
>>>>>>> dbdc0166ffc982043b1ea6d2b1737df0aa183b54
      <img
        src={xbox}
        alt="imagem de xbox"
        className="-z-[1] md:hidden"
        width={268}
        height={165}
      />
      <img
        src={deskbox}
        alt="imagem de xbox"
<<<<<<< HEAD
        className="hidden md:block lg:w-full "
        width={716}
        height={346}
=======
        className="-z-[1] hidden md:block"
        width={1235}
        height={597}
>>>>>>> dbdc0166ffc982043b1ea6d2b1737df0aa183b54
      />
    </section>
  )
}

export default Section
