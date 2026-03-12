import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import { TbCircleArrowLeftFilled } from 'react-icons/tb';

import styles from './Sidebar.module.css';
import topics from '../../helpers/topics';
import slug from '../../helpers/slug';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(() => window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setShowNav(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  const handleNavigate = () => {
    if (window.innerWidth <= 768) {
      setShowNav(false);
    }
  };

  return (
    <div className={`${styles.sidebar} ${showNav ? styles.open : styles.close}`}>
      <TbCircleArrowLeftFilled 
        size={50}
        className={`${styles.icon} ${!showNav ? styles.arrow_left : styles.arrow_right}`}
        onClick={handleShowNav} 
      />

      {showNav && (
        <Nav defaultActiveKey="/" className={styles.nav} >
          {topics.map(topic => (
            <NavLink key={topic.id} className={styles.links} to={slug(topic.name)} onClick={handleNavigate}>
              {topic.name}
            </NavLink>
          ))}
        </Nav>
      )}
    </div>
  );
};

export default Sidebar;
