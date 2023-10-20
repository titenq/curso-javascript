import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import { TbCircleArrowLeftFilled } from 'react-icons/tb';

import styles from './Sidebar.module.css';
import topics from '../../helpers/topics';
import slug from '../../helpers/slug';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(true);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={`${showNav ? styles.open : styles.close}`}>
      <TbCircleArrowLeftFilled 
        size={50}
        className={`${styles.icon} ${!showNav ? styles.arrow_left : styles.arrow_right}`}
        onClick={handleShowNav} 
      />

      {showNav && (
        <Nav defaultActiveKey="/" className={styles.nav} >
          {topics.map(topic => (
            <NavLink key={topic.id} className={styles.links} to={slug(topic.name)}>
              {topic.name}
            </NavLink>
          ))}
        </Nav>
      )}
    </div>
  );
};

export default Sidebar;
