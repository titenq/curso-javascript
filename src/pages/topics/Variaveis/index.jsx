import { Table } from 'react-bootstrap';

import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import variaveis from '../../../helpers/code/variaveis';
import keywords from '../../../helpers/keywords';

const PalavrasChaveTable = () => {
  const chunks = [];
  const chunkSize = 6;

  for (let i = 0; i < keywords.length; i += chunkSize) {
    chunks.push(keywords.slice(i, i + chunkSize));
  }

  return (
    <div style={
      {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflowX: "auto"
      }
    }>
      <Table style={{ maxWidth: "600px" }} striped bordered hover size="sm" variant="dark">
        <tbody>
          {chunks.map((chunk, rowIndex) => (
            <tr key={rowIndex}>
              {chunk.map((keyword, colIndex) => (
                <td key={colIndex}><span className="fst-italic">{keyword}</span></td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const Variaveis = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Uma variável é como se fosse uma caixa onde você pode guardar informações, como número, texto, contato, data e etc, você pode nomear essa caixa e quando precisar dessa informação, pode recuperar pelo nome da variável. Só que em vez de usar uma caixa, você usa a memória do computador.
      </p>

      <p className={styles.p_container}>
        Para declararmos uma variável usamos uma das palavras-chave: <span className="fst-italic">var, let ou const</span>,<br />
        seguido de um identificador, que é um nome para a variável, nesse caso, <span className="fst-italic">saudacao</span>,<br />
        seguido do operador de atribuição, o caractere <span className="fst-italic">= (igual)</span>,<br />
        seguido do seu valor, nesse caso, <span className="fst-italic">Olá Mundo</span>,<br />
        seguido do caracter <span className="fst-italic">; (ponto e vírgula)</span>, que indica o final da instrução.
      </p>

      <Code codeString={variaveis['01']} />

      <p className={styles.p_container}>
        No exemplo acima estamos declarando uma variável e atribuindo um valor a ela na mesma linha. Também podemos declarar uma variável <span className="fst-italic">(linha 1)</span> e depois atribuir um valor a essa variável <span className="fst-italic">(linha 3)</span>, e até mesmo reatribuir outro valor a essa variável <span className="fst-italic">(linha 7)</span>.
      </p>

      <Code codeString={variaveis['02']} />

      <p className={styles.p_container}>
        Se você tentar trocar o <span className="fst-italic">let</span> pela palavra-chave <span className="fst-italic">const</span> no código acima, vai gerar o seguinte erro: <span className="fst-italic">&apos;const&apos; declarations must be initialized</span>, (as declarações &apos;const&apos; devem ser inicializadas).
      </p>

      <p className={styles.p_container}>
        Aqui você viu a primeira diferença entre <span className="fst-italic">var, let e const</span>, nos próximos tópicos vamos nos aprofundar nessas diferenças.
      </p>

      <p className={styles.p_container}>
        Em resumo, a declaração cria a variável e reserva um nome para ela, enquanto a atribuição coloca um valor dentro dessa variável.
      </p>

      <p className={styles.p_container}>
        Sobre o identificador, ele não pode começar com número, não pode começar por caracteres especiais, exceto o <span className="fst-italic">underscore (_)</span> e o <span className="fst-italic">cifrão ($)</span> e não pode conter espaço.
      </p>

      <Code codeString={variaveis['03']} />

      <p className={styles.p_container}>
        O <span className="fst-italic">Javascript</span> é <span className="fst-italic">case-sensitive</span>, ou seja, diferencia maiúsculas de minúsculas.
      </p>

      <Code codeString={variaveis['04']} />

      <p className={styles.p_container}>
        Por convenção, no <span className="fst-italic">Javascript</span> usamos para identificadores de variáveis a notação <span className="fst-italic">camelCase</span>.
      </p>

      <p className={styles.p_container}>
        A notação <span className="fst-italic">camelCase</span> utiliza todas as letras da primeira palavra em minúsculas e se tiver mais de uma palavra, a primeira letras dessas são em maiúscula, sem espaços entre as palavras.
      </p>

      <p className={styles.p_container}>
        Número vinte na notação decimal: 20<br />
        Número vinte na notação romana: XX<br />
        Número vinte na notação hexadecimal: 14<br />
        Número vinte na notação octal: 24<br />
        Número vinte na notação binária: 10100<br />
      </p>

      <Code codeString={variaveis['05']} />

      <p className={styles.p_container}>
        Note também que eu escrevi Joao sem acento. O Javascript até aceita acentos nos seus identificadores mas por convenção nunca use acentos.
      </p>

      <p className={styles.p_container}>
        Outros tipos de notação no Javascript, para identificadores de variáveis utilize sempre o <span className="fst-italic">camelCase</span>:
      </p>

      <Code codeString={variaveis['06']} />

      <p className={styles.p_container}>
        Utilize identificadores que realmente identifiquem a variável pelo nome, evite identificadores como:<br />
        <span className="fst-italic">x</span>, <span className="fst-italic">y</span>, <span className="fst-italic">cod</span>.
      </p>

      <p className={styles.p_container}>
        Não use uma palavra-chave <span className="fst-italic">(keyword)</span> como identificador, a seguir uma lista de palavras-chave:
      </p>

      <PalavrasChaveTable />

      <p className={styles.p_container}>
        Sobre o operador de atribuição <span className="fst-italic">=</span> só é bom lembrar que o Javascript também têm os operadores <span className="fst-italic">==</span> e <span className="fst-italic">===</span>, que são diferentes entre si.
      </p>

      <p className={styles.p_container}>
        O valor que podemos atribuir a uma variável é qualquer um dos tipos de dados do Javascript, o que veremos nos próximos tópicos.
      </p>

      <p className={styles.p_container}>
        Sinalizar o final da instrução com <span className="fst-italic">; (ponto e vírgula)</span> ainda gera uma grande discussão na comunidade Javascript, se você não usar o <span className="fst-italic">; (ponto e vírgula)</span>, em 99,99% dos códigos ele irá funcionar normalmente, tem programador que prefere usar e tem programador que prefere não usar, mas na verdade, segundo o ECMAScript, o uso do <span className="fst-italic">; (ponto e vírgula)</span> é obrigatório, o que acontece é que os programas que interpretam o Javascript inserem o <span className="fst-italic">; (ponto e vírgula)</span> automaticamente.
      </p>

      <p className={styles.p_container}>
        Para evitar um erro nos 0,01% dos casos, nesse tutorial, vamos sempre incluir o <span className="fst-italic">; (ponto e vírgula)</span>.
      </p>
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default Variaveis;
