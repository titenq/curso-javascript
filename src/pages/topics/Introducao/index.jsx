import { Container } from 'react-bootstrap';

import styles from '../Topics.module.css';
import Pagination from '../../../components/Pagination';
import topics from '../../../helpers/topics';
import useTopicPagination from '../../../hooks/useTopicPagination';

const Introducao = () => {
  const { topicPrevious, topicNext } = useTopicPagination(topics);

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>Introdução</h1>

      <p className={styles.p_container}>
        Nesse pequeno tutorial eu vou tentar passar alguns conhecimentos básicos sobre a linguagem de programação Javascript.
        <br />
        <br />
        Navegue nos tópicos do menu ao lado, a ordem dos tópicos não é essencial mas é recomendada.
        <br />
        <br />
        Digite e execute os códigos deste tutorial no seu editor de código, só lendo você não vai aprender, é necessário escrever o código e na medida do possível ir modificando e testando.
        <br />
        <br />
        Normalmente os nomes das variáveis, classes, funções, métodos, parâmetros e outros são escritos em inglês mas nesse tutorial eu vou escrever esses nomes em português para facilitar o aprendizado.
        <br />
        <br />
        Bons estudos!
        <br />
        <br />
      </p>

      <Pagination
        topicPrevious={topicPrevious}
        topicNext={topicNext}
      />
    </Container>
  );
};

export default Introducao;
