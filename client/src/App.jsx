import NavBar from './components/nav_bar/NavBar';
import { Footer } from './layouts/footer/Footer';

import SmoothScroll from 'smooth-scroll';
import './App.css';
import React from 'react';
import Routes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes></Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
