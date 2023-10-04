import { Container } from 'react-bootstrap';

import styles from '../Topics.module.css';
import Code from '../../../components/Code';
import topics from '../../../helpers/topics';
import useTopicPagination from '../../../hooks/useTopicPagination';
import Pagination from '../../../components/Pagination';
import helloWorld from '../../../helpers/code/helloWorld';
import helloWorldC from '../../../helpers/code/helloWorldC';
import helloWorldJava from '../../../helpers/code/helloWorldJava';

const HelloWorld = () => {
  const { topicPrevious, topicNext } = useTopicPagination(topics);

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>Hello World</h1>

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

      <Code codeString={helloWorld}  />

      <Pagination
        topicPrevious={topicPrevious}
        topicNext={topicNext}
      />
    </Container>
  );
};

export default HelloWorld;
