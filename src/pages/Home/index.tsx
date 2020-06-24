import React from 'react';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <header>
                <h2>Luan's Docs</h2>
                <p>Seja Bem Vindo a Minha Documentação</p>
            </header>

            <main>
                <section>
                    <header>
                        <h3>Quem sou eu?</h3>
                    </header>

                    <main>
                        <p>Meu nome é Luan Matheus Silva Farias!</p>
                        <p>Comecei a programar desde que eu tinha 15 anos de idade quando decidi que gostaria de ser um programador full stack.</p>
                        <p>Mei primeiro contato com programação foi no IFPA - Campus Breves, foi onde estudei durante todo o meu ensino médio (2019 - 2021). Nessa época, no meu primeiro ano de ensino médio comecei estudando a linguagem C.Já que estudaria C decidi fazer online um curso gratuito de lógica de programação à algoritmos.</p>
                        <p>Com o passar do tempo, a programação foi a área pela qual eu me interessei, portanto comecei a me aprofundar na programação de diversas maneiras desde então.</p>
                    </main>
                </section>

                <section>
                    <header>
                        <h3>Por que eu fiz uma documentação?</h3>
                    </header>
                    <main>
                        <p>Logo que eu comecei a estudar c, no ensino médio, muitos dos meus amigos também se gostavam de programação, porém a medida que eu ia estudando, eu também adquiria mais conhecimento, e chegou um ponto no qual eu sabia algumas tecnologias das quais eles não haviam  estudado, então eu decidi que iria ensinar à eles.</p>
                        <p>Como eu iria ensinar à eles eu decidi também fazer uma documentação online onde eu pudesse colocar os novos conteúdos que eu  vou aprendendo e que todos pudessem participar para ver também.</p>
                        <p>Foi a partir dessa ideia que eu decidi fazer essa documentação.</p>
                    </main>
                </section>

                <section>
                    <header>
                        <h3>Onde me encontrar?</h3>
                    </header>
                    <main>
                        <p>Caso você esteja interessado em mim você pode tentar:</p>
                        <ul>
                            <li><a href="http://github.com/luan-farias" target="_blank" rel="noopener noreferrer">Minha Conta no Github</a></li>
                            <li><a href="http://luanfarias.netlify.app" target="_blank" rel="noopener noreferrer">Meu portifólio pessoal</a></li>
                            <li><a href="https://www.linkedin.com/in/luan-farias-08572219b/" target="_blank" rel="noopener noreferrer">Minha conta no LinkedIn</a></li>
                            <li><a href="mailto:luan.farias_bvs@outlook.com">Minha conta de email</a></li>
                        </ul>
                    </main>
                </section>
            </main>
        </Container>
    );
}

export default Home;
