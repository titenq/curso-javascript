import { Container, Image } from 'react-bootstrap';

import logo from '../../assets/img/logo-javascript-256.png';

import styles from './Home.module.css';

const Home = () => {
  return (
    <Container className={styles.container}>
      <Image
        width={256}
        height={256}
        src={logo}
        fluid
        className={styles.logo}
      />

      <p className={styles.title}>Javascript</p>
    </Container>
  );
};

export default Home;
