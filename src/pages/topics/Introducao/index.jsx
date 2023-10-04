import { Link } from 'react-router-dom';

import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';

const Introducao = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Nesse pequeno tutorial eu vou tentar passar alguns conhecimentos básicos sobre a linguagem de programação Javascript.
      </p>

      <p className={styles.p_container}>
        Navegue nos tópicos do menu ao lado, a ordem dos tópicos não é essencial mas é recomendada.
      </p>

      <p className={styles.p_container}>
        Digite e execute os códigos deste tutorial no seu editor de código, só lendo você não vai aprender, é necessário escrever o código e na medida do possível ir modificando e testando.
      </p>

      <p className={styles.p_container}>
        Normalmente os nomes das variáveis, classes, funções, métodos, parâmetros e outros são escritos em inglês mas nesse tutorial eu vou escrever esses nomes em português para facilitar o aprendizado.
      </p>

      <p className={styles.p_container}>
        Não é necessário nenhum pré-requisito mas é recomendado o básico de <Link to="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
          <span className="fst-italic text-decoration-underline">HTML</span>
        </Link> e <Link to="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
          <span className="fst-italic text-decoration-underline">CSS</span>
        </Link>.
      </p>

      <p className={styles.p_container}>
        Bons estudos!
      </p>
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default Introducao;
