import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { Container, SectionMain, SectionText, SobreImg, Text, TextCard } from "./sobre.styled";

const Sobre = () => {
    return (<> 
    <Container>
        <Menu />
        <SectionMain>
            <Text>Corrente delxs é um projeto que visa o combate à pobreza menstrual com consciência ambiental e incentivo ao empreendedorismo local.</Text>
        </SectionMain>
        <SectionText>
            <TextCard>A pobreza menstrual é a falta de acesso não somente a itens básicos de higiene durante o período de menstruação, mas também a falta de informação, dinheiro para comprar absorvente e, principalmente, falta de apoio.</TextCard>  
        </SectionText>
        <SectionMain>
            <SobreImg src="https://imgur.com/aOrAnQD.jpg"/>
            <Text>Por conta disso, a Corrente delxs vem para mostrar que podemos combater a pobreza menstrual de forma ecológica e gerando renda para a população local com a produção de calcinhas e absorventes reutilizáveis.</Text>
        </SectionMain>
    <Footer />
    </Container>
    </>);
};

export default Sobre;