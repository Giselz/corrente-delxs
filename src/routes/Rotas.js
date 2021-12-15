import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sobre from '../pages/Sobre/Sobre';
import Voluntariado from '../pages/Voluntariado/Voluntariado';
import Projetos from '../pages/Projetos/Projetos';
import Apoio from '../pages/Apoio/Apoio';

function Rotas() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Sobre}/>
                <Route  path="/Voluntariado" component={Voluntariado}/>
                <Route  path="/Projetos" component={Projetos}/>
                <Route  path="/Apoio" component={Apoio}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas