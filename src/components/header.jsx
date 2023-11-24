import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from "./inicio"
import Sobre from "./sobre"
import Projetos from "./projetos"
import Contato from "./contato"

export default function Header() {

  return (
        <BrowserRouter>
          <nav>
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
          </nav>

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </BrowserRouter>
      
  )
}
