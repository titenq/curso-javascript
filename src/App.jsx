import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Loading from './components/Loading';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import pascalCase from './helpers/pascalCase';
import topics from './helpers/topics';
import slug from './helpers/slug';

const topicComponents = {};

topics.forEach(topic => {
  const pascalCaseName = pascalCase(topic.name);

  topicComponents[pascalCaseName] = lazy(() => import(`./pages/topics/${pascalCaseName}/index.jsx`));
});

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {topics.map(topic => {
            const pascalCaseName = pascalCase(topic.name);
            const DynamicComponent = topicComponents[pascalCaseName];
            
            return (
              <Route
                key={topic.id}
                path={`/${slug(topic.name)}`}
                element={
                  <Suspense fallback={<Loading />}>
                    <DynamicComponent />
                  </Suspense>
                }
              />
            );
          })}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
