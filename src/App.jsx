import './App.css'
import * as S from "./components/style"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from "./components/Inicio/inicio"
import Sobre from "./components/Sobre/sobre"
import Projetos from "./components/Projetos/projetos"
import Contato from "./components/Contato/contato"
import Nome from "./assets/_.png"


export default function App() {

  return (
    <BrowserRouter>
    <S.EstiloGlobal/>
      <S.Header>
        <div>
          <figure>
            <img src={Nome} alt=""/>
          </figure>
        </div>
        
        <S.Nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </S.Nav>
      </S.Header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>

  )
}
