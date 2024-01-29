import styles from './TdRef.module.css';

const TdRef = props => {
  return (
    <td
      className={styles.td_title}
      onClick={() => props.tdScroll(props.tdRef)}
    >
      <span className={styles.code}>{props.tdText}</span>
    </td>
  );
};

export default TdRef;
