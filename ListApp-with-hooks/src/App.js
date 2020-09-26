import React from 'react';
import List from './components/List';
import Navbar from './components/Navbar';

import cryptoList from './data/cryptoList';
import { mainAppDiv } from './data/styles';
function App() {
  return (
    <div 
      style={mainAppDiv}
    
    >
      <Navbar />
      <List 

        title='Crypto List'
        list={cryptoList}
      
      />
    </div>
  );
}

export default App;
