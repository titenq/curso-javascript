import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Container, Image, Nav, Navbar } from 'react-bootstrap';

import styles from './Header.module.css';
import logo from '../../assets/img/logo-javascript-256.png';

const Header = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  return (
    <Navbar className={styles.navbar} sticky="top">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>
          <Image
            width={128}
            height={128}
            src={logo}
            fluid
            className={styles.logo_header}
          />
        <span className={styles.sis}>Javascript</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${styles.font}`} defaultActiveKey="/">
            <NavLink
              className={styles.links}
              to="/"
            >
              Home
            </NavLink>

            {!login && (
              <NavLink
                className={styles.links}
                to="/registrar"
              >
                Registrar
              </NavLink>
            )}

            {!login && (
              <NavLink
                className={styles.links}
                to="/login"
              >
                Login
              </NavLink>
            )}
            {login && (
              <NavLink
                className={styles.links}
                to="/"
              >
                Sair
              </NavLink>
            )}
          </Nav>

          {/* {login && (
            <div className={styles.avatar}>{avatar}</div>
          )} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
