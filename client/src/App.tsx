import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './component/TextInput';

function App() {
  return (
    <div className="App">
      <TextInput value="" />

      <div className="hint">
        start typing above to get autocomplete suggestions
      </div>
    </div>
  );
}

export default App;
