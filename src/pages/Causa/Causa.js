import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import { Container, SectionMain, SobreImg, Text, SectionMainI, SectionMainTitulo, SobreImgCal, SobreImgInfo } from "./causa.styled";

const Causa = () => {
    return(
        <>
        <Container>
        <Menu/>
        <SectionMainI>
            <Text>A pobreza menstrual afeta 11 milhões de pessoas no Brasil, levando as pessoas que menstruam à recorrer ao papelão, jornal e até miolo de pão para conter o sangue. 
            </Text>    
        </SectionMainI>
        <SectionMain>
            <Text>
            De acordo com os dados do relatório Livre para Menstruar, no Brasil, 20% das adolescentes não possuem água tratada em casa e 200 mil estudam em escolas com banheiros sem condições de uso. Outro fator importante para ser analisado é que ao longo da vida, a pessoa que menstrua gasta entre R$ 3 mil e R$ 8 mil reais com a compra de absorventes.</Text>    
        </SectionMain>
        <SectionMainTitulo>
            <Text>❤️ Porque calcinhas absorventes e absorventes descartáveis?</Text>
        </SectionMainTitulo>
        <SectionMain>
            <Text>Cerca de 20 bilhões de absorventes e tampões são despejados em aterros sanitários por ano. No Brasil, ainda não existe reciclagem para esse tipo de resíduo, pode levar de <strong>500 a 800 anos para se decompor</strong> no meio ambiente. </Text>
            <SobreImg src="https://i.imgur.com/lTttNHa.jpg"/>
        </SectionMain>
        <SectionMain>
            <Text>A calcinha absorvente é saudável para a sua saúde íntima, pois não abafa a região e por não possuir químicos não causa mau odor.</Text>
        </SectionMain>
        <SectionMain>
            <SobreImgCal src="https://imgur.com/3ND6CKq.jpg"/>
            <Text>Outro ponto é a economia que a calcinha absorvente e o absorvente reutilizável oferecem, pois elas podem durar cerca de dois anos.</Text>
        </SectionMain>
        <SectionMain>
            <SobreImgInfo src="https://imgur.com/9THashW.jpg"/>
            </SectionMain>
        <Footer/>
        </Container>
        </>
    )
}

export default Causa