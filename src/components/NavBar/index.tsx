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
                <li>
                    <Link to="/php">PHP</Link>
                    <ul>
                        <Link to="php/start">Iniciando com PHP</Link>
                    </ul>
                </li>
            </ul>
        </Container>
    );
}

export default NavBar;
