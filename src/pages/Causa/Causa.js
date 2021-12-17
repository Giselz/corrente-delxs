import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import { Container, SectionMain, SobreImg, Text } from "./causa.styled";

const Causa = () => {
    return(
        <>
        <Container>
        <Menu/>
        <SectionMain>
            <Text>A pobreza menstrual afeta 11 milhões de pessoas no Brasil, levando as pessoas que menstruam à recorrer ao papelão, jornal e até miolo de pão para conter o sangue. 
            </Text>    
        </SectionMain>
        <SectionMain>
            <Text>
            De acordo com os dados do relatório Livre para Menstruar, no Brasil, 20% das adolescentes não possuem água tratada em casa e 200 mil estudam em escolas com banheiros sem condições de uso. Outro fator importante para ser analisado é que ao longo da vida, a pessoa que menstrua gasta entre R$ 3 mil e R$ 8 mil reais com a compra de absorventes.</Text>    
        </SectionMain>
        <SectionMain>
            <Text>Porque calcinhas absorventes e absorventes descartáveis?</Text>
            <SobreImg src="https://i.imgur.com/lTttNHa.jpg"/>
        </SectionMain>
        <Footer/>
        </Container>
        </>
    )
}

export default Causa