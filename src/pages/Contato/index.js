import './index.css';
import logo from '../../img/conie.png'; 

export default function Contato() {
    return (
        <div className='corpo'>
            <h2 className='subcontato'>Entre em contato</h2>
            <div className='perfil-info'>
                <img src={logo} alt="Conie Leite - Gestora de Trânsito" />
                <h3>Conie Leite</h3>
                <h4>Gestora de trânsito</h4>
            </div>

            <a
              href="https://wa.me/554796441870?text=Olá! Vim pelo site e gostaria de mais informações." 
              target="_blank"
              rel="noopener noreferrer" 
              className='botaocontato' 
            >
                Falar no WhatsApp
            </a>
        </div>
    );
}