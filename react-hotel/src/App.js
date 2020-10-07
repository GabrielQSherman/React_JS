import React from 'react';
import Navigation from './components/Navigation'
import MainContext from './contexts/MainContext'

function App() {
  return (
    <div className="App">
      <MainContext>
        <Navigation />
      </MainContext>
    </div>
  );
}

export default App;
