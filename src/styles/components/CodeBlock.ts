import styled from 'styled-components';

interface Props {
    display?: string;
}

export default styled.code<Props>`
    width: 100%;
    padding: ${props => props.display ? '0 5px' : '20px'};
    display: ${props => props.display ?? 'block'};
    margin: ${props => props.display ? '0 3px' : '10px 0'};
    border-radius: ${props => props.display ? 0 : '8px'};
    background: #282a36;
    color: #f8f8f2;
    font-family: 'Fira Code', monospace, sans-serif;

    .block {
        display: block;
        margin-left: 20px;
    }

    .pink {
        color: #ff79c6;
    }

    .cyan {
        color: #8be9fd;
    }

    .green {
        color: #50fa7b;
    }

    .yellow {
        color: #f1fa8c 	;
    }

    .red {
        color: #ff5555;
    }

    .purple {
        color: #bd93f9;
    }

    .orange {
        color: #ffb86c;
    }

    .comment {
        color: #6272a4;
    }
`;
