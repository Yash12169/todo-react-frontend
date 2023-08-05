import React, { useEffect, useState } from 'react';
import './App.css';
import { AppHeader } from './components/AppHeader';
import { AppMain } from './components/AppMain';
import { AppFooter } from './components/AppFooter';

function App() {

  return (
    <div className="App">
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  );
}

export default App;
