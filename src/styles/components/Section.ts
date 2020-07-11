import styled from 'styled-components';

export default styled.section`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    transition: 800ms;
    background: #FFF;
    border-radius: 20px;
    margin: 10px;
    width: 100%;

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        h2 {
            color: #6f42c1;
            font-size: 28px;
            text-align: center;
        }
        p {
            color: #6c757d;
            font-size: 12px;
        }
    }

    main {
        margin-bottom: 20px;
        section {
            display: flex;
            align-items: flex-start;
            flex-direction: column;

            header {
                display: flex;
                justify-content: start;
                margin-bottom: 5px;

                h3 {
                    color: #17a2b8;
                    font-size: 20px;
                }
            }

            main {
                margin-left: 30px;

                ul {
                    margin-left: 20px;
                }
            }

            a {
                color: #007bff;
                text-decoration: none;
            }

            p {
                color: #333;
                line-height: 20px;
            }
        }
    }
`;
