import * as S from "./sobre.style"
import Estudos from "../../assets/Linguagens.jpg"

export default function Sobre() {

    return (
        <S.Main>
            <S.SobreMim>Olá, me chamo Agatha,sou desenvolvedora Front-end em construção, formada em Análise e Desenvolvimento de Sistemas.</S.SobreMim>
            <a href="../../../public/AgathaSantos.pdf" download={true}>
                <figure>
                <S.FotoSobre src={Estudos} alt="" />
                </figure>
                <figcaption>
                <S.Link>Clique na imagem para baixar meu currículo.</S.Link>
                </figcaption>
            </a>
        </S.Main>
    )
}