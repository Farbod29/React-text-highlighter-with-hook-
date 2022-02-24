import React, { useEffect, useState } from 'react';
import './App.css';
import Highlighter from './highlighter';
function App() {
  return (
    <div className="App">
      <Highlighter />
    </div>
  );
}
// https://stackoverflow.com/questions/38810767/how-can-you-get-highlighted-text-window-getselection-in-reactjs

export default App;
