import * as S from "./projetos.style.jsx"
import Fantastika from "../../assets/Fantastika.png"
import Calculadora from "../../assets/Calculadora.png"

export default function Projetos() {

    return (
        <>
            <S.MeusProjetos>
                <S.Titulo>Conheça um pouco dos meus Projetos de desenvolvimento Front-end</S.Titulo>
                <S.Container>
                    <S.Figure>
                        <a href="https://agathacrissantos.github.io/Fantastika-Desafio_final/" target="_blank" >
                            <S.Imagem src={Fantastika} alt="Projeto Página Fantastika" />
                        </a>
                        <h4>Esse desafio foi desenvolvido para fins didáticos, utilizando HTML e CSS,para construção da página e @media para a responsividade. Clique na imagem e acesse o deploy ou clique no link do meu github no início.</h4>
                    </S.Figure>

                    <S.Figure>
                        <a href="https://desafio-react-calculadora.vercel.app/" target="_blank">
                            <S.Imagem src={Calculadora} alt="Projeto calculadora" />
                        </a>
                        <h4>Esse projeto foi desenvolvido com ReactJs,styled-components,@media, funções e muita lógica de programação. Clique na imagem e acesse o deploy ou clique no link do meu github no início.</h4>
                    </S.Figure>
                </S.Container>

            </S.MeusProjetos>
        </>
    )
}