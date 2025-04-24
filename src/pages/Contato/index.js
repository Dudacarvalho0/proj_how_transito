import './index.css';
import logo from '../../img/conie.png';


export default function Contato(){


    return(
        <div className='corpo'>
            <h2 className='subcontato'>Entre em contato</h2>
            <img src={logo} alt="Profissional" />
            <h3>Conie Leite</h3>
            <h4>Gestora de trânsito</h4>

            <button className='botaocontato'>Falar no Whatsaap</button>
        </div>
    )
}