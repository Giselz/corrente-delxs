import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    margin-top: 50px;
`;

export const SectionMain = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    max-width: 600px;
    padding: 1rem;
`;

export const SectionText = styled.div`
    margin: 0 auto;
    max-width: 600px;

`;

export const SobreImg = styled.img`
    width: 200px;
    height: 200px;
`;

export const Text = styled.p`
    font-size: 21px;
    color: #424242;
    padding: 1rem;
    text-align: center;
`;

export const SectionMainH1 = styled.p`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    max-width: 600px;
    padding: 1rem;
    font-size: 25px;
    color: #424242;
    text-shadow: 0.035em 0.045em #a3a3a3;
`;

export const TextH1 = styled.p`
    font-size: 25px;
    color: #424242;
    padding: 1rem;
`;

export const Botao = styled.a`
    margin-left: 10px;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    background: #c9c9c9;
    cursor: pointer;
    border-radius: 8px;
    border: 0;
    color: #f03a47;
    text-decoration: none;
    &:hover {
    background-color: #a3a3a3;
    transition: linear .5s;
    }
`;

export const SectionButton = styled.div`
    font-weight: 600;
    color: #424242;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px;
`;