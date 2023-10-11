import { Table } from 'react-bootstrap';

import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';

const TiposDeDados = () => {
  const content = (
    <>
      <Table style={{ maxWidth: "600px" }} striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>Valores Primitivos:</th>
            <th>Valores de Referência:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>string</td>
            <td>array</td>
          </tr>
          <tr>
            <td>number</td>
            <td>function</td>
          </tr>
          <tr>
            <td>boolean</td>
            <td>object</td>
          </tr>
          <tr>
            <td>bigint</td>
            <td></td>
          </tr>
          <tr>
            <td>symbol</td>
            <td></td>
          </tr>
          <tr>
            <td>null</td>
            <td></td>
          </tr>
          <tr>
            <td>undefined</td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      <h2 className={styles.subtitle}>string</h2>
      <p className={styles.p_container}>
        String é uma sequência de caracteres, como letras, números, símbolos e espaços, que é usada para representar texto, esses caracteres devem estar entre aspas simples ( &apos; ) ou aspas duplas( &quot; ). Uma string pode ter somente um caractere ou até nenhum caractere, chamada de string vazia.
      </p>
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default TiposDeDados;
