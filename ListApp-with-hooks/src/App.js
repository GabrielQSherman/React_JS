import React from 'react';
import List from './components/List';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

import cryptoList from './data/cryptoList';
import { mainAppDiv } from './data/styles';
function App() {
  return (
    <div 
      style={mainAppDiv}
    
    >
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <List 
            title='Crypto List'
            list={cryptoList}
            />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
