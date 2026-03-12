import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import verbosHttpEHttpStatus from '../../../helpers/code/verbosHttpEHttpStatus';
import Alerta from '../../../components/Alerta';

const VerbosHttpEHttpStatus = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Quando uma aplicação conversa com uma API, normalmente ela faz requisições HTTP. Nessas requisições existem dois conceitos fundamentais: os verbos HTTP e os códigos de status HTTP.
      </p>

      <p className={styles.p_container}>
        Os verbos HTTP indicam a intenção da requisição. Os mais usados são:
        <br />
        <span className={styles.code}>GET</span>: buscar dados.
        <br />
        <span className={styles.code}>POST</span>: criar um novo recurso.
        <br />
        <span className={styles.code}>PUT</span>: substituir um recurso inteiro.
        <br />
        <span className={styles.code}>PATCH</span>: atualizar parcialmente um recurso.
        <br />
        <span className={styles.code}>DELETE</span>: remover um recurso.
      </p>

      <p className={styles.p_container}>
        O verbo <span className={styles.code}>GET</span> é usado quando queremos consultar informações.
      </p>

      <Code codeString={verbosHttpEHttpStatus['01']} />

      <p className={styles.p_container}>
        O verbo <span className={styles.code}>POST</span> é usado para criar dados novos no servidor.
      </p>

      <Code codeString={verbosHttpEHttpStatus['02']} />

      <p className={styles.p_container}>
        O verbo <span className={styles.code}>PUT</span> normalmente representa a substituição completa de um recurso.
      </p>

      <Code codeString={verbosHttpEHttpStatus['03']} />

      <p className={styles.p_container}>
        O verbo <span className={styles.code}>PATCH</span> costuma ser usado quando queremos atualizar apenas parte dos dados.
      </p>

      <Code codeString={verbosHttpEHttpStatus['04']} />

      <p className={styles.p_container}>
        O verbo <span className={styles.code}>DELETE</span> é usado para remover um recurso.
      </p>

      <Code codeString={verbosHttpEHttpStatus['05']} />

      <p className={styles.p_container}>
        Já os códigos de status HTTP mostram o resultado da requisição. Alguns dos mais importantes são:
        <br />
        <span className={styles.code}>200 OK</span>: requisição concluída com sucesso.
        <br />
        <span className={styles.code}>201 Created</span>: recurso criado com sucesso.
        <br />
        <span className={styles.code}>204 No Content</span>: sucesso sem conteúdo no corpo da resposta.
        <br />
        <span className={styles.code}>400 Bad Request</span>: requisição inválida.
        <br />
        <span className={styles.code}>401 Unauthorized</span>: autenticação necessária.
        <br />
        <span className={styles.code}>403 Forbidden</span>: acesso proibido.
        <br />
        <span className={styles.code}>404 Not Found</span>: recurso não encontrado.
        <br />
        <span className={styles.code}>500 Internal Server Error</span>: erro interno no servidor.
      </p>

      <Code codeString={verbosHttpEHttpStatus['06']} />

      <Alerta
        message="Entender verbos HTTP e status HTTP é essencial para trabalhar com APIs. Isso ajuda a saber não apenas como enviar uma requisição, mas também como interpretar a resposta do servidor."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default VerbosHttpEHttpStatus;
