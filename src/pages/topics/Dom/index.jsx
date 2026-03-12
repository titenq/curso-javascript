import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import dom from '../../../helpers/code/dom';
import Alerta from '../../../components/Alerta';

const Dom = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        DOM significa <span className="fst-italic">Document Object Model</span>. É a representação da página HTML em forma de objetos, permitindo que o Javascript leia e altere elementos da tela.
      </p>

      <p className={styles.p_container}>
        Pense no DOM como uma árvore. Cada tag HTML vira um nó dessa árvore, com relações de pai, filho e irmãos.
      </p>

      <Code codeString={dom['01']} />

      <p className={styles.p_container}>
        Nesse exemplo, <span className={styles.code}>html</span> é o nó raiz do documento, <span className={styles.code}>body</span> é filho de <span className={styles.code}>html</span>, e o <span className={styles.code}>button</span> é filho da <span className={styles.code}>div</span>.
      </p>

      <p className={styles.p_container}>
        Para manipular o DOM, normalmente começamos selecionando elementos da página. Os seletores mais comuns são <span className={styles.code}>querySelector()</span>, <span className={styles.code}>querySelectorAll()</span> e métodos como <span className={styles.code}>getElementById()</span>.
      </p>

      <Code codeString={dom['02']} />

      <Code codeString={dom['03']} />

      <p className={styles.p_container}>
        Depois de selecionar um elemento, podemos alterar conteúdo, classes, atributos e estilos.
      </p>

      <Code codeString={dom['04']} />

      <Code codeString={dom['05']} />

      <p className={styles.p_container}>
        Também podemos criar elementos novos e inseri-los na página dinamicamente.
      </p>

      <Code codeString={dom['06']} />

      <Alerta
        message="O DOM é a base de praticamente toda interação no navegador. Entender seleção, leitura, alteração e criação de elementos é obrigatório para dominar Javascript no browser."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default Dom;
