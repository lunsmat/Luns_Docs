import styled from 'styled-components';

export const Container = styled.footer`
    min-height: 80px;
    display: flex;
    align-items: center;
    background: #6f42c1;
    font-size: 16px;
    color: #FFF;
    flex-wrap: wrap;
    width: 100vw;

    div {
        display: flex;
        align-items: center;
        flex: 1;
        min-width: 360px;
        padding: 5px;
        justify-content: center;

        svg{
            margin-left: 6px;
        }

        a {
            text-decoration: none;
            color: #007bff;
        }
    }
`;
