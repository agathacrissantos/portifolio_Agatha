import * as S from "./sobre.style"
import Estudos from "../../assets/Linguagens.jpg"

export default function Sobre() {

    return (
        <S.Main>
            <S.SobreMim>Meu nome é Agatha Cristiane Pinheiro dos Santos, tenho 33 anos e sou graduada em Análise e desenvolvimento de sistemas .
                Atualmente estou desenvolvendo habilidades para o desenvolvimento front-end, com tecnologias como HTML, CSS, JavaScript, ReactJs, Git/GitHub e lógica de programação . 
                Comecei a trabalhar aos 14 anos para ajudar a minha família, trazendo comigo uma bagagem muito grande em comunicação, adaptabilidade, trabalho em equipe e empatia .
                Nos últimos anos me dediquei a criação dos meus filhos, mas sempre me desenvolvendo pessoal e profissionalmente e hoje busco novas oportunidades na área de tecnologia .
            </S.SobreMim>
            <a href="../../../public/AgathaSantos.pdf" download={true}>
                <figure>
                <S.FotoSobre src={Estudos} alt="" />
                </figure>
                <figcaption>
                <S.Link>Clique para baixar meu currículo.</S.Link>
                </figcaption>
            </a>
        </S.Main>
    )
}