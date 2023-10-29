import { OverlayTrigger, Table, Tooltip } from 'react-bootstrap';

import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import operadores from '../../../helpers/code/operadores';
import Alerta from '../../../components/Alerta';

const Operadores = () => {
  const tooltip = content => (
    <Tooltip id={`tooltip${content}`} style={{ position: 'fixed' }}>
      {content}
    </Tooltip>
  );

  const scrollToId = id => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
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
            <td className={styles.td_title} onClick={() => scrollToId("opAritmeticos")}>
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
            <td className={styles.td_title} onClick={() => scrollToId("opAtribuicao")}>
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
            <td className={styles.td_title} onClick={() => scrollToId("opComparacao")}>
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
            <td className={styles.td_title} onClick={() => scrollToId("opLogicos")}>
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
            <OverlayTrigger placement="top" overlay={tooltip('?? (nullish coalescing)')}>
              <td className={styles.td_operadores}>??</td>
            </OverlayTrigger>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
          </tr>
          <tr>
            <td className={styles.td_title} onClick={() => scrollToId("opIncrementoDecremento")}>
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
            <td className={styles.td_title} onClick={() => scrollToId("opConcatenacao")}>
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
            <td className={styles.td_title} onClick={() => scrollToId("opBitwise")}>
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
            <td className={styles.td_title} onClick={() => scrollToId("opTernario")}>
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
            <td className={styles.td_title} onClick={() => scrollToId("opAcessoProps")}>
              Operadores de Acesso a Propriedades
            </td>
            <OverlayTrigger placement="top" overlay={tooltip('. \u00A0(ponto)')}>
              <td className={styles.td_operadores}>.</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('[\u00A0\u00A0] (colchetes)')}>
              <td className={styles.td_operadores}>[{' '}]</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('?.(optional chaining)')}>
              <td className={styles.td_operadores}>?.</td>
            </OverlayTrigger>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
            <td className={styles.td_operadores}></td>
          </tr>
          <tr>
            <td className={styles.td_title} onClick={() => scrollToId("opVirgula")}>
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
            <td className={styles.td_title} onClick={() => scrollToId("opPalavraChave")}>
              Operadores com Palavra-Chave
            </td>
            <OverlayTrigger placement="top" overlay={tooltip('typeof (retorna o tipo de um valor)')}>
              <td className={styles.td_operadores}>typeof</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('instanceof (verifica se um objeto é uma instância de uma classe ou construtor)')}>
              <td className={styles.td_operadores}>instanceof</td>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip('delete (remove propriedade de objeto ou elemento de array)')}>
              <td className={styles.td_operadores}>delete</td>
            </OverlayTrigger>
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
        Operadores de Atribuição são utilizados para atribuir valores a variáveis. Já vimos sobre o operador de atribuição (=) que atribui um valor a uma variável, agora vamos ver alguns exemplos de outros operadores de atribuição.
      </p>

      <Code codeString={operadores['03']} />

      <p className={styles.p_container}>
        Ainda existem outros operadores de atribuição mas como não são comumente usados não vamos dar exemplos de uso deles.
      </p>

      <h3 className={styles.subtitle} id='opComparacao'>Operadores de Comparação</h3>
      <p className={styles.p_container}>
        Operadores de Comparação são utilizados para comparar valores e expressões, geralmente retornando um valor booleano (true ou false) que indica se a comparação é verdadeira ou falsa. Eles são fundamentais para controlar o fluxo de um programa e tomar decisões lógicas. 
      </p>

      <Code codeString={operadores['04']} />

      <p className={styles.p_container}>
        Preste atenção na diferença entre igualdade (==) e igualdade estrita (===), a igualdade verifica apenas o valor dos operandos, por isso na linha 6, 10 (number) é igual a &apos;10&apos; (string) e a igualdade estrita verifica o valor e o tipo dos operandos, por isso na linha 9, a mesma comparação é avaliada como false.
      </p>

      <Alerta
        message="Note que nos operadores == e != podemos ter um retorno não desejável, portanto, sempre que possível use os operadores === e !==."
      />

      <h3 className={styles.subtitle} id='opLogicos'>Operadores Lógicos</h3>
      <p className={styles.p_container}>
        Operadores Lógicos são utilizados para realizar operações de lógica booleana retornando true ou false.
      </p>

      <p className={styles.p_container}>
        O && (E Lógico) retorna true se todos os operandos forem true.
      </p>

      <p className={styles.p_container}>
        O || (OU Lógico) retorna true se pelo menos um dos operandos forem true.
      </p>

      <p className={styles.p_container}>
        O ! (NÃO Lógico) inverte o valor booleando, de true para false ou de false para true.
      </p>

      <p className={styles.p_container}>
        O ?? (Nullish coalescing) retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined, caso contrário, ele retorna o seu operando do lado esquerdo.
      </p>

      <Code codeString={operadores['05']} />

      <h3 className={styles.subtitle} id='opIncrementoDecremento'>Operadores de Incremento e Decremento</h3>
      <p className={styles.p_container}>
        Operadores de Incremento e Decremento são utilizados para incrementar 1 a uma variável (<span className={styles.td_operadores}>++</span>) ou decrementar 1 a uma variável (<span className={styles.td_operadores}>--</span>). Podem ser pré-incremento / pré-decremento quando o operador vem antes da variável ou pós-incremento / pós-decremento quando o operador vem depois da variável.
      </p>

      <Code codeString={operadores['06']} />

      <h3 className={styles.subtitle} id='opConcatenacao'>Operador de Concatenação</h3>
      <p className={styles.p_container}>
        Operador de Concatenação é utilizado para concatenar (juntar) duas ou mais strings, resultando em uma única string.
      </p>

      <Code codeString={operadores['07']} />

      <Alerta
        message="Note que na linha 5 é exibido nome e sobrenome juntos e na linha 8 é exibido separados porque na linha 7 é concatenado um espaço entre nome e sobrenome."
      />

      <h3 className={styles.subtitle} id='opBitwise'>Operadores de Bitwise</h3>
      <p className={styles.p_container}>
        Operadores de Bitwise são utilizados para realizar operações de manipulação de bits em números inteiros. Eles tratam números como sequências de bits e executam várias operações bit a bit.
      </p>

      <Alerta
        message="Os operadores de bitwise quase nunca são utilizados, portanto não invistam muito tempo para entendê-los, só estamos exibindo aqui para que você saiba que eles existem."
      />

      <p className={styles.p_container}>
        Os números inteiros são convertidos em binário (sequência de 0 e 1), esses binários são colocados um embaixo do outro e é aplicado a lógica booleana da última coluna para a primeira coluna, convertendo o 0 para false e o 1 para true.
      </p>

      <Code codeString={operadores['08']} />

      <h3 className={styles.subtitle} id='opTernario'>Operador Ternário</h3>
      <p className={styles.p_container}>
        Operador Ternário é utilizado para retornar um ou outro valor dependendo se a avaliação de uma estrutura condicional retorna true ou false.
      </p>

      <Code codeString={operadores['09']} />

      <Alerta
        message="O operador ternário também é chamado de if reduzido. Veremos sobre o if nos próximos tópicos."
      />

      <h3 className={styles.subtitle} id='opAcessoProps'>Operadores de Acesso a Propriedades</h3>
      <p className={styles.p_container}>
        Operadores de Acesso a Propriedades são utilizados para acessar as propriedades de objetos, o Optional Chaining é uma forma mais segura de acesso porque antes de acessar a propriedade ele verifica se ela existe.
      </p>

      <Code codeString={operadores['10']} />

      <Alerta
        message="Note que se tentarmos acessar uma propriedade que não existe no objeto será retornado undefined, como nas linhas 9 e 10. Sobre o Optional Chaining veja que a linha 12 está comentada porque ao tentarmos acessar a propriedade email, que não existe no objeto, e encadearmos uma função, irá gerar o erro da linha 13, mas ao usarmos o Optional Chaining, como na linha 15, não gera o erro e retorna undefined. Veremos mais sobre objetos nos próximos tópicos."
      />

      <h3 className={styles.subtitle} id='opVirgula'>Operador de Vírgula</h3>
      <p className={styles.p_container}>
        Operador de Vírgula é utilizado para combinar várias expressões em uma única instrução. Ele avalia cada expressão da esquerda para a direita e retorna o valor da última expressão.
      </p>

      <Code codeString={operadores['11']} />

      <Alerta
        message="O operador de vírgula é pouco utilizado e pode deixar o código menos legível, portanto não invistam muito tempo para entendê-los, só estamos exibindo aqui para que você saiba que eles existem."
      />

      <h3 className={styles.subtitle} id='opPalavraChave'>Operadores com Palavra-chave</h3>
      <p className={styles.p_container}>
        O operador typeof é utilizado para obter o tipo de dado de uma expressão. Ele retorna uma string que indica o tipo de dado.
      </p>

      <p className={styles.p_container}>
        O operador instanceof é utilizado para verificar se um objeto é uma instância de uma classe ou construtor específico. Ele retorna true se o objeto for uma instância da classe, caso contrário, retorna false.
      </p>

      <p className={styles.p_container}>
        O operador delete é utilizado para remover uma propriedade de um objeto. Ele retorna true se a propriedade for removida com sucesso, caso contrário, retorna false. Também pode ser utilizado para remover elementos de um array. O operador delete remove o elemento, mas deixa o valor undefined no array.
      </p>

      <Code codeString={operadores['12']} />

      <Alerta
        message="Note que na linha 4, typeof null retorna object. O operador delete é considerado por muitos uma má prática, existem formas melhores e mais performáticas de remover propriedades de objetos e elementos de array. Não use o operador delete."
      />
    </>
  );

  return (
    <CustomTopic content={content} />
  );
};

export default Operadores;
