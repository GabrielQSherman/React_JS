import React, { useState} from 'react';
import {BrowserRouter} from 'react-router-dom'

import AppRouter from './Components/AppRouter'
import Footer from './Components/Footer';
import Header from './Components/Header'
import Button from './Components/Button'

function App() {

  const [dm, toggleDm] = useState(true);


  const styles = {
    mainContain: {
      width: '100%',
      height: '100%',
      backgroundColor: dm ? '#111' : 'white',
    }
  }

  return (
    <div
      style={{...styles.mainContain}}
    >
      <Header dm={dm}/>
        <BrowserRouter>
          <Button
            dm={dm}
            onClick={()=> toggleDm(!dm)}
            text={ dm ? 'Switch To Light Mode' : 'Switch To Dark Mode'  }
          />
          <AppRouter dm={dm} />
        </BrowserRouter>
      <Footer dm={dm}/>
    </div>
  );
}



export default App;
