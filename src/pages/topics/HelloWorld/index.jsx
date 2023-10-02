import { Container } from 'react-bootstrap';

import styles from '../Topics.module.css';
import Code from '../../../components/Code';
import helloWorld from '../../../helpers/code/helloWorld';

const HelloWorld = () => {
  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>Hello World</h1>

      <Code codeString={helloWorld}  />
    </Container>
  );
};

export default HelloWorld;
