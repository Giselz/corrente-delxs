import styled from "styled-components";

export const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    text-align: center;
    padding: 1rem;
    flex-wrap: wrap;
    justify-content: start;
`;

export const SectionText = styled.div`
    margin: 0 auto;
    //max-width: 600px;
`;

export const Text = styled.p`
    font-size: 22px;
    color: #FDF0D5;
    padding: 1rem;
    font-weight: 700;
`;

export const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 1px;
    width: 300px;
    margin: 60px;
    background-color: #f03a47;
    box-shadow: 2px 4px 10px #a3a3a3;
    border-radius: 32px;
    &:hover {
    background-color: #C1121F;
    transition: linear .5s;
    }
`

export const Descricao = styled.p`
    font-size: 14px;
    color: #FDF0D5;
    padding: 1rem;
`;