import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import { Container, TextH1, SectionText, SectionMainH1, Text, SectionButton, Botao } from "./voluntariado.styled";

const Voluntariado = () => {
    return (<> 
        <Container>
            <Menu />
            <SectionMainH1>
                <TextH1>Tem interesse em fazer parte do projeto?</TextH1>
            </SectionMainH1>
            <SectionText>
                <Text>Clique no botão abaixo para se inscrever! </Text>
            </SectionText>
            <SectionButton>
                <Botao href="https://forms.gle/SvLhb4cVEyARLDpcA" rel="noreferrer" target="_blank">Quero me voluntariar</Botao>
            </SectionButton>
        <Footer />
        </Container>
        </>);
}

export default Voluntariado