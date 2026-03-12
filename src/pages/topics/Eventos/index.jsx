import styles from '../Topics.module.css';
import CustomTopic from '../CustomTopic';
import Code from '../../../components/Code';
import eventos from '../../../helpers/code/eventos';
import Alerta from '../../../components/Alerta';

const Eventos = () => {
  const content = (
    <>
      <p className={styles.p_container}>
        Eventos são ações que acontecem na página, como cliques, digitação, envio de formulários e teclas pressionadas. O Javascript pode reagir a esses eventos.
      </p>

      <p className={styles.p_container}>
        O método mais comum para ouvir eventos é o <span className={styles.code}>addEventListener()</span>. Ele recebe pelo menos dois argumentos: o nome do evento e a função que será executada quando esse evento acontecer.
      </p>

      <Code codeString={eventos['01']} />

      <p className={styles.p_container}>
        Cada evento entrega um objeto com informações úteis. No caso de um campo de texto, por exemplo, você normalmente acessa o valor digitado por meio do <span className={styles.code}>event.target.value</span>.
      </p>

      <Code codeString={eventos['02']} />

      <p className={styles.p_container}>
        Também podemos escutar eventos do documento inteiro, como teclas pressionadas pelo usuário.
      </p>

      <Code codeString={eventos['03']} />

      <p className={styles.p_container}>
        Em formulários, é comum usar <span className={styles.code}>event.preventDefault()</span> para impedir o comportamento padrão do navegador e tratar o envio com Javascript.
      </p>

      <Code codeString={eventos['04']} />

      <p className={styles.p_container}>
        Outro conceito importante é a propagação de eventos. Muitas vezes o evento acontece em um elemento filho, mas pode ser tratado no pai. Esse padrão é muito útil em listas e componentes dinâmicos.
      </p>

      <Code codeString={eventos['05']} />

      <Alerta
        message="Eventos são o centro da interatividade no navegador. Para usar bem, você precisa entender addEventListener, o objeto event, preventDefault e propagação."
      />
    </>
  );

  return <CustomTopic content={content} />;
};

export default Eventos;
