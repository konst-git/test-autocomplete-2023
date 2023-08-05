import React, { useState } from 'react';
import './App.css';
import TextInput from './component/TextInput';

function App() {
  const [isHintNeeded, setIsHintNeeded] = useState(true);

  const setHintNoLongerNeeded = () => {
    setIsHintNeeded(false);
  }

  return (
    <div className="App">
      <TextInput value="" setHintNoLongerNeeded={setHintNoLongerNeeded} />

      {isHintNeeded &&
        (<div className="hint">
          start typing above to get autocomplete suggestions
        </div>)
      }
    </div>
  );
}

export default App;
