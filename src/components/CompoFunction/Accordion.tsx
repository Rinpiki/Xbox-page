import { useState } from 'react'
import down from '~/assets/imgs/icondown.svg'

interface props {
  pergunta: string
  resposta: string
}

function Accordion({ pergunta, resposta }: props) {
  const [open, setOpen] = useState(false)
  const set = () => {
    setOpen(!open)
  }
  return (
    <div>
      <div>
        <div className="mb-[21px] mt-10 flex justify-between">
          <span className="mr-2  text-xs text-[#FFFFFF] md:text-2xl">
            {pergunta}
          </span>
          <img src={down} alt="icone pra baixo" id="up" onClick={set} />
        </div>
        {open ? (
          <p className="mb-[22px] text-xs text-[#C0C0C0] md:text-lg">
            {resposta}
          </p>
        ) : null}
        <div className="mb-[23px] h-[2px] w-full bg-[#2E2E2E]"> </div>
      </div>
    </div>
  )
}

export default Accordion
