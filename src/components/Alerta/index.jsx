import { Alert } from 'react-bootstrap';
import { FiAlertTriangle } from 'react-icons/fi';

const Alerta = props => {
  return (
    <Alert variant="warning" style={{ width: '600px', backgroundColor: '#F8DC3E', color: '#263238' }}>
      <FiAlertTriangle size={30} className="d-block" />
      {props.message}
    </Alert>
  );
};

export default Alerta;
