import { ContainerMenu, Navbar, NavbarList, Link, Imagem } from './menu.styled'
const Menu = () => {
    return(
        <ContainerMenu>
            <NavbarList>
                <Navbar>
                    <Imagem src="https://imgur.com/izkwdkN.jpg"></Imagem>
                </Navbar>
                <Navbar>
                    <Link  href="/">Sobre</Link>
                </Navbar>
                <Navbar>
                    <Link  href="/causa">Causa</Link>
                </Navbar>
                <Navbar>
                    <Link href="/projetos">Projetos</Link>
                </Navbar>
                <Navbar>
                    <Link  href="/voluntariado">Voluntariado</Link>
                </Navbar>
            </NavbarList>
        </ContainerMenu>
    )
}

export default Menu