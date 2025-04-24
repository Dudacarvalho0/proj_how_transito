import { Routes, Route } from 'react-router-dom';
import Servicos from "../pages/Servicos";
import Contato from "../pages/Contato";
import Home from "../component/Header/Home";
import Faq from "../pages/Faq";

function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/contato" element={ <Contato/> } />
            <Route path="/servico" element={ <Servicos/> } />
            <Route path="/faq" element={ <Faq/> } />
        </Routes>
    )
}

export default RoutesApp;