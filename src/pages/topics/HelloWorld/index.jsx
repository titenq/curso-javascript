import { Badge, Image } from 'react-bootstrap';

import styles from '../Topics.module.css';
import Code from '../../../components/Code';
import helloWorld from '../../../helpers/code/helloWorld';
import helloWorldC from '../../../helpers/code/helloWorldC';
import helloWorldJava from '../../../helpers/code/helloWorldJava';
import CustomTopic from '../CustomTopic';
import vscodeCriarArquivo from '../../../assets/img/vscode-criar-arquivo.png';
import vscodeNaoGravado from '../../../assets/img/vscode-nao-gravado.png';
import vscodeGravado from '../../../assets/img/vscode-gravado.png';
import vscodeAbrirTerminal from '../../../assets/img/vscode-abrir-terminal.png';
import vscodeTerminal from '../../../assets/img/vscode-terminal.png';

const HelloWorld = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        O <span className="fst-italic">Hello World</span> é uma tradição em linguagens de programação onde é executado o programa mais simples possível nessa linguagem, sendo exibido a mensagem <span className="fst-italic">Hello World</span>.
      </p>

      <p className={styles.p_container}>
        Ao criar e executar o <span className="fst-italic">Hello World</span>, os iniciantes podem confirmar que seu ambiente de desenvolvimento está configurado corretamente. Isso é importante, pois, muitas vezes, o primeiro desafio em programação é configurar o ambiente de desenvolvimento.
      </p>

      <p className={styles.p_container}>
        O primeiro <span className="fst-italic">Hello World (Olá mundo)</span> foi criada por Brian Kernighan em 1972, que escreveu um código em C no seu livro <span className="fst-italic">A Linguagem de Programação C (The C Programming Language)</span>.
      </p>

      <p className={styles.p_container}>
        <span className="fst-italic">Hello World</span> na linguagem C: {' '}
      </p>

      <Code codeString={helloWorldC}  />

      <p className={styles.p_container}>
        <span className="fst-italic">Hello World</span> na linguagem Java: {' '}
      </p>

      <Code codeString={helloWorldJava}  />

      <p className={styles.p_container}>
        Agora é a sua vez de escrever o <span className="fst-italic">Hello World</span> na linguagem Javascript:
      </p>

      <p className={styles.p_container}>
        Você já criou a pasta <span className="fst-italic">dev</span> e dentro da pasta <span className="fst-italic">dev</span> você já criou a pasta <span className="fst-italic">javascript</span>. Agora crie a pasta <span className="fst-italic">hello-world</span> dentro da pasta <span className="fst-italic">javascript</span>.
      </p>

      <p className={styles.p_container}>
        Repita aquele processo para abrir uma pasta no <span className="fst-italic">VS Code</span>. Clique com o botão direito do mouse na pasta <span className="fst-italic">hello-world</span>, clique em <span className="fst-italic">Mostrar mais opções</span> e clique em <span className="fst-italic">Abrir com Code</span>.
      </p>

      <p className={styles.p_container}>
        Com o <span className="fst-italic">VS Code</span> aberto,
        <Badge pill bg="light" text="dark" className="mx-2">1</Badge>
         clique no ícone de <span className="fst-italic">New File...</span>
        <Badge pill bg="light" text="dark" className="mx-2">2</Badge>
         e dê o nome de <span className="fst-italic">index.js</span>.
      </p>

      <Image
        width={400}
        src={vscodeCriarArquivo}
        fluid
        className={styles.img}
      />

      <p className={styles.p_container}>
        Digite o código abaixo:
      </p>

      <Code codeString={helloWorld}  />

      <p className={styles.p_container}>
        O ícone de uma bola branca ao lado do <span className="fst-italic">index.js</span> significa que o arquivo ou as modificações feitas no arquivo ainda não foram salvas.
      </p>

      <Image
        width={500}
        src={vscodeNaoGravado}
        fluid
        className={styles.img}
      />

      <p className={styles.p_container}>
        Para salvar o arquivo tecle <kbd>Ctrl</kbd> + <kbd>S</kbd>.
      </p>

      <p className={styles.p_container}>
        Note que o ícone agora é um <span className="fst-italic">X</span>, indicando que o arquivo está salvo.
      </p>

      <Image
        width={500}
        src={vscodeGravado}
        fluid
        className={styles.img}
      />

      <p className={styles.p_container}>
        Vamos executar o arquivo no terminal integrado do <span className="fst-italic">VS Code</span>, para isso clique nas reticências <span className="fst-italic">...</span>, em <span className="fst-italic">Terminal</span> e em <span className="fst-italic">New Terminal</span>.
      </p>

      <Image
        src={vscodeAbrirTerminal}
        fluid
        className={styles.img}
      />

      <p className={styles.p_container}>
        Vamos executar o arquivo no terminal integrado do <span className="fst-italic">VS Code</span>, para isso clique nas reticências <span className="fst-italic">...</span>, em <span className="fst-italic">Terminal</span> e em <span className="fst-italic">New Terminal</span>.
      </p>

      <Image
        src={vscodeTerminal}
        fluid
        className={styles.img}
      />
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default HelloWorld;
