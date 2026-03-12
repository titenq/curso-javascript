import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import asyncAwait from '../../../helpers/code/asyncAwait';
import Alerta from '../../../components/Alerta';

const AsyncAwait = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        <span className={styles.code}>async await</span> é uma forma mais legível de trabalhar com código assíncrono. Ele é construído em cima de promises, mas deixa o fluxo com aparência mais próxima de código síncrono.
      </p>

      <p className={styles.p_container}>
        A palavra-chave <span className={styles.code}>async</span> indica que uma função sempre retorna uma promise, mesmo quando você retorna um valor simples.
      </p>

      <Code codeString={asyncAwait['01']} />

      <p className={styles.p_container}>
        Como toda função <span className={styles.code}>async</span> retorna uma promise, esse valor pode ser consumido com <span className={styles.code}>then()</span>.
      </p>

      <Code codeString={asyncAwait['02']} />

      <p className={styles.p_container}>
        A palavra-chave <span className={styles.code}>await</span> pausa a execução daquela função até a promise ser resolvida. Isso não trava o Javascript inteiro, apenas pausa o fluxo dentro da função <span className={styles.code}>async</span>.
      </p>

      <p className={styles.p_container}>
        Quando existe a possibilidade de erro, o ideal é usar <span className={styles.code}>try</span> e <span className={styles.code}>catch</span>.
      </p>

      <Code codeString={asyncAwait['03']} />

      <p className={styles.p_container}>
        Um uso muito comum do <span className={styles.code}>await</span> é executar etapas em sequência, esperando a conclusão de cada uma antes de continuar.
      </p>

      <Code codeString={asyncAwait['04']} />

      <p className={styles.p_container}>
        Mas nem sempre o melhor é executar tudo em sequência. Quando as operações são independentes, normalmente vale mais a pena executar em paralelo com <span className={styles.code}>Promise.all()</span>.
      </p>

      <Code codeString={asyncAwait['05']} />

      <Alerta
        message="async await melhora muito a leitura, mas ele não substitui o entendimento de promises. Na prática, você precisa conhecer bem os dois."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default AsyncAwait;
