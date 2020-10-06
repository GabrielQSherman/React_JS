import React from 'react';
import ListContextProvider from './hooks/listContext';
import List from './components/List';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <ListContextProvider>
      <ControlPanel />
      <List />
    </ListContextProvider>
  );
}

export default App;
