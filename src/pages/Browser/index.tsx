import React from 'react';

import { Container } from './styles';

const Browser: React.FC = () => {
    return (
        <Container>
            <header>
                <h2>Configurando o Navegador</h2>
            </header>

            <main>
                <section>
                    <header>
                        <h3>Recapitulando...</h3>
                    </header>

                    <main>
                        <p>Nessa seção iremos instalar o navegador ao qual utilizaremos no momento de desenvolver nossas aplicações.</p>
                        <p>Como dito anteriormente, iremos utilizar o navegador Microsoft Edge.</p>
                        <p>Primeiramente iremos dizer os passos de instalação para após isso dizer o porque usar ese navegador.</p>
                    </main>
                </section>

                <section>
                    <header>
                        <h3>Instalando o Microsoft Edge</h3>
                    </header>

                    <main>
                        <p>Se você usa o windows você já deve ter instalado o Microsoft Edge em sua máquina, porém continue fazendo essas etapas pois você deve estar utilizando uma versão antiga dele.</p>
                        <p>Já se você não utiliza o windows você não terá esse navegador por padrão na sua máquina, porém o processo de instalação desse navegadoré bem simples. Basta seguir os seguintes passos:</p>
                        <ul>
                            <li>Entre na página de download do Microsoft Edge,você pode entrar <a href="https://www.microsoft.com/pt-br/edge">clicando aqui.</a></li>
                            <li>Após isso você terá o instalador do Edge, basta executar e após isso o instalador irá instalar o Edge para você.</li>
                            <p>Após isso o navegador já estará instalado, logo você não terá de se preocupar.</p>
                        </ul>
                    </main>
                </section>

                <section>
                    <header>
                        <h3>Por que o Edge?</h3>
                    </header>

                    <main>
                        <p>Se você já viu outros tutorias onde eles citam algum navegador para se usar, provavelmente, pediram para você usar o Google Chrome. Eu concordo totalmente e o Google Chrome pode sim ser considerado a melhor opção para desenvolvimento, então por que instalar o Edge?</p>
                        <p>O Chrome pode ser a melhor opção principalmente pelo fato de que a máquina que roda o Javascript(conhecida como V8 do Chrome) era de código aberto,então você pode achar uma infinidade de ferramentas para desenvolvimento para o chrome. Então, retornando a pergunta, por que o Edge?</p>
                        <p>A nova versão do Microsoft Edge foi feita em cima da V8 do Google Chrome, logo eles compartilham da mesma máquina que roda o Javascript, isso trás muitas vantagens para o navegador, incluindo que extensões da Chrome Web Store estão disponíveis para o Edge. Com isso várias ferramentas de desenvolvimento também estarão disponíveis para se usar no Edge, mesmo que não todas, e a nova versão trouxe diversos ganhos de performance e usabilidade a tornando uma ótima opção para desenvolvimento, principalmente se você utiliza o windows.</p>
                    </main>
                </section>

                <section>
                    <header>
                        <h3>É necessário mesmo que eu instale outro navegador?</h3>
                    </header>

                    <main>
                        <p>Não. Não existe necessidade em instalar outro navegador, porém eu recomendo que você tenha outro que você utilize para desenvolver as suas aplicações, dessa maneira você tem um ambiente de desenvolvimento mais amigável para trabalhar.</p>
                        <p>Dentre isso, você também teria um outro navegador onde fazer suas pesquisas e elas seriam mais certeiras e mais eficientes.</p>
                    </main>
                </section>

                <section>
                    <header>
                        <h3>Finalizando:</h3>
                        <p>Tratando se de um resumo final eu diria que se você quer se tornar um desenvolvedor, pode ser uma melhor prática destinguir de suas ferramentas de uso pessoal para as ferramentas de uso de desenvolvimento.</p>
                        <p>Espero que você tenha entendido o fato da utilização do microsoft Edge e as vantangens que a nova versão dele pode trazer aos desenvolvedores. E o porquê de utilizar ele ao invés do Chrome, que continua sendo uma ótima opção.</p>
                    </header>
                </section>
            </main>
        </Container>
    );
}

export default Browser;
