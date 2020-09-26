import React from 'react';
import List from './components/List';
import Navbar from './components/Navbar';
import { ThemeContextProvider as ThemeContext } from './contexts/ThemeContext';

import cryptoList from './data/cryptoList';
import { mainAppDiv } from './data/styles';
function App() {
  return (
    <div 
      style={mainAppDiv}
    
    >
      <ThemeContext>
        <Navbar />
        <List 
          title='Crypto List'
          list={cryptoList}
        />
      </ThemeContext>
    </div>
  );
}

export default App;
