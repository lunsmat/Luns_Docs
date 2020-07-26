import React from 'react';

import { Container } from './styles';
import CodeBlock from '../../../../styles/components/CodeBlock';

const XAMPP: React.FC = () => {
    return (
        <Container>
            <header>
                <h2>Instalando o PHP</h2>
            </header>
            <main>
                <section>
                    <header>
                        <h3>Recapitulando...</h3>
                    </header>
                    <main>
                        <p>Como já foi dito quando falamos do php, ele é uma linguagem que é interpretada, logo para rodarmos programas feitos em php é necessário que tenhamos o interpretador do php, portanto nessa sessão iremos instalar esse.</p>
                        <p>Támbém já foi dito queo php é uma linguagem backend(server-side, que roda no servidor), então baixando apenas o php sem ter um servidor teriamos um ambiente de desenvolvimento incompleto, logo, para que tenhamos um ambiente de desenvolvimento completo com php, seria necessário um servidor e nesse caso utilizaremos o servidor apache.</p>
                        <p>PHP é uma linguagem de backend, o backend roda no servidor, mas assim por rodar no servidor na maioria das vezes vamos utilizar para o tratamento de dados, porém ele não armazena dados, logo para fazer esse armazenamento seria necessário um banco de dados e o php faria conexões com esse banco de dados, logo seria necessário também termos um banco de dados instalado na nossa máquina e por isso iremos instalar o banco de dados mysql.</p>
                        <ul>
                            <li>Apache</li>
                            <li>MySql</li>
                            <li>PHP</li>
                        </ul>
                        <p>Como já foi dito, ao se instalar esses 3, estaremos configurando um AMP e por isso vários aplicativos fazem isso por padrão e instalam os três, por isso hoje iremos utilizar o XAMPP:</p>
                        <ul>
                            <li>X: Suporta vários sistemas operacionais</li>
                            <li>A: Apache</li>
                            <li>M: MySql</li>
                            <li>P: PHP</li>
                            <li>P: Perl(Outra linguagem de programação que não iremos utilizar)</li>
                        </ul>
                    </main>
                </section>

                <section>
                    <header>
                        <h3>Instalando o XAMPP</h3>
                    </header>
                    <main>
                        <p>Para instalar o xampp, basta ir no site do xampp e baixar o instalador, para entrar no site basta <a href="https://www.apachefriends.org/pt_br/index.html" target="_blank" rel="noopener noreferrer">clicar aqui.</a> Após isso execute o instalador, e prossiga com a instalação, pelo meio da instalação pode ser que apareça a opção de escolher quais componentes do xampp utilizar, deixe o padrão com tudo selecionado.</p>
                        <p>Anote o lugar onde será instalado o xampp, de preferêcia deixe no padrão que é <CodeBlock display={'inline'}>{'C:/xampp'}</CodeBlock>, pois precisaremos utilizar o diretório do onde será instalado.</p>
                        <p>Após isso, você terá o aplicativo do xampp, procure pelo Xampp control em seus apps e execute, caso não consiga achar você pode achar em <CodeBlock display="inline">{"C:/xampp/xampp-control.exe"}</CodeBlock>, execute e abrirá o painel de controle no xampp, e ative o apache.</p>
                        <p>Com o apache ativado o seu servidor local estará pronto, pelo fato de estar na sua máquina, você pode acessar pelo seu endereço de ip local(lan), e pela sua máquina com 127.0.0.1 (ou http://localhost).</p>
                        <p>Para acessar uma página na web, geralmente você só coloca <CodeBlock display="inline">{"https://site.com"}</CodeBlock>, pois ao acessar você sempre tem a noção de porta, ou seja, você entrará na página por uma porta, e quando você simplesmente acessa pelo navegador ele sempre utiliza a porta 80 como padrão, logo você está entrando na página da seguinte maneira <CodeBlock display="inline">{"https://site.com:80"}</CodeBlock>, onde após os dois pontos(:) você especifíca a porta.</p>
                        <p>O apache por padrão utiliza a porta 80, logo ao acessar pelo navegador, não é necessário especificar por qual porta entrar. Portanto, vá até o seu navegador e digite localhost(se redirecionar para o google digite http://localhost, ou 127.0.0.1), que é a referência que o seu computador para a sua própria máquina. Ao acessar, não deve dar nenhum erro e simplesmente acessar uma página padrão do xampp. Se isso aparecer, o seu servidor está funcionando, do contrário não estará, verifique o apache e tente novamente.</p>
                    </main>
                </section>
                <section>
                    <header>
                        <h3>Verificando o PHP</h3>
                    </header>
                    <main>
                        <p>Como já foi dito anteriormente, o xampp também instalou o PHP, e antes de testarmos ele vamos na pasta <CodeBlock display="inline">{"C:/xampp/htdocs"}</CodeBlock> e apague todos os arquivos que estiver dentro dessa pasta. Com isso, se você acessar no navegador localhost novamente, não irá aparecer nada, pois o servidor do apache está programado para ir procurar arquivos dentro dessa pasta do htdocs, logo como não tem arquivos dentro dessa pasta ele não acha nada e declara que você está dentro dessa pasta apenas.</p>
                        <p>Para testar agora o PHP, entre no visual studio code e abra na pasta <CodeBlock display="inline">{"C:/xampp/htdocs"}</CodeBlock>(File {'>'} Open Folder), após isso crie um arquivo(ctrl + n ouFile {'>'} New File)  e salve(ctrl + s ou File {'>'} Save) com o nome <strong>index.php</strong> na pasta.</p>
                        <p>Nesse arquivo digite o seguinte código:</p>
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
                        <p>Após isso salve novamente e quando você acessar localhost pelo navegador,deverá aparecer <strong>Hello World!</strong> na tela, o que significa que o PHP estará funcionando.</p>
                        <p>Note que se no navegador você ver o código fonte da página não aparecerá o seu código php, apenas HTML.</p>
                    </main>
                </section>
                <section>
                    <header>
                        <h3>Tudo bem, mas qual o processo?</h3>
                    </header>
                    <main>
                        <p>Nesse caso, acontece um processo simples :</p>
                        <ul>
                            <li>Primeiro você entrou no navegador;</li>
                            <li>Fez a requisição para a sua própria máquina na porta 80;</li>
                            <li>O apache que e está rodando na porta 80 aceitou a requisição;</li>
                            <li>O apache entrou na pasta htdocs do seu servidor e por padrão ele procurou pelo arquivo index.html e não achou;</li>
                            <li>O apache procura então pelo arquivo index.php e acha;</li>
                            <li>O apache percorre o arquivo e em lugares que estão delimitados pelas tags PHP(<CodeBlock display="inline"><span className="pink">{"<?php"}</span></CodeBlock> e <CodeBlock display="inline"><span className="pink">{"?>"}</span></CodeBlock>) o apache chama o PHP para interpretar esses comandos;</li>
                            <li>O php interpreta os comandos;</li>
                            <li>O apache retorna o arquivo que como já foi interpretado os comandos php agora é apenas html;</li>
                            <li>O browser interpreta esse html.</li>
                        </ul>
                        <p>Claro que uma requisição pode ser muito mais complexa que isso, porém por esse motivo que o retorno é apenas html, pelo fato que o php é interpretado no servidor, e o retorno para o clienteé apenas html. Logo, esse seria um ciclo basico entre um cliente e um servidor, porém bem útil essa informações. Com isso você pode entender como ocorrerá a lógica de onde vai estar o seu código php no processo de desenvolver com esta linguagem.</p>
                    </main>
                </section>

                <section>
                    <header>
                        <h3>Estrutura da pasta htdocs</h3>
                    </header>
                    <main>
                        <p>Para que você tenha uma noção de como utilizar a pasta htdocs, agora iremos aprender algumas coisas básicas.</p>
                        <p>Você sabe que o apache sempre vai procurar pelo arquivo index, mas e se o nome do arquivo fosse <strong>teste.php</strong>?. Nesse caso, você poderia acessar do seu navegador por <strong>localhost/teste.php</strong>, onde após a / você especifica qual o arquivo.</p>
                        <p>Mas e se eu tiver uma pasta chamada <strong>teste</strong> e dentro dessa pasta estivesse meu <strong>index.php</strong>? Nesse caso, você acessa no seu navagador por <strong>localhost/teste</strong>, pois assim após a / ele especifica a pasta e dentro dela procura pelo <strong>index.php</strong>.</p>
                        <p>E se eu estivesse dentro da pasta <strong>teste</strong> e dentro dela estivesse o arquivo <strong>teste.php</strong>? Então você acessa no seu navegador por <strong>localhost/teste/teste.php</strong>, onde você especificou a pasta e o arquivo.</p>
                        <p>Eu estou dando essa noção básica pois durante o tempo cujo eu vou explicar para vocês como funciona o PHP eu não direi para vocês criarem o arquivo, ou criar pastas e colocarem os arquivos nelas, pois agora cabem a vocês se interessar e colocar o código aqui aprendido em prática.</p>
                    </main>
                </section>
            </main>
        </Container>
    );
}

export default XAMPP;
