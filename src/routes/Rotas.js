import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sobre from '../pages/Sobre/Sobre';
import Produtos from '../pages/Produtos/Produtos';
import Projetos from '../pages/Projetos/Projetos';
import Apoio from '../pages/Apoio/Apoio';

function Rotas() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Sobre}/>
                <Route  path="/Produtos" component={Produtos}/>
                <Route  path="/Projetos" component={Projetos}/>
                <Route  path="/Apoio" component={Apoio}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas