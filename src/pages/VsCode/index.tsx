import React from 'react';

import { Container } from './styles';

const VsCode: React.FC = () => {
    return (
        <Container>
            <header>
                <h2>Configurando o Editor de códigos</h2>
            </header>

            <main>
                <section>
                    <header>
                        <h3>Recapitulando...</h3>
                    </header>

                    <main>
                        <p>Como já foi dito anteriormente, iremos utilizar um editor de códigos para comerçarmos a fazer os nossos códigos, para isso basta apenas um bloco de notas e é o suficiente, porém um editor de códigos é um editor especializado na funcionalidade de fazer um código, e com isso ele vem com várias funcionalidades que nos auxiliam na hora em que formos escrever o nosso código.</p>
                        <p>O editor de códigos que iremos utilizar é o Visual Studio Code(VSCode). Ele é um editor que vem com várias funcionalidades, porém que você pode ir adicionando mais por meio de extensões que podem ser instaladas pelo seu marketplace dentro do editor, ou baixando e instalando diretamente</p>
                        <p>A maioria dos editores de códigos não exigem muito de seu computador, o mesmo é com o vscode, porém a medida em que você for instalando extensões e adicionando mais funcionalidades, pode ser que ele use um pouco a mais de hardware do seu computador.</p>
                        <p>O vscode não chega a ser uma IDE(Interface de desenvolvimento integrado), pois na maioria das vezes as IDEs vem com as maiorias das funcionalidades para criar um programa e executar o programa dentro do próprio editor, porém devido a diversas de suas funcionalidades não podemos considerar apenas um editor de códigos simples, o que facilita ao nosso uso do dia-a-dia.</p>
                    </main>
                </section>
                <section>
                    <header>
                        <h3>Instalando o Visual Studio Code</h3>
                    </header>
                    <main>
                        <p>Não existe complexidade ao se instalar o vscode, basta entrar dentro da página de instação que pode ser acessada <a href="https://code.visualstudio.com/" target="blank">clicando aqui.</a></p>
                        <p>Após estar na página de instalação, você baixa o instalador e o execute, ao executar basta esperar que esteja finalizada a instalação.</p>
                        <p>Após instalar, talvez você queira fazer algumas configurações. Você pode ver, ou aprender, como utilizar melhor o seu visual studio code lendo a documentação <a href="https://code.visualstudio.com/docs/getstarted/introvideos" target="_blank" rel="noopener noreferrer">clicando aqui</a>. A documentação deve estar em inglês pórem já é o suficiente para você aprender o básico do uso dessa ferramenta voltada para do desenvolvimento. O uso dela é bem simples, então com o tempo você vai aprender a utilizar melhor todas as suas ferramentas.</p>
                        <p>Com um tempo eu faço explicações melhores mostrando como se utilizar o visual studio code, porém atualmente basta você ver os vídeos da documentação e será o suficiente.</p>
                    </main>
                </section>
                <section>
                    <header>
                        <h3>Por que o Visual Studio Code?</h3>
                    </header>
                    <main>
                        <p>Como já foi dito, ou agora com você sabendo, para escrever o seu código basta um editor de texto, até dos mais simples como um bloco de notas, porém os editores de códigos tem as finalidades específicas para editar códigos, logo, como já foi dito, eles vêm com diversas funcionalidades que auxiliam esse processo e o visual studio já vem com diversas ferramentas pra isso como:</p>
                        <ul>
                            <li>Emmet: um auxiliador com diversas funcionalidades para auxiliar na hora da escrita do código, como autocomplete, sugestões, preferencias e outros.</li>
                            <li>IntelliSense: umna ferramenta de inteligencia que auxilia para fazer o código de maneiras mais legível e menos sucetiva a erros tanto de sintaxe quanto erros lógicos</li>
                            <li>Terminal integrado: muitos desenvolvedores fazem seus trabalhos pelo terminal, e para nao ter que ficar abrindo desnecesáriamente telas de terminal no computador o vscode tem um terminal integrado que utiliza dos terminais disponíveis dentro do computador, permitindo várias janelas de terminais no próprio editor de maneira integrada.</li>
                            <li>Integração com o git: git é uma ferramenta voltada para versionamento de código, atualmente a mais popolar, e como o versionamento é muito importante para desenvolvedores, o vscode já tem integração para versionar seu código direto no próprio editor o invés de se utilizar linhas de comando.</li>
                            <li>Ferramentas para debugar: funcionalidade que você pode raramente usar, mas deve, pois as ferramentas de debugar do vscode ajudam com que ao escrever seu programa você passe ele pelo debug para indentificar erros e bugs que podem acontecer.</li>
                            <li>Marketplace: mercado de extensões, com isso além de você deixar seu editor do jeito que você deseja, você pode instalar extensões que o auxiliem no dia a dia.</li>
                        </ul>
                        <p>Com isso, percebesse que o visual studio code é sim um editor bem completo, mas não chega a ser uma IDE completa, porém resolve todos, ou quase todos os seus problemas.</p>
                    </main>
                </section>
            </main>
        </Container>
    );
}

export default VsCode;
