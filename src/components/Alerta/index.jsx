import { Alert } from 'react-bootstrap';
import { FiAlertTriangle } from 'react-icons/fi';

import styles from './Alerta.module.css';

const Alerta = props => {
  return (
    <Alert variant="warning" className={styles.alerta}>
      <FiAlertTriangle size={30} className="d-block" />
      {props.message}
    </Alert>
  );
};

export default Alerta;
