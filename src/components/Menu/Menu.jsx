import { ContainerMenu, Navbar, NavbarList, Link } from './menu.styled'
const Menu = () => {
    return(
        <ContainerMenu>
            <NavbarList>
                <Navbar>
                    <Link  href="/">Sobre</Link>
                </Navbar>
                <Navbar>
                    <Link href="/projetos">Projetos</Link>
                </Navbar>
                <Navbar>
                    <Link  href="/voluntariado">Voluntariado</Link>
                </Navbar>
                <Navbar>
                    <Link  href="/apoio">Apoio</Link>
                </Navbar>
            </NavbarList>
        </ContainerMenu>
    )
}

export default Menu