import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sobre from '../pages/Sobre/Sobre';
import Voluntariado from '../pages/Voluntariado/Voluntariado';
import Projetos from '../pages/Projetos/Projetos';
import Causa from '../pages/Causa/Causa';

function Rotas() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Sobre}/>
                <Route  path="/Causa" component={Causa}/>
                <Route  path="/Voluntariado" component={Voluntariado}/>
                <Route  path="/Projetos" component={Projetos}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas