import styled from 'styled-components';

interface Props {
    navOpen: boolean;
}

export default styled.main<Props>`
    width: calc(100vw - 20px);
    margin: 10px;
    height: calc(100vh - 180px);
    position: fixed;
    top: 80px;
    left: 0;
    transition: 800ms;

    section {
        padding: 10px;
        width: 100%;
        background: #FFF;
        height: 100%;
        overflow-y: scroll;
        border-radius: 20px;
    }

    @media screen and (min-width: 768px) {
        width: calc(${props => props.navOpen ? '100vw - 380px' : '100vw - 20px'});
    }
`;
