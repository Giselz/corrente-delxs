import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import { Container, Content, Text, Button, Botao, SectionMain } from "./voluntariado.styled";

const Voluntariado = () => {
    return (<> 
        <Container>
            <Menu />
            <Content>
                <SectionMain>
                    <Text>Tem interesse em fazer parte do projeto?</Text>
                    <Text>Clique no botão abaixo para se inscrever! </Text>
                <Button>
                    <Botao href="https://forms.gle/SvLhb4cVEyARLDpcA" rel="noreferrer" target="_blank">Quero me voluntariar</Botao>
                </Button>
                </SectionMain>
            </Content>
            
        <Footer />
        </Container>
        </>);
}

export default Voluntariado