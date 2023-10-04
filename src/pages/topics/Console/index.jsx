import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';

const Console = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        
      </p>
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default Console;
