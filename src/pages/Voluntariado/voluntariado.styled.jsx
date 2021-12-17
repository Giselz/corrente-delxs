import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    margin-top: 50px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 600px;
    padding: 2rem;

`;

export const SectionMain = styled.div`
    padding-top: 1.2rem;
    min-height: 33.3vw;
`

export const Text = styled.p`
    font-size: 21px;
    color: #424242;
    text-align: center;
`;

export const Botao = styled.a`
    display: flex;
    margin-left: 10px;
    gap: 0.25rem;
    align-items: center;
    background: #c9c9c9;
    cursor: pointer;
    border-radius: 8px;
    border: 0;
    color: #f03a47;
    text-decoration: none;
    padding: 0.5rem 2rem;
    &:hover {
    background-color: #a3a3a3;
    transition: linear .5s;
    }
`;

export const Button = styled.div`
    font-weight: 600;
    color: #424242;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px;
`;