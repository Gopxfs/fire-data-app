import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import AboutPage from './pages/AboutPage';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country" element={<CountryPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
