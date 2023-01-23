import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import AppProvider from './provider/AppProvider';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <span className="logo">TRYBE</span>
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object>
      </div>
    </AppProvider>
  );
}

export default App;
