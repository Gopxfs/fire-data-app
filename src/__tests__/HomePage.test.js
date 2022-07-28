import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import '@testing-library/jest-dom';
import HomePage from '../pages/HomePage';
import CountryPage from '../pages/CountryPage';

const renderHomepage = () => render(
  <Provider store={store}>
    <Router>
      <HomePage />
    </Router>
  </Provider>,
);

const renderCountryPage = () => render(
  <Provider store={store}>
    <Router>
      <CountryPage />
    </Router>
  </Provider>,
);

// TESTING MAIN ELEMENTS AT HOMEPAGE
describe('Homepage should exist', () => {
  test('Headers should exist', () => {
    renderHomepage();
    const mainHeader = screen.getByText('Fires detected in South America');
    expect(mainHeader).toBeInTheDocument();

    const fires = screen.getByText('0');
    expect(fires).toBeInTheDocument();

    const sortBox = screen.getByText('Sort by');
    expect(sortBox).toBeInTheDocument();
  });
});

// TESTING STATE LIST
describe('State list should exist', () => {
  test('State header should exist', () => {
    renderCountryPage();
    const stateHeader = screen.getByText('Individual state contribution:');
    expect(stateHeader).toBeInTheDocument();
  });
  test('State contribution should exist', () => {
    renderCountryPage();
    const stateContribution = screen.getByText('NaN%');
    expect(stateContribution).toBeInTheDocument();
  });
});

// TESTING NAVBAR
describe('Navbar should exist', () => {
  test('Navlinks should exist', () => {
    renderHomepage();
    const about = screen.getByText('About');
    expect(about).toBeInTheDocument();

    const homepage = screen.getByText('Homepage');
    expect(homepage).toBeInTheDocument();
  });
});
