import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { Container, SectionMain, SectionText, SobreImg, Text } from "./sobre.styled";

const Sobre = () => {
    return (<> 
    <Container>
        <Menu />
        <SectionMain>
            <SobreImg src="https://th.bing.com/th/id/OIP.44XYxV_YHwjHz0RyC0XaMAHaEc?pid=ImgDet&rs=1"/>
            <Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        </SectionMain>
        <SectionText>
            <Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        </SectionText>
        <SectionMain>
            <SobreImg src="https://th.bing.com/th/id/OIP.44XYxV_YHwjHz0RyC0XaMAHaEc?pid=ImgDet&rs=1"/>
            <Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        </SectionMain>
    <Footer />
    </Container>
    </>);
};

export default Sobre;