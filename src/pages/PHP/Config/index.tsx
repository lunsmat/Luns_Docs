import React from 'react';

import { Container } from './styles';
import CodeBlock from '../../../styles/components/CodeBlock';

const Config: React.FC = () => {
    return (
        <Container>
            <header>
                <h2>Configurando o ambiente PHP</h2>
            </header>

            <main>
                <section>
                    <header>
                        <h3>Recapitulando</h3>
                    </header>

                    <main>
                        <p>No fim da leitura sobre PHP, foi dito todas as ferramentas que iremos precisar para que possamos desenvolver em PHP. Sendo que as ferramentas listadas foram:</p>
                        <ul>
                            <li>O interpretador do PHP</li>
                            <li>Um servidor</li>
                            <li>Um banco de dados</li>
                            <li>Um editor de códigos</li>
                            <li>Um navegador</li>
                        </ul>
                        <p>Agora, que temos essa lista de ferramentas para utilizar, vamos primeiramente ver os softwares que iremos utilizar. Iremos listar dos mais básicos aos mais avançados</p>
                        <p>Lembrando que aqui nós só iremos citar quais softwares vamo instalar, porém a instalação vai ser feita individualmente de cada um deles, portanto não instale nada no seu computador ainda.</p>
                    </main>
                </section>

                <section>
                    <header>
                        <h3>Navegador</h3>
                    </header>

                    <main>
                        <p>Você provavelmente já deve ter um navegador em sua máquina. Você deve normalmente utilizar ele pra fazer todas as suas pesquisas no dia a dia, porém, geralmente, um desenvolvedor deve utilizar navegadores diferentes nesses casos, tendo um navegador com o objetivo de usar para desenvolvimento, e outro para utilizar no dia a dia.</p>
                        <p>Geralmente, o navegador que é mais utilizado por desenvolvedores é o Google Chrome, devido a ele ter a V8(uma máquina por trás dele que interpreta javascript) de código aberto, portanto ele tem muitas ferramentas de desenvolvimento.</p>
                        <p>Aqui, nós não iremos utilizar o Google Chrome,nós iremos utilizar o <i>Microsoft Edge</i>, pois as suas versões mais recentes foram feitas em cima da V8 que foi utilizada no Google Chrome, logo muitas das vantagens que se tinha, tambem tem agora no Microsoft Edge, inclusive, algumas extensões da Chrome Store estão disponíveis para ele. Além disso, o ganho de performance desse navegador, inclusive em sistemas Windows, foi bem grande, o que faz dele uma das melhores opções.</p>
                    </main>
                </section>

                <section>
                    <header>
                        <h3>Um editor de código</h3>
                    </header>

                    <main>
                        <p>Como foi dito na introdução a PHP, até mesmo com o bloco de notas é possível criar arquivos com a extensão <CodeBlock display="inline">.php</CodeBlock>, porém existem muitas vantagens em se utilizar um editor de códigos. Logo ao utilizar um editor de códigos nós temos diversas funções que vem com eles que melhoram a nossa produção, e nesse caso o nosso aprendizado.</p>
                        <p>O editor de códigos que utilizaremos, assim como o navegador também é da Microsoft, é o <i>Visual Studio Code</i>. Por padrão, várias funções já vem integradas no Visual Studio Code(VSCode), porém é possível instalar extensões nele por meio do proóprio app, dessa maneira você pode adaptar ao tipo de sistemas que você está construindo.</p>
                    </main>
                </section>

                <section>
                    <header>
                        <h3>PHP, Servidor e o Banco de Dados</h3>
                    </header>

                    <main>
                        <p>Em relação ao PHP, o Servidor e o Banco de Dados, geralmente ao começar a programar em PHP, é instalado esses três. Por esse motivo, existem softwares que instalam todas essas ferramentas só de uma vez, sem necessitar instalar cada um individualmente.</p>
                        <p>Disparadamente, o Servidor mais utilizado é o <i>Apache</i>, por diversos motivos, mas ele basicamente ele é um servidor HTTP, e é ele que vamos utilizar para criar um servidor na nossa máquina.</p>
                        <p>Um dos Banco de Dados mais utilizados atualmente é o MySQL, pode também ser considerado o MariaDB como semelhante, portanto é esse é o banco de dados que vamos utilizar.</p>
                        <ul>
                            <li>Apache</li>
                            <li>MariaDB (MySQL)</li>
                            <li>PHP</li>
                        </ul>
                        <p>Quando se baixa esses três para o desenvolvimento chamamos de uma pilha AMP (Apache, MySQL, PHP). Geralmente os softwares que tem esses três juntos são os AMPs, e o software que iremos utilizar é o <i>XAMPP</i>, o último P é de Perl(uma outra linguagem de programação). Com o Xampp iremos instalar um único software e toda essa pilha irá funcionar.</p>
                        <p>Após completar a instalação de o Microsoft Edge(Navegador), o Visual Studio Code(Editor de Código) e o XAMPP(Servidor, Banco de Dados e PHP) teremos um ambiente de desenvolvimento ideal para os nossos problemas do dia a dia com PHP.</p>
                    </main>
                </section>
            </main>
        </Container>
    );
}

export default Config;
