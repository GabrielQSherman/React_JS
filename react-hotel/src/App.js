import React from 'react';
import Navigation from './components/Navigation'
import { RoomContextProvider } from './contexts/roomContext'

function App() {
  return (
    <div className="App">
      <RoomContextProvider>
        <Navigation />
      </RoomContextProvider>
    </div>
  );
}

export default App;
