import { Link } from 'react-router-dom';
import './header.css'

export default function Header(){
    return(
        <header>
            <div className='logo'>Conie <span>I</span> </div>
            <div className="cabecalho">
                <Link to='/' className='link'>Home</Link>
                <Link to='/servico' className='link'>Servicos</Link>
                <Link to='/contato' className='link'>Contato</Link>
            </div>
        
        </header>
    )
}