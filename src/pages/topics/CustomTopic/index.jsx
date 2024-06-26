import { useRef } from 'react';

import { Container } from 'react-bootstrap';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Helmet } from 'react-helmet';

import styles from '../Topics.module.css';
import Pagination from '../../../components/Pagination';
import topics from '../../../helpers/topics';
import useTopicPagination from '../../../hooks/useTopicPagination';

const CustomTopic = props => {
  const { topicPrevious, topicNext, topicTitle } = useTopicPagination(topics);
  const topRef = useRef(null);
  
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container className={styles.container} ref={topRef} style={{ height: props.height, overflow: 'auto' }} >
      <Helmet>
        <title>{topicTitle}</title>
      </Helmet>

      <h1 className={styles.title}>{topicTitle}</h1>

      {props.content}

      <Pagination
        topicPrevious={topicPrevious}
        topicNext={topicNext}
      />

      <BsFillArrowUpCircleFill size={32} className={styles.visible} onClick={scrollToTop} />
    </Container>
  );
};

export default CustomTopic;
