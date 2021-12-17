import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import proj from '../../data/database'
import { Container, Text, SectionText, Card, Descricao } from "./projetos.styled";

const Projetos = () => {
    return(
        <>
        <Menu/>
        <Container key={proj.id}>
            {proj.map((proj) =>
            <Card >
                <SectionText>
                    <Text>{proj.nome}</Text>
                </SectionText>
                <SectionText>
                    <Descricao>{proj.descricao}</Descricao>
                </SectionText>
            </Card>
            )}
            </Container>
        <Footer/>
        </>
    )
}

export default Projetos