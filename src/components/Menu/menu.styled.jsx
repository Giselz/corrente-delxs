import styled from "styled-components";

export const ContainerMenu = styled.div`
    position: fixed;
    background: #ffffff;
    top: 0;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const NavbarList = styled.ul`
    display: flex;
    background: white;
    font-size: 24px;
    margin-top: 0;
    width: 100%;
    justify-content: space-evenly;
`;

export const Navbar = styled.li`
    list-style-type: none;
    justify-content: space-evenly;
`;

export const Link = styled.a`
    color: #f03a47;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
    color: #424242;
}
`;