import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import slug from '../helpers/slug';

const useTopicPagination = topics => {
  const location = useLocation();
  const [topicPrevious, setTopicPrevious] = useState('');
  const [topicNext, setTopicNext] = useState('');

  useEffect(() => {
    const pathname = location.pathname.replace('/', '');
    const topic = topics.find(item => slug(item.name) === pathname);

    const previous = topics.find(item => item.id === topic.id - 1)?.name || null;
    const next = topics.find(item => item.id === topic.id + 1)?.name || null;

    setTopicPrevious(previous);
    setTopicNext(next);
  }, [location.pathname, topics]);

  return { topicPrevious, topicNext };
};

export default useTopicPagination;
