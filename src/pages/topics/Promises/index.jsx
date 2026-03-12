import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import promises from '../../../helpers/code/promises';
import Alerta from '../../../components/Alerta';

const Promises = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Promise é um objeto usado para representar o resultado futuro de uma operação assíncrona. Em vez de receber imediatamente o valor final, você recebe uma promessa de que esse valor chegará depois.
      </p>

      <p className={styles.p_container}>
        Uma promise possui três estados:
        <br />
        <span className={styles.code}>pending</span>: ainda está em andamento.
        <br />
        <span className={styles.code}>fulfilled</span>: foi resolvida com sucesso.
        <br />
        <span className={styles.code}>rejected</span>: falhou e retornou um erro.
      </p>

      <Code codeString={promises['01']} />

      <p className={styles.p_container}>
        Enquanto a promise ainda não foi concluída, seu estado é <span className={styles.code}>pending</span>.
      </p>

      <Code codeString={promises['02']} />

      <p className={styles.p_container}>
        Quando uma promise é resolvida, usamos <span className={styles.code}>then()</span> para tratar o valor retornado.
      </p>

      <Code codeString={promises['03']} />

      <p className={styles.p_container}>
        Quando ocorre falha, usamos <span className={styles.code}>catch()</span> para tratar o erro. Isso evita falhas silenciosas e deixa o fluxo mais previsível.
      </p>

      <Code codeString={promises['04']} />

      <p className={styles.p_container}>
        Promises também podem ser encadeadas. Isso permite transformar valores e organizar etapas assíncronas em sequência.
      </p>

      <Code codeString={promises['05']} />

      <p className={styles.p_container}>
        Em alguns casos, você precisa esperar várias promises ao mesmo tempo. Para isso existe o <span className={styles.code}>Promise.all()</span>.
      </p>

      <Code codeString={promises['06']} />

      <Alerta
        message="Promises são usadas em APIs, timers, leitura de arquivos, banco de dados e várias bibliotecas modernas. Entender bem os estados pending, fulfilled e rejected é essencial."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default Promises;
