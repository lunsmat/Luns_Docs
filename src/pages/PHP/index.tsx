import React from 'react';

import { Container } from './styles';
import CodeBlock from '../../styles/components/CodeBlock';

const PHP: React.FC = () => {
    return (
        <Container>
            <header>
                <h2>PHP</h2>
            </header>

            <main>
                <section>
                    <header>
                        <h3>O que é PHP?</h3>
                    </header>

                    <main>
                        <p>O PHP (um acrônimo recursivo para PHP: Hypertext Preprocessor) é uma linguagem de script open source de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web e que pode ser embutida dentro do HTML.</p>
                        <p>Essa linguagem de programação é uma linguagem do tipo server-side. o PHP é interpretado pelo servidor e o retorno para o usuário com apenas HTML.Dessa maneira PHP é uma linguagem muito utilizada na construções de aplicações web com conteúdo dinâmico.</p>
                    </main>
                </section>

                <section>
                    <header>
                        <h3>O que eu precisarei saber?</h3>
                    </header>

                    <main>
                        <p>Atualmente, para o seu aprendizado em PHP, você não precisar ter conhecimentos específicos, porém caso você queira se sentir mais preparado, seria importante ter conhecimento em:</p>
                        <ul>
                            <li>Lógica de programação</li>
                            <li>
                                <span>O básico de desenvolvimento web:</span>

                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                </ul>
                            </li>
                            <li>Conhecimentos básicos de como a internet funciona (servidores, clientes, etc).</li>
                        </ul>
                    </main>
                </section>

                <section>
                    <header>
                        <h3><b>Hello World!</b> em PHP</h3>
                    </header>

                    <main>
                        <p>Para que você possa ter um exemplo de um código PHP, vou lhe mostrar como seria um código PHP que mostraria <i>Hello World!</i> na tela.</p>
                        <CodeBlock>
                            <div>
                                {"<!"}
                                <span className="pink">DOCTYPE</span>
                                &nbsp;
                                <span className="green">html</span>{">"}
                            </div>

                            <div>
                                {"<"}
                                <span className="pink">html</span>
                                &nbsp;
                                <span className="green">lang</span>
                                <span className="pink">=</span>
                                <span className="yellow">"pt-BR"</span>
                                {">"}
                            </div>

                            <br />

                            <div>
                                {"<"}
                                <span className="pink">head</span>
                                {">"}
                            </div>

                            <div className="block">
                                <div>
                                    {"<"}
                                    <span className="pink">title</span>
                                    {">"}
                                    Meu primeiro Hello World com PHP
                                    {"<"}
                                    <span className="pink">title</span>
                                    {"/>"}
                                </div>
                            </div>

                            <div>
                                {"<"}
                                <span className="pink">head</span>
                                {"/>"}
                            </div>

                            <br />

                            <div>
                                {"<"}
                                <span className="pink">body</span>
                                {">"}
                            </div>

                            <div className="block">
                                <div>
                                    <span className="pink">{"<?php"}</span>

                                    <div className="block">
                                        <span className="cyan">echo</span>
                                        &nbsp;
                                        <span className="yellow">"Hello World!"</span>;
                                    </div>

                                    <span className="pink">{"?>"}</span>
                                </div>

                            </div>
                            <div>
                                {"<"}
                                <span className="pink">body</span>
                                {"/>"}
                            </div>

                            <br />

                            <div>
                                {"<"}
                                <span className="pink">html</span>
                                {"/>"}
                            </div>
                        </CodeBlock>
                        <p>
                            Como você pode ver, e como foi dito, o PHP pode ser embutido dentro do HTML. Nesse caso, o comando
                            <CodeBlock display="inline"><span className="cyan">echo</span></CodeBlock>
                            é um comando de saída cujo o objetivo é mostrar algum conteúdo na tela. Esse é apenas um pequeno exemplo de como dar o <i>Hello World!</i> em PHP, a medida que evoluirmos iremos aprender mais coisas.
                        </p>
                        <p>
                            Nesse exemplo, você pode ver também que o código PHP está entre <CodeBlock display="inline"><span className="pink">{"<?php"}</span></CodeBlock> e <CodeBlock display="inline"><span className="pink">{"?>"}</span></CodeBlock>, pois esses são os limitadores PHP, logo o PHP só irá interpretar o código que está dentro desses limitadores e no final do processo irá retornar apenas código HTML para o cliente.
                        </p>
                    </main>
                </section>

                <section>
                    <header>
                        <h3>O que iremos precisar?</h3>
                    </header>

                    <main>
                        <p>Para que o aprendizado que se possa rodar PHP, é necessário que se tenha o runtime de PHP instalado, e como o PHP é uma linguagem server-side (do lado do servidor) também é necessário que se tenha um servidor instalado.</p>
                        <p> Pelo fato de ser uma linguagem server-side, no PHP, geralmente, é feita conexões ao banco de dados, logo, também será necessário termos um banco de dados.</p>
                        <p>Ao longo do nosso aprendizado, iremos criar arquivos do tipo PHP, que tem a extensão <CodeBlock display="inline">.php</CodeBlock>, onde dentro desses arquivos iremos colocar o nosso código PHP, e poderiamos editar arquivos desse tipo até mesmo com um simples bloco de notas, porém para que haja um melhor aprendizado iremos utilizar um editor de códigos, facilitado assim o nosso processo para digitar nossos códigos.</p>
                        <p>Como foi dito, o PHP é uma linguagem server-side, porém pelo fato de poder ser imbutida no HTML, geralmente ela pode ter algum retorno visual em HTML, logo será necessário um navegador para que possamos ver esse retorno.</p>
                        <p>Considerando isso será necessário:</p>
                        <ul>
                            <li>O interpretador do PHP</li>
                            <li>Um servidor</li>
                            <li>Um banco de dados</li>
                            <li>Um editor de códigos</li>
                            <li>Um navegador</li>
                        </ul>
                        <p>Antes de iniciar com o PHP, iremos instalar todas essas ferramentas para que possamos ter um ambiente na nossa máquina onde possamos programar em PHP.</p>
                    </main>
                </section>
            </main>
        </Container>
    );
}

export default PHP;
