import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () => {
    return(
        <div className="container-menu">
            <ul className="navbar">
                <li>
                    <Link className="link-a" to="/">Sobre</Link>
                </li>
                <li>
                    <Link className="link-a" to="/produtos">Produtos</Link>
                </li>
                <li>
                    <Link className="link-a" to="/projetos">Projetos</Link>
                </li>
                <li>
                    <Link className="link-a" to="/apoio">Apoio</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu