import Btn from './Components/Button';
import Menu from './Components/Menu';
import React from 'react';
import './main.css';

function App() {
  return (
    <div className="App" id="App">
       < Menu/>
        <div className='container-page'>
          <>
            <div className='wrapper-text'>
              <h1 className='wrapper-jumbo-text'>Random Password Generator</h1>
            </div>
          </>
          <Btn />
        </div>
    </div>
  );
}

export default App;
