import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppHeader } from './components';
import { HOME } from './constants/routes';
import { HomePage } from './pages';

const App = () => {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path={HOME} element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
