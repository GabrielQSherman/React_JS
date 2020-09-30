import React from 'react';
import List from './components/List';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

import cryptoList from './data/cryptoList';
import { mainAppDiv } from './data/styles';
import {cryptoFormInputs} from './data/formInputs'
import {cryptoCompiler} from './data/dataCompilers'

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
            listType='ordered'
            list={cryptoList}
            inputs={cryptoFormInputs}
            dataName='Cryptocurrency'
            inputComplier={cryptoCompiler}
            /> 
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
