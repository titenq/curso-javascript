import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';

const Switch = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Switch Case
      </p>
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default Switch;
