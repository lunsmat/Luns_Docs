import React from 'react';

import { Container } from './styles';
import CodeBlock from '../../../../styles/components/CodeBlock';

const Output: React.FC = () => {
    return (
        <Container>
            <section>
                <header>
                    <h2>Comandos de saída de dados em PHP</h2>
                </header>
                <main>
                    <section>
                        <header>
                            <h3>Uma pequena explicação</h3>
                        </header>
                        <main>
                            <p>Se você já estudou programação, ou lógica de programação, ou algumas outras áreas relacionadas a tecnologia, você sabe que são, basicamente, dividas em três partes básicas uma função/funcionalidade, ou até mesmo um sistema.</p>
                            <ol>
                                <li>Entrada de dados: Os sistemas de computação geralmente ajudam por um motivo, eles resolvem o mesmo problema depedêndo dos parâmetros que ele recebe. Imagine por exemplo uma calculadora, ela resolve apenas os problemas de matemática, porém você que escolhe tanto os valores quanto a operação. Quando você decide os valores e a  operação, você está provendo a calculadora a entrada, e com essa entrada, ela começa o processamento. Por exemplo, se você passa para a calculadora fazer a soma de 3 e 7, você repassou os valores que são entrada para que ela possa processar.</li>
                                <li>Processamento de dados: No processamento de dados, todos os valores que foram passados para o sistema são processados, e após serem processados geram o resultado, logo com esse resultado geram uma saída. Por exemplo, a calculadora que pega o valor 3 e 7, verifica que a operação requerida é a soma e processa os dados, após isso, a calculadora chega ao valor 10 e com esse valor manda para os comandos de saída.</li>
                                <li>Saída de dados: A saída de dados geralmente é onde o cliente vê algum resultado pois aqui todos  os dados foram processados e basta exibir, ou armazenar esses dados pois o sistema já fez o seu dever. Por exemplzo, nesse momento a calculadora já chegou ao resultado 10 que é da soma entre 3 e 7, portanto basta exibir esse resultado ao usuário, logo ela utilizará de comandos de saída para isso.</li>
                            </ol>
                            <p>Esse é um processo basíco de como funciona um sistema computacional, e agora iremos aprender alguns comandos de saída, pois é sempre que formos mostrar algum texto visual na tela com php, ou escrevermos na página html, iremos utilizar desses comandos.</p>
                        </main>
                    </section>
                    <section>
                        <header>
                            <h3>O comando echo</h3>
                        </header>
                        <main>
                            <p>Se você está aqui já deve ter visto sobre o comando echo, esse comando é o mais utilizado no PHP quando se trata da saída de dados, bem raramente você utilizará os outros dado que eles são "heranças" da linguagem mãe do PHP(linguagem C). Por isso que o comando echo é o mais utilizado.</p>
                            <CodeBlock>
                                <span className="pink">{"<?php"}</span>

                                <div className="block">
                                    <span className="cyan">echo</span>
                                    &nbsp;
                                    <span className="yellow">"Hello World!"</span>;
                                    <span className="comment"> // Nesse exemplo o comando echo escreve "Hello World!" na tela</span>
                                    <div className="comment">
                                        <div>/**</div>
                                        <div>&nbsp;* Nesse caso utilizamos o comando echo escrevendo essa função.</div>
                                        <div>&nbsp;* Após isso escrevemos em aspas(podem ser duplas ou simples) o texto que irá ser mostrado na tela.</div>
                                        <div>&nbsp;* Se quiséssemos adicionar uma quebra de linha bastaria colocar no fim do Hello World uma tag br, desse como o contéudo ficaria `echo "Hello World!{"<"}br {"/>"}";`, e não iria ocorrer nenhum erro.</div>
                                        <div>&nbsp;* Como todo comando em php, deve terminar com ponto e vírgula(;) e, para esse, o texto pode ou não ser colocado entre parênteses.</div>
                                        <div>&nbsp;* Podemos dizer nesse caso que o "Hello World" é o valor de entrada, que o echo é a função que vai ser processada e que o retorno vai ser a saída na tela mostrando <strong>Hello World!.</strong></div>
                                        <div>&nbsp;*/</div>
                                    </div>
                                </div>
                            </CodeBlock>
                        </main>
                    </section>
                    <section>
                        <header>
                            <h3>O comando print</h3>
                        </header>
                        <main>
                            <p>O comando print tem um uso semelhante ao echo, porém a finalidade ainda é a mesma, com o print basta fazer o seguinte.</p>
                            <CodeBlock>
                                <span className="pink">{"<?php"}</span>

                                <div className="block">
                                    <span className="cyan">print</span>
                                    &nbsp;
                                    <span className="yellow">"Hello World!{"<br />"}"</span>;
                                    <span className="comment"> // Nesse exemplo o comando print escreve "Hello World!" na tela</span>
                                    <div className="comment">
                                        <div>/**</div>
                                        <div>&nbsp;* Percebe-se diversas semelhanças entre o comando echo e o print, de fato eles são, você pode decidir qual usar sempre, basta como antigamente iniciar com o comando.</div>
                                        <div>&nbsp;* Após isso escrevemos em aspas(podem ser duplas ou simples) o texto que irá ser mostrado na tela.</div>
                                        <div>&nbsp;* Colocamos agora uma quebra de linha, se você testar estará funcionando normalmente pois o retorno do php é html, logo a tag vai ser processada como html.</div>
                                        <div>&nbsp;* Deve terminar com ponto e vírgula(;) e, para esse, novamene o texto pode ou não ser colocado entre parênteses.</div>
                                        <div>&nbsp;*/</div>
                                    </div>
                                </div>
                            </CodeBlock>
                        </main>
                    </section>
                    <section>
                        <header>
                            <h3>O comando printf</h3>
                        </header>
                        <main>
                            <p>Se você já estudou c provavelmente já sabe utilizar o comando printf, esse comando é um comando de saída, nesse caso,aprenderemos o mesmo problema simples com o Hello World!, porém desde o c, o comando printf já tem alguns métodos que pode ser utilizado.</p>
                            <CodeBlock>
                                <span className="pink">{"<?php"}</span>

                                <div className="block">
                                    <span className="cyan">printf</span>(
                                    <span className="yellow">"Hello World!<span className="pink">\n</span>"</span>);
                                    <span className="comment"> // Nesse exemplo o comando printf escreve "Hello World!" na tela</span>
                                    <div className="comment">
                                        <div>/**</div>
                                        <div>&nbsp;* Esse comando pode parecer com os outros, e ainda o objetivo é o mesmo, porém no c o printf pode ser utilizado de diversas maneira o php herdou esse função. Para utiliza, basta escrever a função então abre e fecha parênteses</div>
                                        <div>&nbsp;* Após isso escrevemos em aspas(podem ser duplas ou simples), o texto que irá ser mostrado na tela e esse obrigatóriamente deve estar entre parêntes.</div>
                                        <div>&nbsp;* Nesse caso colocamos uma quebra de linha com \n, não surtirá efeito em uma página html, porém se fosse utilizado via terminal seria o método para quebrar uma linha, e é comum utilizar assim em c.</div>
                                        <div>&nbsp;* E, como sempre, deve terminar com ponto e vírgula(;).</div>
                                        <div>&nbsp;*/</div>
                                    </div>
                                </div>
                            </CodeBlock>
                        </main>
                    </section>
                    <section>
                        <header>
                            <h3>Revisando</h3>
                        </header>
                        <main>
                            <p>Vimos aqui três metódos de escrever alguma coisa na tela, você pode decidir qual utilizar, quase sempre se utiliza o echo, e eu recomendo, porém caso você queria outras alternativas pode utilizar o print ou o printf, o prinft tem algumas funcionalidades a mais, porém são herdadas do c, porém caso você queria utilizar em php também servirá. Com esse conhecimento já sabemos retornar algo na tela, com o tempo iremos aprimorando o conhecimento em PHP.</p>
                        </main>
                    </section>
                </main>
            </section>
        </Container>
    );
}

export default Output;
