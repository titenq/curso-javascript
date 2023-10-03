import { Container } from 'react-bootstrap';

import styles from '../Topics.module.css';
import Code from '../../../components/Code';
import helloWorld from '../../../helpers/code/helloWorld';
import topics from '../../../helpers/topics';
import useTopicPagination from '../../../hooks/useTopicPagination';
import Pagination from '../../../components/Pagination';

const HelloWorld = () => {
  const { topicPrevious, topicNext } = useTopicPagination(topics);

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>Hello World</h1>

      <Code codeString={helloWorld}  />

      <Pagination
        topicPrevious={topicPrevious}
        topicNext={topicNext}
      />
    </Container>
  );
};

export default HelloWorld;
