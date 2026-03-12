import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import funcoesDeCallback from '../../../helpers/code/funcoesDeCallback';
import Alerta from '../../../components/Alerta';

const FuncoesDeCallback = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Callback é uma função passada como argumento para outra função. Ela será executada depois, em algum ponto definido pela função que a recebeu.
      </p>

      <p className={styles.p_container}>
        Esse padrão é muito usado no Javascript para reaproveitar comportamentos e para lidar com eventos, timers e operações assíncronas.
      </p>

      <Code codeString={funcoesDeCallback['01']} />

      <p className={styles.p_container}>
        Também podemos passar uma função diretamente como argumento, sem declará-la antes em uma variável separada.
      </p>

      <Code codeString={funcoesDeCallback['02']} />

      <p className={styles.p_container}>
        Métodos como <span className={styles.code}>forEach()</span>, <span className={styles.code}>map()</span> e <span className={styles.code}>filter()</span> usam callbacks o tempo todo.
      </p>

      <Code codeString={funcoesDeCallback['03']} />

      <Alerta
        message="Entender callback é importante porque esse conceito aparece em várias partes do Javascript, inclusive antes de chegar em promises e async await."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default FuncoesDeCallback;
