import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
