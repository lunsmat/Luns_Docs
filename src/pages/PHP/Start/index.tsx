import React from 'react';

import { Container } from './styles';
import CodeBlock from '../../../styles/components/CodeBlock';

const Start: React.FC = () => {
    return (
        <Container>
            <header>
                <h2>Iniciando com PHP</h2>
            </header>
            <main>
                <section>
                    <header>
                        <h3>Retornando com PHP</h3>
                    </header>
                    <main>
                        <p>Se chegou aqui significa que você já configurou todo o seu ambiente PHP e está pronto pra desenvolver com esta linguagem, por isso agora iremos iniciar mostrando um pouco sobre php.</p>
                        <p>A partir de agora todos os exemplos são práticos e você pode fazer no seu computador, já que você tem noção de como utilizar o servidor.</p>
                        <p>Na configuração do servidor você consegui testar e fazer um hello world em PHP, e iremos começar o refazendo</p>
                    </main>
                </section>
                <section>
                    <header>
                        <h3>Refazendo o <i>Hello World!</i></h3>
                    </header>
                    <main>
                        <p>Você agora vai refazer o Hello World!, você já deve saber, porém este é um pouco diferente.</p>
                        <CodeBlock>
                            <span className="pink">{"<?php"}</span>

                            <div className="block">
                                <span className="cyan">echo</span>
                                &nbsp;
                                <span className="yellow">"Hello World!"</span>;
                            </div>
                        </CodeBlock>
                        <p>Você deve ter notado algumas diferenças desse <i>Hello World!</i> em php para os outros, mas dessa vez com algumas diferenças, nesse caso eu vou citar as diferenças e após isso irei explicar o porque.</p>
                        <ul>
                            <li>O código PHP não está dentro de um código HTML: já dizemos que o PHP é colocado dentro de HTML, porém nesse caso ele está e ao mesmo tempo não está. Isso se dá pois:
                                <ul>
                                    <li>O HTML está subentendido: nesse caso, ainda sim é uma página HTML, se fosse mandado para o cliente(navegador), ainda seria uma página, porém não existe o uso de tags, seria como escrever hello world em um arquivo html e mandar para o navegador.</li>
                                    <li>Tem apenas código PHP: não necessariamente o PHP precisa estar dentro de um código html ou precisa retornar algo, o PHP é linguagem de backend, logo pode ser implementado de diversas maneiras(API, com PHP estruturado, MVC), logo nesse caso podemos ter código apenas PHP.</li>
                                </ul>
                            </li>
                            <li>Não estamos utilizando os delimitadores <CodeBlock display="inline"><span className="pink">{"<?php"}</span></CodeBlock> e <CodeBlock display="inline"><span className="pink">{"?>"}</span></CodeBlock>: Nesse caso, estamos sim utilizando o delimitador <CodeBlock display="inline"><span className="pink">{"<?php"}</span></CodeBlock> para indicar que é o início de um script em PHP, porém, em casos que tem apenas código em PHP, é totalmente desnecessário utilizar o <CodeBlock display="inline"><span className="pink">{"?>"}</span></CodeBlock>, portanto, em arquivos onde existe apenas código PHP, utilizar o <CodeBlock display="inline"><span className="pink">{"?>"}</span></CodeBlock> torna-se desnecessário.</li>
                        </ul>
                        <p>Essas são apenas algumas diferenças que se pode notar entre o Hello World de antes para o atual, é importante que você saiba esses casos no qual o PHP funciona e como ele vai funcionar quando você for utilizar.</p>
                    </main>
                </section>
                <section>
                    <header>
                        <h3>Utilizando o phpinfo</h3>
                    </header>
                    <main>
                        <p>Você instalou o PHP diretamente o PHP com o xampp, e as configurações do PHP que você utiliza são as padrões, porém caso você queria ver um pouco sobre as configurações que você utiliza no php, basta usar uma funcionalidade padrão dessa linguagem, o phpinfo</p>
                        <CodeBlock>
                            <span className="pink">{"<?php"}</span>

                            <div className="block">
                                <span className="cyan">phpinfo</span>
                                ();
                            </div>
                        </CodeBlock>
                        <p>Após usar essa função irá aparecer na sua tela um pouco da configurações que o seu PHP está utilizando, você pode pesquisar um pouco, porém um dos quais você pode se atentar é o <CodeBlock display="inline">Configuration File (php.ini) Path</CodeBlock>, pois esse é o arquivo de inicialização do PHP, logo, ao abrir esse arquivo você pode alterar as configurações padrões do seu PHP. Esse é um arquivo interessante que você pode ver de vez em quando, pois assim você vai além de apenas usar, para configurar para o que você precisa.</p>
                    </main>
                </section>
                <section>
                    <header>
                        <h3>Comentários em PHP</h3>
                    </header>
                    <main>
                        <p>Se você já programa a algum tempo,ou já programou, você deve saber para que serve os comentários, agora se não, comentários são mensagens que você deixa diretamente no código, geralmente, com a finalidade de deixar algo documentado, explicado ou, simplesmente, para você lembrar de algo acerca do código.</p>
                        <p>No PHP temos 3 tipos de comentários, onde os três são:</p>
                        <CodeBlock>
                            <span className="pink">{"<?php"}</span>

                            <div className="block comment">
                                <div># Comentário de uma linha com hashtag(#)</div>
                                <br />
                                <div>// Comentário de uma linha com duas barras(//)</div>
                                <br />
                                <div>/* Comentário de uma ou mútlipas linhas</div>
                                <div>Nesse tipo de comentário você abre e fechar</div>
                                <div>O espaço entre a abertura e o fechamento são todos comentários */</div>
                            </div>
                        </CodeBlock>
                        <p>Esses são os três modos de se fazer um comentário em PHP, um bom programador deve ter manias de deixar seu código bem comentado para que ao retornar a programar, reconheça as funcionalidades de cada parte a partir do próprio código.</p>
                        <CodeBlock>
                            <span className="pink">{"<?php"}</span>

                            <div className="block">
                                <span className="cyan">echo</span>
                                &nbsp;
                                <span className="yellow">"Hello World!"</span>;
                                <span className="comment"> // O comando echo serve para mostrar algo na tela</span>
                            </div>
                        </CodeBlock>
                        <p>Nesse caso, estamos nos tratado de um comando simples, porém os comentários são importantes principalmente para explicar o que bloco de códigos fazem, nesse exemplo apenas explicamos a funcionalidade do comando <CodeBlock display="inline"><span className="cyan">echo</span></CodeBlock>, porém, se fossem casos mais complexos, ou até mesmo em casos simples, ou quando outro desenvolvedor vai ver sua aplicação, é extremamente interessante o uso de comentários para melhor entendimento do código. Ao longo dessas "pequenas aulas", você irá ver comando de códigos e eles estarão comentados para que você entenda alguns conceitos sobre eles.</p>
                        <p>Lembrando que no PHP os comentários não influenciam na velocidade e nem em performance, pois eles são muitas das vezes ignorados, logo deixar o código comentado em PHP, é uma boa prática dado que não afeta performance. Em HTML/CSS ou até javascript na maioria das vezes os códigos são minificados para pesar menos e dessa maneira enviar para os cliente mais rápido, porém no PHP, por estar  no servidor, os espaços e comentários não afetam nem performance e nem velocidade.</p>
                    </main>
                </section>
            </main>
        </Container>
    );
}

export default Start;
