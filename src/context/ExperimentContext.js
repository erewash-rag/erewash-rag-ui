import React, { createContext, useContext, useState } from 'react';

const ExperimentContext = createContext();

export const ExperimentProvider = ({ children }) => {
  const [experiment, setExperiment] = useState(
    () => localStorage.getItem('experiment') === 'true'
  );

  const toggle = () => {
    setExperiment(prev => {
      const next = !prev;
      localStorage.setItem('experiment', String(next));
      return next;
    });
  };

  return (
    <ExperimentContext.Provider value={{ experiment, toggle }}>
      {children}
    </ExperimentContext.Provider>
  );
};

export const useExperiment = () => useContext(ExperimentContext);
