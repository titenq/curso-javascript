import { Container } from 'react-bootstrap';

import styles from '../Topics.module.css';
import Pagination from '../../../components/Pagination';
import topics from '../../../helpers/topics';
import useTopicPagination from '../../../hooks/useTopicPagination';

const CustomTopic = props => {
  const { topicPrevious, topicNext, topicTitle } = useTopicPagination(topics);

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>{topicTitle}</h1>

      {props.content}
      
      <Pagination
        topicPrevious={topicPrevious}
        topicNext={topicNext}
      />
    </Container>
  );
};

export default CustomTopic;
