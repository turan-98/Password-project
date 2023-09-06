import Btn from './Components/Button';
import Menu from './Components/Menu';
import React from 'react';
import '../public/styles/main.css'
import svg from '../public/img/security-svg.svg'

function App() {
  return (
    <div className="App" id="App">
       < Menu/>
        <div className='container-page d-flex  justify-content-center flex-wrap flex-column align-items-center'>
          <div className='p-4 m-4'>
            <h1 className='display-1 text-center'>Random Password Generator</h1>
            <small className='text-success'>Exploring Internet has never being so safe!</small>
          </div>
          <div className='d-flex flex-wrap flex-row justify-content-center'>
            <div className='wrapper-svg p-2 m-2'>
              <img src={svg} alt="svg"/>
            </div>
            <Btn />
          </div>
        </div>
        
    </div>
  );
}

export default App;
