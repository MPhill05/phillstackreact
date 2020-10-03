import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <Header />
      {/* <Switch> */}
        <Route exact path='/' component={HomePage} />
      {/* </Switch> */}
    </div>
  );
}

export default App;
