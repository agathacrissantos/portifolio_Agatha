import * as S from "./inicio.style"
import MinhaFoto from "../../assets/Miniatura.png"

export default function Inicio() {

    return (
      <S.Main>
      <S.MinhaSecao>
        <S.Resumo>Olá, sou Agatha Santos,Desenvolvedora front-end em formação e graduada em Análise e desenvolvimento de sistemas.
          Gosto de tudo que envolve tecnoligia, ler livros, assistir boas séries e ficar com minha família.
        </S.Resumo>
        <figure>
            <S.FotoInicio src={MinhaFoto}/>
        </figure>
      </S.MinhaSecao>
      </S.Main>
    )
  }
    