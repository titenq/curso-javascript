import { Image, Spinner } from 'react-bootstrap';

import styles from './Loading.module.css';
import logo from '../../assets/img/logo-javascript-256.png';

const Loading = () => {
  return (
    <div className={styles.spinnerContainer}>
      <Spinner animation="border" variant="warning" className={styles.spinner} />

      <div className={styles.loading}>
        <span>Carregando...</span>

        <Image src={logo} alt="logo javascript" className={styles.logo} />
      </div>
    </div>
  );
};

export default Loading;
