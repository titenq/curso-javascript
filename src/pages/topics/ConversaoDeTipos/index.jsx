import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import conversaoDeTipos from '../../../helpers/code/conversaoDeTipos';
import Alerta from '../../../components/Alerta';

const ConversaoDeTipos = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Conversão de tipos é o processo de transformar um valor de um tipo em outro, por exemplo, converter uma <span className={styles.code}>string</span> em <span className={styles.code}>number</span> ou um <span className={styles.code}>number</span> em <span className={styles.code}>string</span>.
      </p>

      <p className={styles.p_container}>
        Essa conversão pode acontecer de forma explícita, quando você usa funções como <span className={styles.code}>Number()</span>, <span className={styles.code}>String()</span> e <span className={styles.code}>Boolean()</span>, ou de forma implícita, quando o próprio Javascript tenta converter os valores.
      </p>

      <Code codeString={conversaoDeTipos['01']} />

      <p className={styles.p_container}>
        Também podemos converter um valor numérico para texto. Isso é muito comum quando queremos montar mensagens ou exibir dados na tela.
      </p>

      <Code codeString={conversaoDeTipos['02']} />

      <p className={styles.p_container}>
        A função <span className={styles.code}>Boolean()</span> converte valores para verdadeiro ou falso no contexto booleano.
      </p>

      <Code codeString={conversaoDeTipos['03']} />

      <p className={styles.p_container}>
        Nem toda <span className={styles.code}>string</span> pode ser convertida para número. Quando a conversão não é possível, o retorno será <span className={styles.code}>NaN</span>, que significa <span className="fst-italic">Not a Number</span>.
      </p>

      <Code codeString={conversaoDeTipos['04']} />

      <p className={styles.p_container}>
        Além de <span className={styles.code}>Number()</span>, também existem <span className={styles.code}>parseInt()</span> e <span className={styles.code}>parseFloat()</span>. O <span className={styles.code}>parseInt()</span> tenta extrair apenas a parte inteira, enquanto o <span className={styles.code}>parseFloat()</span> mantém a parte decimal quando ela existir.
      </p>

      <Code codeString={conversaoDeTipos['05']} />

      <p className={styles.p_container}>
        O segundo parâmetro do <span className={styles.code}>parseInt()</span> é a <span className="fst-italic">base numérica</span>, também chamada de <span className="fst-italic">radix</span>. Ele informa em qual sistema de numeração a string deve ser interpretada. Por exemplo, base <span className={styles.code}>2</span> para binário, base <span className={styles.code}>10</span> para decimal e base <span className={styles.code}>16</span> para hexadecimal.
      </p>

      <p className={styles.p_container}>
        Sempre que possível, passe esse segundo parâmetro explicitamente para deixar claro como a conversão deve acontecer.
      </p>

      <Code codeString={conversaoDeTipos['06']} />

      <p className={styles.p_container}>
        Outra forma curta de converter <span className={styles.code}>string</span> para número é o operador <span className={styles.code}>+</span> unário. Ele funciona, mas para quem está começando normalmente <span className={styles.code}>Number()</span> é mais legível.
      </p>

      <Code codeString={conversaoDeTipos['07']} />

      <p className={styles.p_container}>
        Sobre <span className={styles.code}>'1' + 1</span> e <span className={styles.code}>1 + '1'</span>, aqui existe um detalhe importante: os dois retornam <span className={styles.code}>"11"</span>. Isso acontece porque o operador <span className={styles.code}>+</span> também serve para concatenar <span className={styles.code}>strings</span>. Se um dos lados já for string, o Javascript converte o outro valor para string e concatena.
      </p>

      <Code codeString={conversaoDeTipos['08']} />

      <p className={styles.p_container}>
        O comportamento pode parecer diferente quando existe mais de uma operação na mesma expressão, porque o Javascript avalia da esquerda para a direita. No exemplo <span className={styles.code}>2 + 3 + '4'</span>, primeiro ele soma <span className={styles.code}>2 + 3</span> e só depois concatena com <span className={styles.code}>'4'</span>.
      </p>

      <p className={styles.p_container}>
        Já em operadores como <span className={styles.code}>-</span>, <span className={styles.code}>*</span> e <span className={styles.code}>/</span>, o Javascript tenta converter os valores para número, por isso o resultado muda.
      </p>

      <Code codeString={conversaoDeTipos['09']} />

      <Alerta
        message="Evite depender demais da conversão implícita do Javascript. Para quem está aprendendo, a conversão explícita com Number(), String(), Boolean(), parseInt() e parseFloat() deixa o código mais legível e previsível."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default ConversaoDeTipos;
