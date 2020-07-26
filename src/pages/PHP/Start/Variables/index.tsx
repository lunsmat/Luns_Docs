import React from 'react';

import { Container } from './styles';
import CodeBlock from '../../../../styles/components/CodeBlock';

const Variables: React.FC = () => {
    return (
        <Container>
            <section>
                <header>
                    <h2>Variáveis em PHP</h2>
                </header>
                <main>
                    <section>
                        <header>
                            <h3>O que são variáveis?</h3>
                        </header>
                        <main>
                            <p>Se você já estudou programação, sabe o que são variáveis, porém se você não estudou ainda agora você vai saber. Variávies são espaços na memória do seu computador, e esses espaços armazenam valores. Esses valores são utilizados pelo nosso código constantemente para serem processados. Logo poderiamos dizer que os valores que formos armazenando vão ser utilizados para ser processados.</p>
                        </main>
                    </section>
                    <section>
                        <header>
                            <h3>Tipagem</h3>
                        </header>
                        <main>
                            <p>Quando se fala de variáveis, geralmente também falamos de tipos, pois uma variável assume um único tipo por momento. Os tipos padrões do c(linguagem mãe do PHP) são:</p>
                            <ul>
                                <li className="mb-1">
                                    <CodeBlock display="inline"><span className="pink">bool</span></CodeBlock>: o bool ou boleana, é uma variável que armazena 1 bit e só pode assumir dois valores, ou assume true(verdadeiro ou 1) ou assume false(falso ou 0). Esse valor é muito utilizado em meios lógicos para verificação.
                                </li>
                                <li className="mb-1"><CodeBlock display="inline"><span className="pink">char</span></CodeBlock>: char é um tipo de variável que armazena um único byte(8 bits ou entre -128 e 127), que corresponde a um valor na tabela ASCII, ou seja ele armazena um único caractere. Ex: "a", "G", "9", ".", ",".</li>
                                <li className="mb-1"><CodeBlock display="inline"><span className="pink">int</span></CodeBlock>: o int representa armazena 4 Bytes na memória, seus valores são de -2.147.483.648 a 2.147.483.647 e, esse, armazena somente valores inteiros. Ex: 8394, 32, -234, 20203.</li>
                                <li className="mb-1"><CodeBlock display="inline"><span className="pink">float</span></CodeBlock>: float é um tipo de variável que armazena 4 Bytes, seus valores são de 1,175494E-038 a 3,402823E+038, esse tipo armazena valores decimais em geral. Ex: 3.4, 343.3432, 12.21.</li>
                                <li className="mb-1"><CodeBlock display="inline"><span className="pink">double</span></CodeBlock>: double, assim como o float, também armazena números decimais, porém armazenam 8 Bytes com valores de 2,225074E-308 a 1,797693E+308, pois armazenam valores decimais precisos, geralmente de uso científico. Ex: 0.23212434, 239.12543544323.</li>
                                <li className="mb-1"><CodeBlock display="inline"><span className="pink">void</span></CodeBlock>: void tem 1 Byte na memória porém esse não armazena valores, diferente dos outros, esse não armazena valor algum.</li>
                            </ul>
                            <p>Esses são os tipos padrões que o C tinha, e pelo fato de ser uma linguagem mãe de muitas outras linguagens acaba que esses tipos de variáveis podem ser tirado como o "padrão inicial".</p>
                        </main>
                    </section>
                    <section>
                        <header>
                            <h3>Variáveis em PHP</h3>
                        </header>
                        <main>
                            <p>Agora que você sabe alguns tipos de variáveis, você pode aprender como declarar variáveis em PHP, dessa maneira você aprende os tipos na prática. Para declarar uma variável em PHP, bastar escrever $ junto com o nome de uma variável.</p>
                            <CodeBlock>
                                <div className="pink">{"<?php"}</div>
                                <div>$variable; <span className="comment">// Dessa maneira declaramos uma variável, logo essa variável já existe na memória.</span></div>
                                <div className="comment">
                                    <div>/**</div>
                                    <div>&nbsp;* Para que seu programa funcione melhor você pode tomar alguns cuidados na hora de declarar uma variável. Tais como:</div>
                                    <div>&nbsp;* - Não utilizar caracteres especiais (:, ´, ç, ã)</div>
                                    <div>&nbsp;* - Não começar com números ($1variavel, $2variavel)</div>
                                    <div>&nbsp;* - Não usar sinais no geral (+, -, ?, ^, =), porém pode se usar o _ ($variavel_1)</div>
                                    <div>&nbsp;*/</div>
                                </div>
                            </CodeBlock>
                            <p>Aqui percebemos como declarar variáveis, porém para dar algum valor a elas e, consequentemente, dar um tipo a elas, basta usar o sinal de igual(=), pois esse sinal indica atribuição, logo você estará atribuindo um valor a determinada variável.</p>
                            <CodeBlock>
                                <div className="pink">{"<?php"}</div>
                                <div>$bool <span className="pink">=</span> <span className="purple">true</span>; <span className="comment">// Variável do tipo boleana e nesse caso o valor dela é igual a true (verdadeiro/1)</span></div>
                                <div>$char <span className="pink">=</span> <span className="yellow">"L"</span>; <span className="comment">// Variável do tipo char(caractere) e nesse caso o valor é L</span></div>
                                <div>$int <span className="pink">=</span> <span className="purple">30</span>; <span className="comment">// Variável do tipo inteira, nesse caso o valor é 30</span></div>
                                <div>$float <span className="pink">=</span> <span className="purple">3.14</span>; <span className="comment">// Variável do tipo float e nesse caso recebe o valor de 3.14</span></div>
                                <div>$double <span className="pink">=</span> <span className="purple">0.1829365172943</span>; <span className="comment">// Variável do tipo double e nesse caso recebe o valor de 0.1829365172943</span></div>
                                <div>$void <span className="pink">=</span> <span className="purple">null</span>; <span className="comment">// Não existe o valor void no PHP, porém o valor que existe é o null, logo não está atribuído o valor null (nulo) a essa variável</span></div>
                            </CodeBlock>
                            <p>Você pode ver que percorremos pelos tipos primitivos de variáveis, esses são os padrões que você acha pelas linguagens de programação.</p>
                        </main>
                    </section>
                    <section>
                        <header>
                            <h3>Tipagem estática e tipagem dinâmica</h3>
                        </header>
                        <main>
                            <p>Sempre que falamos de tipagem já nos referimos ao tipo de variável, e nas linguagens de progamação temos 2 tipos de tipagem, a tipagem estática e a tipagem dinâmica.</p>
                            <ul>
                                <li>Tipagem estática: Nesse tipo de tipagem, as variáveis tem seus tipos de modo estático, logo uma variável do tipo int poderia assumir qualquer outro valor inteiro, porém, obrigatóriamente, essa varíavel deve ser do tipo int, logo não poderia haver mudaças no tipo da variável, apenas no valor.</li>
                                <li>Tipagem dinâmica: Nesse tipo de tipagem, as variáveis podem inicializar com um tipo de tipagem, porém a variável pode mudar tanto de valor quanto de tipo. Logo, indepedente do tipo que foi atribuído a variável, esse pode livremente ser alterado.</li>
                            </ul>
                            <p>O php trabalha com tipos dinâmicos, logo suas variáveis podem ser alteradas tanto o valor quanto o tipo, por esse motivo as varíaveis do tipo int, float e double são reduzidas a variáveis do tipo number(número).</p>
                            <CodeBlock>
                                <div className="pink">{"<?php"}</div>
                                <div>$variable <span className="pink">=</span> <span className="purple">true</span>; <span className="comment">// Iniciamos a váriavel com o tipo booleano</span></div>
                                <div>$variable <span className="pink">=</span> <span className="purple">7</span>; <span className="comment">// Mudamos a variável para o tipo number</span></div>
                                <div>$variable <span className="pink">=</span> <span className="yellow">"D"</span>; <span className="comment">// Mudamos a variável para o tipo char</span></div>
                                <div className="comment">
                                    <div>/**</div>
                                    <div>&nbsp;* Nesse caso iniciamos a variável $variable com um tipo boolean</div>
                                    <div>&nbsp;* Após isso alteramos o tipo da variável 3 vezes</div>
                                    <div>&nbsp;* E para o PHP isso funciona normalmente pois a tipagem é dinâmica</div>
                                    <div>&nbsp;* Dessa maneira o próprio PHP administra os tipos e a memória dedicada a variável</div>
                                    <div>&nbsp;* Dessa maneira podemos livremente alterar o tipo e o valor das variáveis.</div>
                                    <div>&nbsp;*/</div>
                                </div>
                            </CodeBlock>
                        </main>
                    </section>
                    <section>
                        <header>
                            <h3>Exibindo variáveis</h3>
                        </header>
                        <main>
                            <p>Chegando aqui você já deve ter visto sobre os comandos de saída, e esses comandos podem ser utilizados para exibir variáveis, basta mudar que ao invés de exibir um texto, você irá exebir uma variável.</p>
                            <CodeBlock>
                                <div className="pink">{"<?php"}</div>
                                <div>$variable <span className="pink">=</span> <span className="yellow">"D"</span>; <span className="comment">// Declarando uma variável</span></div>
                                <div><span className="cyan">echo </span>$variable; <span className="comment">// Será exibido D na tela</span></div>
                                <div><span className="cyan">echo </span><span className="yellow">"{"<br />"}"</span>; <span className="comment">// Exibindo uma quebra de linha na tela</span></div>
                                <br />
                                <div>$variable <span className="pink">=</span> <span className="yellow">7</span>; <span className="comment">// Mudando o valor da variável para 7</span></div>
                                <div><span className="cyan">echo </span>$variable; <span className="comment">// Será exibido 7 na tela</span></div>
                            </CodeBlock>
                            <p>O mesmo funciona para o print e o printf, basta mudar para exibir a variável na tela ao invés de um texto, na próxima aula de operadores veremos como melhorar ao printar as variáveis.</p>
                            <p>Até agora você aprendeu a usar o echo, porém existe uma outra variação dele que é para se usar direto em uma página onde você abre a tag php com o echo. Ele se faz dessa maneira:</p>
                            <CodeBlock>
                                <div className="pink">{"<?php"} <span className="comment">// Abrindo a tag</span></div>
                                <div>$variable <span className="pink">=</span> <span className="yellow">7</span>; <span className="comment">// Declarando uma variável</span></div>
                                <div className="pink">{"?>"} <span className="comment">{"<!-- Fechando a tag php (utilizando comentários HTML pois os comentários PHP só funcionam dentro das tag PHP) ->"}</span></div>
                                <div className="comment">{"<!-- Mostrando a varíavel -->"}</div>
                                <div>
                                    {"<"}<span className="pink">p</span>{">"}
                                        O valor da variável é de <span className="pink">{"<?="} </span>$variable; <span className="pink">{"?>"}</span>
                                    {"</"}<span className="pink">p</span>{">"} <span className="comment">{"<!-- O valor da variável é de 7 -->"}</span>
                                </div>
                                <div className="comment">
                                    <div>{"<!--"}</div>
                                    <div className="block">
                                        <div>Nesse caso utilizamos o {"<?= $variable; ?>"} o que equivaleria a {"<?php echo $variable; ?>"}</div>
                                        <div>Isso é uma short sintaxe(sintaxe curta)</div>
                                        <div>Antigamente você poderia abrir a tag php com {"<?"}, porém por padrões que foram criados para diminuir erros nos servidores, hj é apenas com {"<?php"}</div>
                                        <div>Usamos o {"<?="} apenas com variáveis, mas lembre que ele representa um echo e pode ser utilizado para imprimir valores na tela também</div>
                                    </div>
                                    <div>{"-->"}</div>
                                </div>
                            </CodeBlock>
                        </main>
                    </section>
                    <section>
                        <header>
                            <h3>Variáveis compostas: Array</h3>
                        </header>
                        <main>
                            <p>Dentre as variáveis, existem as quais assumem mais de um valor, essas são os array e os objetos. Em relação aos objetos, temos pode se ter um conhecimento mais profundo quando falamos de programação orientada a objetos, porém ainda hoje veremos um exemplo. Os arrays são variáveis que assumem mais de um valor, por exemplo, imagine que você vá armazenar suas notas da escola. Com variáveis normais você teria que declarar 4 variáveis, porém com array você pode declarar apenas uma variável e essa terá quatro posições, onde cada posição corresponde a uma nota. Eis o exemplo </p>
                            <CodeBlock>
                                <div className="pink">{"<?php"}</div>
                                <div className="comment">// Sem utilizar array</div>
                                <div>$nota1 <span className="pink">= </span> <span className="purple">7.5</span>;</div>
                                <div>$nota2 <span className="pink">= </span> <span className="purple">6</span>;</div>
                                <div>$nota3 <span className="pink">= </span> <span className="purple">8.3</span>;</div>
                                <div>$nota4 <span className="pink">= </span> <span className="purple">7.8</span>;</div>
                                <div className="comment">
                                    <div>/**</div>
                                    <div>&nbsp;* Nesse caso pra cada nota tivemos que criar uma variável</div>
                                    <div>&nbsp;* Porém estamos nos referido a valores que se referem a mesma situação (notas), logo citar valor por valor pode não ser a melhor opção</div>
                                    <div>&nbsp;* Portanto seria melhor ter uma única variável que armazenasse todos os valores, e por isso temos o array</div>
                                    <div>&nbsp;*/</div>
                                </div>
                                <br />
                                <div className="comment">// Utilizando um array</div>
                                <div>$notas <span className="pink">= </span><span className="cyan">array</span>(<span className="purple">7.5</span>, <span className="purple">6</span>, <span className="purple">8.3</span>, <span className="purple">7.8</span>); <span className="comment">// Declarando um array</span></div>
                                <div>$notas <span className="pink">= </span>[<span className="purple">7.5</span>, <span className="purple">6</span>, <span className="purple">8.3</span>, <span className="purple">7.8</span>]; <span className="comment">// Outra forma de um array ser declarado</span></div>
                                <div className="comment">
                                    <div>/**</div>
                                    <div>&nbsp;* Nesse caso temos todas as notas armazenadas em apenas uma variável</div>
                                    <div>&nbsp;* Cada nota possui uma posição dentro do array</div>
                                    <div>&nbsp;* Na programação, na maioria dos casos, a contagem começa do zero</div>
                                    <div>&nbsp;* Logo se acessarmos uma o array na posição 0 teremos a nota 7.5</div>
                                    <div>&nbsp;* Agora veremos como se acessa uma posição no array</div>
                                    <div>&nbsp;*/</div>
                                </div>
                                <br />
                                <div className="comment">// Acessando um valor no array pela sua posição</div>
                                <div>$notas <span className="pink">= </span>[<span className="purple">7.5</span>, <span className="purple">6</span>, <span className="purple">8.3</span>, <span className="purple">7.8</span>]; <span className="comment">// Dado o array</span></div>
                                <div>$nota1 <span className="pink">= </span>$notas[<span className="purple">0</span>]; <span className="comment">// A variável $nota1 recebe o valor do array $notas na posição 0(valor 7.5)</span></div>
                                <div><span className="cyan">echo </span>$nota1; <span className="comment">// Será exibido 7.5 na tela</span></div>
                                <div className="comment">
                                    <div>/**</div>
                                    <div>&nbsp;* Nesse caso começamos a pensar nas posições dentro do array</div>
                                    <div>&nbsp;* As contagem de posições começa do 0</div>
                                    <div>&nbsp;* Cada posição pode também ser chamada de chave</div>
                                    <div>&nbsp;* Cada chave libera acesso a um valor dentro do array</div>
                                    <div>&nbsp;* Na posição [1] o array tem o valor 6</div>
                                    <div>&nbsp;* Nesses exemplos utilizamos array de números porém o mesmo vale para todos os tipos ou até mesmo tipos de variáveis diferente no mesmo array. Tambem poderiamos exibir na tela com `echo $notas[0];`</div>
                                    <div>&nbsp;*/</div>
                                </div>
                            </CodeBlock>
                        </main>
                    </section>
                    <section>
                        <header>
                            <h3>O tipo string</h3>
                        </header>
                        <main>
                            <p>Imagine que você queria armazenar o seu nome em uma variável, se fosse do tipo char teria que armazenar um caractere por variável. Por isso, existe o tipo string, no geral o string é um tipo como os outros e ele armazena um texto, porém na realidade, o string nada mais é do que um array de caracteres.</p>
                            <CodeBlock>
                                <div className="pink">{"<?php"}</div>
                                <div>$string <span className="pink">= </span><span className="yellow">"Hello World!"</span>; <span className="comment">// A declaração de uma string</span></div>
                                <div><span className="cyan">echo </span>$string; <span className="comment">// Será exibido Hello World! na tela</span></div>

                                <div className="comment">
                                    <div>/**</div>
                                    <div>&nbsp;* Em outros casos você já teria aprendido sobre strings</div>
                                    <div>&nbsp;* Sua declaração é a de como uma variável normal</div>
                                    <div>&nbsp;* Mas a realidade é que a string nada é menos que um array de caracteres</div>
                                    <div>&nbsp;* Logo também podemos considerar o char uma string com apenas uma posição</div>
                                    <div>&nbsp;* Por isso não existe necessidade de falar que uma variável é um caractere(char) ou um array de caracteres, basta dizer que é uma string</div>
                                    <div>&nbsp;* O texto entre aspas é apenas o valor atribuido a variável</div>
                                    <div>&nbsp;*/</div>
                                </div>
                            </CodeBlock>
                        </main>
                    </section>
                    <section>
                        <header>
                            <h3>Variáveis compostas: objeto</h3>
                        </header>
                        <main>
                            <p>Quando falamos de objeto nos remete a programação orientada a objetos, porém é um conhecimento mais avançado de programação, portanto iremos aprender agora apenas a declarar um objeto, mas para se programar com Programação orientada a objetos ainda levará tempo.</p>
                            <p>Você deve ter visto que ao declara um array cada valor terá uma chave(posição), porém é possível declarar um array e especificar como será chamada essa chave, e qual será o seu valor. Primeiramente imaginamos que eu queira armazenar em uma variável o nome, email e telefone de uma pessoa, porém simplesmente armazenar em um array não daria certo, pois as posições facilmente confudiriam quem fosse ver a variável, por isso na declaração de um objeto você declara os valores das chaves que seram utilizadas.</p>
                            <CodeBlock>
                                <div className="pink">{"<?php"}</div>
                                <div>$pessoa <span className="pink">= </span>[</div>
                                <div className="block">
                                    <div>
                                        <span className="yellow">"nome" <span className="pink">{"=>"}</span> "Luan"</span>,<span className="comment"> // Se utiliza = e {">"} e se declara uma chave(nome) a um valor(Luan). Separando sempre por virgula para o próximo</span>
                                    </div>
                                    <div>
                                        <span className="yellow">"email" <span className="pink">{"=>"}</span> "luan.farias_bvs@outlook.com"</span>,
                                    </div>
                                    <div>
                                        <span className="yellow">"telefone" <span className="pink">{"=>"}</span> "(91) 992812696"</span>
                                    </div>
                                </div>
                                <div>];</div>
                                <div className="comment">
                                    <div>/**</div>
                                    <div>&nbsp;* Nesse caso declaramos o array porém ao invés de se usar posições utilizamos chaves</div>
                                    <div>&nbsp;* Dizemos que isso é um objeto pois ao acessar acessaremos pela chave e não pela posição, logo pode se considerar um objeto</div>
                                    <div>&nbsp;* Mas apesar de charmamos isso de um objeto no momento que estudarmos programação orientada a objetos vamos descobrir que isso ainda é um array com chaves especificadas.</div>
                                    <div>&nbsp;* Vamos fazer um exemplo printando o nome da pessoa na tela e pegaremos o valor pela chave</div>
                                    <div>&nbsp;*/</div>
                                </div>
                                <div><span className="cyan">echo </span>$pessoa[<span className="yellow">"nome"</span>]; <span className="comment">// Será exibido Luan na tela</span></div>
                            </CodeBlock>
                        </main>
                    </section>
                    <section>
                        <header>
                            <h3>Variáveis compostas: Matrizes</h3>
                        </header>

                        <main><p>Já vimos aqui os arrays, e os "objetos", que também são arrays, porém vamos dar uma olhada agora em matrizes. Matrizes na realidade também é um array, porém que nas suas posições também existe um array. Na realidade, um array por ser um tipo de variável, pode também armazenar arrays, por esse motivo, vamos ver um exemplo de uma bem simples, também com a variável pessoa, porém agora vamos olhar adicionar mais um campo, as suas linguagens de programação.</p>
                        <CodeBlock>
                            <div className="pink">{"<?php"}</div>
                            <div>$pessoa <span className="pink">= </span>[</div>
                            <div className="block">
                                <div>
                                    <span className="yellow">"nome" <span className="pink">{"=>"}</span> "Luan"</span>,
                                </div>
                                <div>
                                    <span className="yellow">"email" <span className="pink">{"=>"}</span> "luan.farias_bvs@outlook.com"</span>,
                                </div>
                                <div>
                                    <span className="yellow">"telefone" <span className="pink">{"=>"}</span> "(91) 992812696"</span>,
                                </div>

                                <div>
                                    <span className="yellow">"linguagens"</span> <span className="pink">{"=>"}</span> [
                                        <div className="block">
                                            <div><span className="yellow">"C"</span>,</div>
                                            <div><span className="yellow">"Javascript"</span>,</div>
                                            <div><span className="yellow">"PHP"</span></div>
                                        </div>
                                    <div>]</div>
                                </div>
                            </div>
                            <div>];</div>
                            <div className="comment">
                                <div>/**</div>
                                <div>&nbsp;* Pode-se considerar uma matriz isso no momento em que é uma array e nas linguagens temos um array</div>
                                <div>&nbsp;* Ou seja, temos um array dentro de outro array, o que faz disso uma matriz</div>
                                <div>&nbsp;* Porém meu objetivo não é falar sobre matrizes, é apenas mostrar essa possibilidade, pois assim seu programa fica  mais apto a utilizar melhor as variáveis</div>
                                <div>&nbsp;* Imagine que agora ao invés de um apenas uma pessoa fosse ter um array de pessoas</div>
                                <div>&nbsp;* Teriamos uma variável que é um array de pessoas. Cada pessoa é um array(objeto), e teria dentro de si as linguagens que é outro array</div>
                                <div>&nbsp;* Logo vamos percebendo que o uso de arrays é bastante útil</div>
                                <div>&nbsp;* Antes de finalizar um exemplo de como exibir o valor Javascript. Pois nesse caso exibiremos a a posição 1 (lembrando que a contagem inicia no 0), das linguagens do array pessoa</div>
                                <div>&nbsp;*/</div>
                            </div>
                            <div><span className="cyan">echo </span>$pessoa[<span className="yellow">"habilidades"</span>][<span className="purple">1</span>]; <span className="comment">// Será exibido Javascript</span></div>
                        </CodeBlock>
                        </main>
                    </section>
                    <section>
                        <header>
                            <h3>Exibindo arrays</h3>
                        </header>
                    <main>
                        <p>Sabemos como exibir uma única posição dentro do array, porém e se para um teste tivermos que exibir o array inteiro? Para isso o PHP já tem uma função que é o print_r:</p>
                        <CodeBlock>
                            <div className="pink">{"<?php"}</div>
                            <div>$pessoa <span className="pink">= </span>[</div>
                            <div className="block">
                                <div>
                                    <span className="yellow">"nome" <span className="pink">{"=>"}</span> "Luan"</span>,
                                </div>
                                <div>
                                    <span className="yellow">"email" <span className="pink">{"=>"}</span> "luan.farias_bvs@outlook.com"</span>,
                                </div>
                                <div>
                                    <span className="yellow">"telefone" <span className="pink">{"=>"}</span> "(91) 992812696"</span>,
                                </div>

                                <div>
                                    <span className="yellow">"linguagens"</span> <span className="pink">{"=>"}</span> [
                                        <div className="block">
                                            <div><span className="yellow">"C"</span>,</div>
                                            <div><span className="yellow">"Javascript"</span>,</div>
                                            <div><span className="yellow">"PHP"</span></div>
                                        </div>
                                    <div>]</div>
                                </div>
                            </div>
                            <div>]; <span className="comment">// Dado o array</span></div>
                            <div>
                                <span className="cyan">echo</span>
                                &nbsp;
                                <span className="yellow">"{"<pre>"}"</span>;
                                <span className="comment"> // Printando uma pre formatação para o array estar de melhor entendimento</span>
                            </div>
                            <div>
                                <span className="cyan">print_r</span>($pessoa); <span className="comment">// O print_r exibe o array inteiro</span>
                            </div>
                            <div className="comment">/**</div>
                            <div className="comment">&nbsp;*Dessa maneira o array inteiro vai ser exibido e o formato estará em chave valor</div>
                            <div className="comment">&nbsp;* Você verá um resultado semelhante a:</div>
                            <div className="block comment">
                                <div>Array</div>
                                <div>(</div>
                                <div className="block">
                                    <div>[nome] {"=>"} Luan</div>
                                    <div>[email] {"=>"} luan.farias_bvs@outlook.com</div>
                                    <div>[telefone] {"=>"} (91) 992812696</div>

                                    <div>[linguagens] {"=>"} Array</div>
                                    <div>(</div>
                                    <div className="block">
                                        <div>[0] {"=>"} C</div>
                                        <div>[1] {"=>"} Javascript</div>
                                        <div>[2] {"=>"} PHP</div>

                                    </div>
                                    <div>)</div>
                                </div>
                                <div>)</div>
                            </div>
                            <div className="comment">&nbsp;* Perceba que não fechamos a tag pre, isso é opcional e é a mesma lógica de não termos fechado a tag PHP</div>
                            <div className="comment">&nbsp;*/</div>
                        </CodeBlock>
                    </main>
                    </section>
                    <section>
                        <header>
                            <h3>Revisando</h3>
                        </header>
                        <main>
                            <p>Com isso vimos hoje sobre muitas coisas, tais como tipagem, variáveis, strings, arrays, matrizes e eu espero que você tenha aprendido um pouco sobre, ainda tem muita coisa para se estudar a cerca disso, porém com o tempo vamos melhorando nossos conhecimentos.</p>
                        </main>
                    </section>
                </main>
            </section>
        </Container>
    );
}

export default Variables;
