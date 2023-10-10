import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';

const TiposDeDados = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Valores Primitivos:<br />
        &nbsp;&nbsp;String<br />
        &nbsp;&nbsp;Number<br />
        &nbsp;&nbsp;Boolean<br />
        &nbsp;&nbsp;BigInt<br />
        &nbsp;&nbsp;Symbol<br />
        &nbsp;&nbsp;Null<br />
        &nbsp;&nbsp;Undefined<br />
        <br />       
        Valores de Referência:<br />
        &nbsp;&nbsp;Array<br />
        &nbsp;&nbsp;Function<br />
        &nbsp;&nbsp;Object<br />
      </p>
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default TiposDeDados;
