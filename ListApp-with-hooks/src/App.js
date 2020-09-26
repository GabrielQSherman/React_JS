import React from 'react';
import List from './components/List';
import Navbar from './components/Navbar';
import { ThemeContextProvider } from './contexts/ThemeContext';

import cryptoList from './data/cryptoList';
import { mainAppDiv } from './data/styles';
function App() {
  return (
    <div 
      style={mainAppDiv}
    
    >
      <ThemeContextProvider>
        <Navbar />
        <List 
          title='Crypto List'
          list={cryptoList}
        />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
