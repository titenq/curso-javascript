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

  const topicSections = topics.reduce((sections, topic) => {
    const currentSection = sections.find(section => section.title === topic.section);

    if (currentSection) {
      currentSection.topics.push(topic);
      
      return sections;
    }

    sections.push({
      title: topic.section,
      topics: [topic]
    });

    return sections;
  }, []);

  return (
    <div className={`${styles.sidebar} ${showNav ? styles.open : styles.close}`}>
      <TbCircleArrowLeftFilled 
        size={50}
        className={`${styles.icon} ${!showNav ? styles.arrow_left : styles.arrow_right}`}
        onClick={handleShowNav} 
      />

      {showNav && (
        <Nav defaultActiveKey="/" className={styles.nav} >
          {topicSections.map(section => (
            <div key={section.title} className={styles.section}>
              <p className={styles.section_title}>{section.title}</p>

              {section.topics.map(topic => (
                <NavLink
                  key={topic.id}
                  className={({ isActive }) => `${styles.links} ${isActive ? styles.active_link : ''}`.trim()}
                  to={`/${slug(topic.name)}`}
                  onClick={handleNavigate}
                >
                  {topic.name}
                </NavLink>
              ))}
            </div>
          ))}
        </Nav>
      )}
    </div>
  );
};

export default Sidebar;
