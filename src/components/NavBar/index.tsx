import React from 'react';
import { Link } from "react-router-dom";

import { Container } from './styles';

interface Props {
    show: boolean;
}

const NavBar: React.FC<Props> = (props) => {
    return (
        <Container show={props.show}>
            <ul>
                <li><Link to="/">Página inicial</Link></li>
                <li>
                    <Link to="/php">PHP</Link>
                    <ul>
                        <li>
                            <Link to="/php/config">Configurando o ambiente</Link>

                            <li><Link to="/config/browser">Navegador</Link></li>
                            <li><Link to="/config/vscode">Editor de códigos</Link></li>
                            <li><Link to="/php/config/vscode">PHP, Servidor e o Banco de dados</Link></li>
                        </li>
                        <li><Link to="/php/start">Iniciando com PHP</Link></li>
                    </ul>
                </li>
            </ul>
        </Container>
    );
}

export default NavBar;
