import { useNavigate } from 'react-router-dom';

import { Container, Image, Navbar } from 'react-bootstrap';

import styles from './Header.module.css';
import logo from '../../assets/img/logo-javascript-256.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar className={styles.navbar} sticky="top">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>
          <Image
            width={50}
            height={50}
            src={logo}
            fluid
            className={styles.logo_header}
          />
        <span className={styles.sis}>Javascript</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
