import React from 'react';
import Hero from './components/Hero.jsx';
import AboutAndAchievements from './components/AboutAndAchievements.jsx';
import ExperienceAndSkills from './components/ExperienceAndSkills.jsx';
import ContactCTA from './components/ContactCTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <AboutAndAchievements />
      <ExperienceAndSkills />
      <ContactCTA />
    </div>
  );
}

export default App;
