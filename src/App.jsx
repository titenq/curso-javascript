import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './components/Header/index';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
