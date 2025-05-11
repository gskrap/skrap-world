import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from './pages';
import { HOME } from './constants/routes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={HOME} element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
