import React from 'react';

import './App.css';
import AppProvider from './provider/AppProvider';
import Main from './router';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <Main />
    </AppProvider>
  );
}

export default App;
