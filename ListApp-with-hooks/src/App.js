import React from 'react';
import List from './components/List';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { ListContextProvider } from './contexts/ListContext';

import { mainAppDiv } from './data/styles';
import EveryList from './components/EveryList';

function App() {
  return (
    <div 
      style={mainAppDiv}
    >
      <ThemeContextProvider>
        <AuthContextProvider>
          <ListContextProvider>
            <Navbar />
            <EveryList />
          </ListContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;