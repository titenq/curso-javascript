import { Container } from 'react-bootstrap';

import styles from '../Topics.module.css';
import useTopicPagination from '../../../hooks/useTopicPagination';
import topics from '../../../helpers/topics';
import Pagination from '../../../components/Pagination';

const AmbienteDeDesenvolvimento = () => {
  const { topicPrevious, topicNext } = useTopicPagination(topics);

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>Ambiente de Desenvolvimento</h1>

      <Pagination
        topicPrevious={topicPrevious}
        topicNext={topicNext}
      />
    </Container>
  );
};

export default AmbienteDeDesenvolvimento;
