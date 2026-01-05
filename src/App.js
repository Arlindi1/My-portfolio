import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

function App() {
  useScrollReveal();

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
