import { Link } from 'react-router-dom';

import { Image } from 'react-bootstrap';

import styles from '../Topics.module.css';
import chrome from '../../../assets/img/baixar-chrome.png';
import vscode from '../../../assets/img/baixar-vscode.png';
import vscode1 from '../../../assets/img/baixar-vscode1.png';
import nodejs from '../../../assets/img/baixar-nodejs.png';
import nodejs1 from '../../../assets/img/baixar-nodejs1.png';
import vscodeConfig from '../../../assets/img/vscode-config.png';
import vscodeExtension from '../../../assets/img/vscode-extensao.png';
import vscodeCodeRunner from '../../../assets/img/vscode-code-runner.png';
import vscodeLiveServer from '../../../assets/img/vscode-live-server.png';
import CustomTopic from '../CustomTopic';

const AmbienteDeDesenvolvimento = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Ambiente de desenvolvimento <span className="fst-italic">(development environment)</span> é o conjunto de ferramentas, recursos e configurações que um programador utiliza para escrever e testar o código JavaScript de maneira eficaz.
      </p>

      <p className={styles.p_container}>
        Utilize os links abaixo para baixar e instalar os programas. Todos os programas têm versões gratuitas para Windows, Linux e macOS, nesse tutorial iremos usar o Sistema Operacional Windows por ser o mais utilizado pelos usuários.
      </p>

      <p className={styles.p_container}>
        Existem várias opções de ferramentas mas nesse tutorial iremos utilizar:
      </p>
      
      <p className={styles.p_container}>
        Navegador Web: {' '}

        <Link to="https://www.google.com/intl/pt-BR/chrome" target="_blank" rel="noopener noreferrer">
          <span className="fst-italic text-decoration-underline">Google Chrome</span>
          
          <Image
            src={chrome}
            fluid
            className={styles.img}
          />
        </Link>
      </p>

      <p className={styles.p_container}>
        Editor de Código: {' '}

        <Link to="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">
          <span className="fst-italic text-decoration-underline">Visual Studio Code</span>
          
          <Image
            src={vscode}
            fluid
            className={styles.img}
          />
        </Link>
      </p>

      <p className={styles.p_container}>
        Na instalação, nessa tela, marque todas as opções:
      </p>

      <Image
        src={vscode1}
        fluid
        className={styles.img}
      />

      <p className={styles.p_container}>
        Ambiente de Execução: {' '}

        <Link to="https://nodejs.org/pt-br/download" target="_blank" rel="noopener noreferrer">
          <span className="fst-italic text-decoration-underline">NodeJS</span>
          
          <Image
            src={nodejs}
            fluid
            className={styles.img}
          />
        </Link>
      </p>

      <p className={styles.p_container}>
        Dê preferência para baixar a versão LTS <span className="fst-italic">(long-term support / suporte a longo prazo)</span>.
        Na instalação, nessa tela, marque essa opção:
      </p>

      <Image
        src={nodejs1}
        fluid
        className={styles.img}
      />

      <p className={styles.p_container}>
        Agora crie uma pasta em <span className="fst-italic">C:</span> para salvar os seus códigos, pode ser com o nome <span className="fst-italic">dev</span> e dentro da pasta <span className="fst-italic">dev</span> crie a pasta <span className="fst-italic">javascript</span>.
      </p>

      <p className={styles.p_container}>
        Clique com o botão direito do mouse na pasta <span className="fst-italic">javascript</span> e clique em <span className="fst-italic">Abrir com Code</span>, no <span className="fst-italic">Windows 11</span> clique com o botão direito do mouse na pasta <span className="fst-italic">javascript</span>, clique em <span className="fst-italic">Mostrar mais opções</span> e clique em <span className="fst-italic">Abrir com Code</span>.
      </p>

      <p className={styles.p_container}>
        Marque a caixa de seleção e clique em <span className="fst-italic">Yes</span>.
      </p>

      <Image
        src={vscodeConfig}
        fluid
        className={styles.img}
      />

      <p className={styles.p_container}>
        Clique no ícone ao lado da borda azul para abrir as Extensões:
      </p>

      <Image
        src={vscodeExtension}
        fluid
        className={styles.img}
      />

      <p className={styles.p_container}>
        Digite <span className="fst-italic">code runner</span> na caixa de pesquisa e clique em <span className="fst-italic">Install</span> para instalar a extensão:
      </p>

      <Image
        src={vscodeCodeRunner}
        fluid
        className={styles.img}
      />

      <p className={styles.p_container}>
        Digite <span className="fst-italic">live server</span> na caixa de pesquisa e clique em <span className="fst-italic">Install</span> para instalar a extensão:
      </p>

      <Image
        src={vscodeLiveServer}
        fluid
        className={styles.img}
      />

      <p className={styles.p_container}>
        Nos próximos tópicos explicaremos as funcionalidades das extensões instaladas.
      </p>
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default AmbienteDeDesenvolvimento;
