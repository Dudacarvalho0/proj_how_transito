import { Link } from 'react-router-dom';
import './index.css'; // Certifique-se que este CSS está sendo importado

export default function Home() {
    return (
        <div className='corpo'>
            <h1>DEFENSORA ESPECIALISTA DE TRÂNSITO</h1>
            <h2 className='sub_titulo'>Defesa de multas e processos de trânsito com atendimento direto e personalizado.</h2>

            <button className='botaohome'>
                <Link to='/contato'> Entrar em Contato</Link>
            </button>

            <Link to='/faq' className='linkhome'>Dúvidas? Acesse aqui.</Link>
        </div>
    );
}