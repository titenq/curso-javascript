import { OverlayTrigger, Table, Tooltip } from 'react-bootstrap';

import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import operadores from '../../../helpers/code/operadores';

const Operadores = () => {
  const tooltip = content => (
    <Tooltip id={`tooltip${content}`} style={{ position: 'fixed' }}>
      {content}
    </Tooltip>
  );

  const scrollTo = id => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const content = (
    <>
      <p className={styles.p_container}>
        Operadores são símbolos especiais ou palavras-chave que são usados para realizar operações em valores, como cálculos matemáticos, comparações e atribuições. 
      </p>

      <Table style={{ maxWidth: "700px" }} striped bordered hover size="sm" variant="dark">
        <tbody>
          <tr>
            <td className={styles.td_title} onClick={() => scrollTo("opAritmeticos")}>
              Operadores Aritméticos
            </td>
            <OverlayTrigger placement="top" overlay={tooltip('+ (adição)')}>
              <td className={styles.td_operadores}>+</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('- (subtração)')}>
              <td className={styles.td_operadores}>-</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('* (multiplicação)')}>
              <td className={styles.td_operadores}>*</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('/ (divisão)')}>
              <td className={styles.td_operadores}>/</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('% (módulo, resto da divisão)')}>
              <td className={styles.td_operadores}>%</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('** (exponenciação)')}>
            <td className={styles.td_operadores}>**</td>
            </OverlayTrigger>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
          </tr>
          <tr>
            <td className={styles.td_title} onClick={() => scrollTo("opAtribuicao")}>
              Operadores de Atribuição
            </td>
            <OverlayTrigger placement="top" overlay={tooltip('= (atribuição)')}>
              <td className={styles.td_operadores}>=</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('+= (atribuição de adição)')}>
              <td className={styles.td_operadores}>+=</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('-= (atribuição de subtração)')}>
              <td className={styles.td_operadores}>-=</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('*= (atribuição de multiplicação)')}>
              <td className={styles.td_operadores}>*=</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('/= (atribuição de divisão)')}>
              <td className={styles.td_operadores}>/=</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('%= (atribuição de módulo)')}>
              <td className={styles.td_operadores}>%=</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('**= (atribuição de exponenciação)')}>
              <td className={styles.td_operadores}>**=</td>
            </OverlayTrigger>
            <td className={styles.td_operadores}></td>
          </tr>
          <tr>
            <td className={styles.td_title} onClick={() => scrollTo("opComparacao")}>
              Operadores de Comparação
            </td>
            <OverlayTrigger placement="top" overlay={tooltip('== (igualdade)')}>
              <td className={styles.td_operadores}>==</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('=== (igualdade estrita)')}>
              <td className={styles.td_operadores}>===</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('!= (diferença)')}>
              <td className={styles.td_operadores}>!=</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('!== (diferença estrita)')}>
              <td className={styles.td_operadores}>!==</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('> (maior que)')}>
              <td className={styles.td_operadores}>{'>'}</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('< (menor que)')}>
              <td className={styles.td_operadores}>{'<'}</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('>= (maior ou igual a)')}>
              <td className={styles.td_operadores}>{'>='}</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('<= (menor ou igual a)')}>
              <td className={styles.td_operadores}>{'<='}</td>
            </OverlayTrigger>
          </tr>
          <tr>
            <td className={styles.td_title} onClick={() => scrollTo("opLogicos")}>
              Operadores Lógicos
            </td>
            <OverlayTrigger placement="top" overlay={tooltip('&& (e lógico)')}>
              <td className={styles.td_operadores}>&&</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('|| (ou lógico)')}>
              <td className={styles.td_operadores}>||</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('! (não lógico)')}>
              <td className={styles.td_operadores}>!</td>
            </OverlayTrigger>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
          </tr>
          <tr>
            <td className={styles.td_title} onClick={() => scrollTo("opIncrementoDecremento")}>
              Operadores de Incremento e Decremento
            </td>
            <OverlayTrigger placement="top" overlay={tooltip('++ (incremento)')}>
              <td className={styles.td_operadores}>++</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('-- (decremento)')}>
              <td className={styles.td_operadores}>--</td>
            </OverlayTrigger>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
          </tr>
          <tr>
            <td className={styles.td_title} onClick={() => scrollTo("opConcatenacao")}>
              Operador de Concatenação
            </td>
            <OverlayTrigger placement="top" overlay={tooltip('+ (concatenação de strings)')}>
              <td className={styles.td_operadores}>+</td>
            </OverlayTrigger>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
          </tr>
          <tr>
            <td className={styles.td_title} onClick={() => scrollTo("opBitwise")}>
              Operadores Bitwise
            </td>
            <OverlayTrigger placement="top" overlay={tooltip('& (E bitwise)')}>
              <td className={styles.td_operadores}>&</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('| (Ou bitwise)')}>
              <td className={styles.td_operadores}>|</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('^ (Ou exclusivo bitwise)')}>
              <td className={styles.td_operadores}>^</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('~ (Negação bitwise)')}>
              <td className={styles.td_operadores}>~</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('<< (Shift à esquerda)')}>
              <td className={styles.td_operadores}>{'<<'}</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('>> (Shift à direita)')}>
              <td className={styles.td_operadores}>{'>>'}</td>
            </OverlayTrigger>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
          </tr>
          <tr>
            <td className={styles.td_title} onClick={() => scrollTo("opTernario")}>
              Operador Ternário
            </td>
            <OverlayTrigger placement="top" overlay={tooltip('? \u00A0 : \u00A0 (ternário)')}>
              <td className={styles.td_operadores}>?{' '}:</td>
            </OverlayTrigger>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
          </tr>
          <tr>
            <td className={styles.td_title} onClick={() => scrollTo("opAcessoProps")}>
              Operadores de Acesso a Propriedades
            </td>
            <OverlayTrigger placement="top" overlay={tooltip('. \u00A0(ponto)')}>
              <td className={styles.td_operadores}>.</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('[\u00A0\u00A0] (colchetes)')}>
              <td className={styles.td_operadores}>[{' '}]</td>
            </OverlayTrigger>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
          </tr>
          <tr>
            <td className={styles.td_title} onClick={() => scrollTo("opVirgula")}>
              Operador de Vírgula
            </td>
            <OverlayTrigger placement="top" overlay={tooltip(', (retorna a última expressão)')}>
              <td className={styles.td_operadores}>,</td>
            </OverlayTrigger>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
          </tr>
          <tr>
            <td className={styles.td_title} onClick={() => scrollTo("opPalavraChave")}>
              Operadores com Palavra-Chave
            </td>
            <OverlayTrigger placement="top" overlay={tooltip('in (verifica se uma propriedade está em um objeto)')}>
              <td className={styles.td_operadores}>in</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('instanceof (verifica se um objeto é uma instância de uma classe ou construtor)')}>
              <td className={styles.td_operadores}>instanceof</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('typeof (retorna o tipo de um valor)')}>
              <td className={styles.td_operadores}>typeof</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('delete (remove propriedade de objeto ou elemento de array)')}>
              <td className={styles.td_operadores}>delete</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('new (cria uma instância de um objeto)')}>
              <td className={styles.td_operadores}>new</td>
            </OverlayTrigger>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
          </tr>
          <tr>
            <td className={styles.td_title} onClick={() => scrollTo("opOutros")}>
              Outros Operadores
            </td>
            <OverlayTrigger placement="top" overlay={tooltip('?.(optional chaining)')}>
              <td className={styles.td_operadores}>?.</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('?? (nullish coalescing)')}>
              <td className={styles.td_operadores}>??</td>
            </OverlayTrigger>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
          </tr>
        </tbody>
      </Table>

      <h3 className={styles.subtitle} id='opAritmeticos'>Operadores Aritméticos</h3>
      <p className={styles.p_container}>
        Operadores aritméticos são utilizados para realizar operações matemáticas em JavaScript, eles permitem que você realize cálculos com números e obtenha resultados numéricos. 
      </p>

      <p className={styles.p_container}>
        Além dos operadores de adição (+), subtração (-), multiplicação (*) e divisão (/), que são bem conhecidos, ainda temos o operador de módulo (%) que retorna o resto da divisão e o operador de exponenciação (**) que retorna a base elevado ao expoente.
      </p>

      <Code codeString={operadores['01']} />

      <p className={styles.p_container}>
        Os operadores aritméticos têm uma ordem de precedência, o que determina a ordem em que eles são avaliados quando uma expressão contém múltiplos operadores, para definirmos uma ordem específica de precedência, a expressão deve estar entre parênteses.
      </p>

      <Table style={{ maxWidth: "700px" }} striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th colSpan={2} style={{ textAlign: 'center' }}>
              Ordem de Precedência
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center' }}>1</td>
            <td>exponenciação (**)</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>2</td>
            <td>multiplicação (*), divisão (/), módulo (%)</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>3</td>
            <td>adição (+), subtração (-)</td>
          </tr>
        </tbody>
      </Table>

      <Code codeString={operadores['02']} />

      <h3 className={styles.subtitle} id='opAtribuicao'>Operadores de Atribuição</h3>
      <p className={styles.p_container}>
        Operadores de Atribuição são usados para atribuir valores a variáveis.
      </p>

      <h3 className={styles.subtitle} id='opComparacao'>Operadores de Comparação</h3>
      <p className={styles.p_container}>
        Operadores de Comparação
      </p>

      <h3 className={styles.subtitle} id='opLogicos'>Operadores Lógicos</h3>
      <p className={styles.p_container}>
        Operadores Lógicos
      </p>

      <h3 className={styles.subtitle} id='opIncrementoDecremento'>Operadores de Incremento e Decremento</h3>
      <p className={styles.p_container}>
        Operadores de Incremento e Decremento
      </p>

      <h3 className={styles.subtitle} id='opConcatenacao'>Operador de Concatenação</h3>
      <p className={styles.p_container}>
        Operador de Concatenação
      </p>

      <h3 className={styles.subtitle} id='opBitwise'>Operadores de Bitwise</h3>
      <p className={styles.p_container}>
        Operadores de Bitwise
      </p>

      <h3 className={styles.subtitle} id='opTernario'>Operador Ternário</h3>
      <p className={styles.p_container}>
        Operador Ternário
      </p>

      <h3 className={styles.subtitle} id='opAcessoProps'>Operadores de Acesso a Propriedades</h3>
      <p className={styles.p_container}>
        Operadores de Acesso a Propriedades
      </p>

      <h3 className={styles.subtitle} id='opVirgula'>Operador de Vírgula</h3>
      <p className={styles.p_container}>
        Operador de Vírgula
      </p>

      <h3 className={styles.subtitle} id='opPalavraChave'>Operadores com Palavra-chave</h3>
      <p className={styles.p_container}>
        Operadores com Palavra-chave
      </p>

      <h3 className={styles.subtitle} id='opOutros'>Outros Operadores</h3>
      <p className={styles.p_container}>
        Outros Operadores
      </p>
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default Operadores;
