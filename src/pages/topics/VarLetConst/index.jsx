import { Table } from 'react-bootstrap';

import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import varLetConst from '../../../helpers/code/varLetConst';
import Alerta from '../../../components/Alerta';

const VarLetConst = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Como dito no tópico Variáveis, para declararmos uma variável usamos uma das palavras-chave var, let ou const, vamos ver agora qual dessas palavras-chave usar.
      </p>

      <Table style={{ maxWidth: "700px" }} striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>var</th>
            <th>let</th>
            <th>const</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pode ser reatribuída</td>
            <td>Pode ser reatribuída</td>
            <td>Não pode ser reatribuída</td>
          </tr>
          <tr>
            <td>Sofre hoisting e é inicializado com undefined</td>
            <td>Sofre hoisting mas não é inicializado</td>
            <td>Sofre hoisting mas não é inicializado</td>
          </tr>
          <tr>
            <td>Escopo de função</td>
            <td>Escopo de bloco</td>
            <td>Escopo de bloco</td>
          </tr>
        </tbody>
      </Table>

      <p className={styles.p_container}>
        Reatribuição refere-se ao ato de atribuir um novo valor a uma variável que já possui um valor, é a capacidade de mudar o valor de uma variável após a sua declaração inicial.
      </p>

      <Code codeString={varLetConst['01']} />

      <p className={styles.p_container}>
        Hoisting (içamento) é um comportamento do Javascript que move todas as declarações de variáveis para o topo do escopo em que elas são declaradas e conforme a tabela acima só o var é inicializado com undefined. 
      </p>

      <Code codeString={varLetConst['02']} />

      <p className={styles.p_container}>
        O escopo de variável no JavaScript se refere à região ou contexto onde uma variável é definida e pode ser acessada. Isso significa que uma variável pode estar disponível apenas em determinadas partes do código, geralmente delimitadas por blocos de código, funções ou no escopo global do programa.
      </p>

      <Code codeString={varLetConst['03']} />

      <Code codeString={varLetConst['04']} />

      <Alerta
        message="Na prática NUNCA use o var. Se o valor da variável for um valor de referência, como array, função ou objeto, SEMPRE use const. Se o valor da variável for um valor primitivo, como number, string, boolean e etc, e esse valor possa mudar, use let."
      />
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default VarLetConst;
