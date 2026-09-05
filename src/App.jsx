import React, { useState } from 'react';
import './index.css';
import './App.css';
import portfolioData from './data/portfolioData.json';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Others from './pages/Others';
import Contact from './pages/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home data={portfolioData.home} />;
      case 'about':
        return <About data={portfolioData.about} />;
      case 'projects':
        return <Projects data={portfolioData.projects} />;
      case 'skills':
        return <Skills data={portfolioData.skills} />;
      case 'others':
        return <Others data={portfolioData.others} />;
      case 'contact':
        return <Contact data={portfolioData.contact} />;
      default:
        return <Home data={portfolioData.home} />;
    }
  };

  return (
    <div className="app-container">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
}

export default App;
