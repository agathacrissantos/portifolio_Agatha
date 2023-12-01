import * as S from "./inicio.style"
import MinhaFoto from "../../assets/Miniatura.png"
import Linkedin from "../../assets/linkedin.png"
import Github from "../../assets/github.png"
import Whatsapp from "../../assets/whatsapp.png"


export default function Inicio() {

  return (
    <S.Main>
      <S.MinhaSecao>
          <S.Nome>Agatha Santos</S.Nome>
          <S.Resumo>Desenvolvedora front-end</S.Resumo>
        <nav>
          <figure>
            <a href="https://www.linkedin.com/in/agathacrissantos" target="_blank">
              <img src={Linkedin} alt="Icone do Linkedin" /></a>
          </figure>

          <figure>
            <a href="https://github.com/agathacrissantos" target="_blank">
              <img src={Github} alt="Icone do GitHub" /></a>
          </figure>

          <figure>
            <a href="tel:+5511978036688" target="_blank">
              <img src={Whatsapp} alt="Icone do Whatsapp" /></a>
          </figure>
        </nav>

      </S.MinhaSecao>
      <div>
        <figure>
          <S.FotoInicio src={MinhaFoto} />
        </figure>
      </div>
    </S.Main>
  )
}
