import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import { BsBoxArrowLeft, BsBoxArrowRight } from 'react-icons/bs';

import styles from './Pagination.module.css';
import slug from '../../helpers/slug';

const Pagination = props => {
  const navigate = useNavigate();

  const goPrevious = () => {
    navigate(`/${slug(props.topicPrevious)}`);
  };

  const goNext = () => {
    navigate(`/${slug(props.topicNext)}`);
  };

  return (
    <div className={styles.container}>
      <Button 
        className={styles.button_page} 
        disabled={props.topicPrevious ? false : true}
        onClick={goPrevious}
      >
        {props.topicPrevious && (
          <>
            <BsBoxArrowLeft size={20} className='m-2' /> <p className={styles.topic}>{props.topicPrevious}</p>
          </>
        )}
      </Button>

      <Button 
        className={styles.button_page} 
        disabled={props.topicNext ? false : true}
        onClick={goNext}
      >
        {props.topicNext && (
          <>
            <p className={styles.topic}>{props.topicNext}</p> <BsBoxArrowRight size={20} className='m-2' />
          </>
        )}
      </Button>
    </div>
  );
};

export default Pagination;