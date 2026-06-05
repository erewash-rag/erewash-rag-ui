import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import { ExperimentProvider } from './context/ExperimentContext';
import './App.css';

function App() {
  return (
    <ExperimentProvider>
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </ExperimentProvider>
  );
}

export default App; 