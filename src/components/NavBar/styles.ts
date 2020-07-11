import styled from 'styled-components';

interface Props {
    show: boolean;
}

export const Container = styled.nav<Props>`
    min-height: calc(100vh - 80px);
    width: 360px;
    border: 1px solid #ddd;
    background: #F8F9FA;
    overflow-y: auto;

    @media screen and (max-width: 768px) {
        position: fixed;
        transition: 800ms;
        right: ${props => !props.show === true ? 0 : '-360px'};
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
