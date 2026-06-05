import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, FlaskConical } from 'lucide-react';
import { useExperiment } from '../context/ExperimentContext';

const Header = () => {
  const { experiment, toggle } = useExperiment();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <Newspaper style={{ marginRight: '8px', display: 'inline' }} />
          Erewash Rag
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <button
            className={`experiment-toggle${experiment ? ' experiment-toggle--on' : ''}`}
            onClick={toggle}
            title={experiment ? 'Experiment mode on' : 'Experiment mode off'}
          >
            <FlaskConical size={16} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header; 