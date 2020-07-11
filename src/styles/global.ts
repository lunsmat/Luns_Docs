import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        background-color: #F8F9FA;
    }

    html, body, #root{
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
    }
`;
