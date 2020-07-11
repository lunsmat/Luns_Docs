import React from 'react';
import { FiMenu } from 'react-icons/fi';

import { Container } from './styles';

interface Props {
    setShowNavBar(showNavBar: boolean ): void;
    showNavBar: boolean;
}

const Header: React.FC<Props> = ({ setShowNavBar, showNavBar}) => {
    return (
        <Container>
            <div>
                <h1>Luan's Docs</h1>

                <FiMenu color="#FFF"
                    onClick={() => setShowNavBar(!showNavBar)}
                />
            </div>
        </Container>
    );
}

export default Header;
