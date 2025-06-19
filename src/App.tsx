import React from 'react';

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { AppHeader } from './components';
import { HOME, ABOUT, LINKS } from './constants/routes';
import { HomePage, LinksPage, AboutMe } from './pages';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppHeader />
        <main style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
          <Routes>
            <Route path={HOME} element={<HomePage />} />
            <Route path={ABOUT} element={<AboutMe />} />
            <Route path={LINKS} element={<LinksPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
