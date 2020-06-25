import styled from 'styled-components';

interface Props {
    show: boolean;
}

export const Container = styled.nav<Props>`
    min-height: calc(100vh - 160px);
    width: 360px;
    position: fixed;
    top: 80px;
    right: ${props => props.show === true ? 0 : '-360px'};
    border: 1px solid #ddd;
    transition: 800ms;
    overflow-y: scroll;
    background: #F8F9FA;

    @media screen and (max-width: 768px) {
        right: ${props => props.show === true ? 0 : '-360px'};
    }

    ul {
        list-style: none;

        li {
            padding: 10px 0 0 15px;
        }

        a {
            color: #333;
            text-decoration: none;

            &:hover {
                color: #007bff;
            }
        }
    }
`;
