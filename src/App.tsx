import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppHeader } from './components';
import { HOME, LINKS, MORE } from './constants/routes';
import { HomePage, LinksPage, MorePage } from './pages';

const App = () => {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={LINKS} element={<LinksPage />} />
        <Route path={MORE} element={<MorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
