import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import StatePage from './pages/StatePage';
import CityPage from './pages/CityPage';
import AboutPage from './pages/AboutPage';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country" element={<CountryPage />} />
          <Route path="/state" element={<StatePage />} />
          <Route path="/city" element={<CityPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
