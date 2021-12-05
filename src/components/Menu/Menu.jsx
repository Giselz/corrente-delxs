import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () => {
    return(
        <ul className="navbar">
            <li>
                <Link className="link" to="/">Sobre</Link>
            </li>
            <li>
                <Link className="link" to="/produtos">Produtos</Link>
            </li>
            <li>
                <Link className="link" to="/projetos">Projetos</Link>
            </li>
            <li>
                <Link className="link" to="/apoio">Apoio</Link>
            </li>
        </ul>
    )
}

export default Menu