import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import localStorageCode from '../../../helpers/code/localStorage';
import Alerta from '../../../components/Alerta';

const LocalStorage = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        O <span className={styles.code}>localStorage</span> permite salvar dados no navegador em formato de texto. Esses dados continuam disponíveis mesmo depois que a página é recarregada.
      </p>

      <p className={styles.p_container}>
        Para salvar um valor usamos <span className={styles.code}>setItem()</span>, e para recuperar usamos <span className={styles.code}>getItem()</span>.
      </p>

      <Code codeString={localStorageCode['01']} />

      <p className={styles.p_container}>
        Como o <span className={styles.code}>localStorage</span> salva apenas texto, objetos precisam ser convertidos para JSON antes de serem armazenados.
      </p>

      <Code codeString={localStorageCode['02']} />

      <Code codeString={localStorageCode['03']} />

      <Alerta
        message="localStorage é útil para preferências e pequenos dados da aplicação, mas não deve ser usado para guardar informações sensíveis."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default LocalStorage;
