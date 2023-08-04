import React, { useEffect, useState } from "react"
import SuggestionsDisplay from './SuggestionsDisplay';

type Prop = {
  value: string
};

const TextInput = (props: Prop) => {
  const [inputVal, setInputVal] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [fetchingError, setFetchingError] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value);
  };

  useEffect(() => {
    if (inputVal.length >= 2) {
      fetchSuggestions(inputVal)
    }
  }, [ inputVal ]);
  
  const fetchSuggestions = (inputVal: string) => {
    const apiUri = "/apiWords" + "?input=" + encodeURI(inputVal);
    fetch("//localhost:4000" + apiUri)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setSuggestions(data);
      },
      err => {
        setFetchingError(err);
        console.log('[fetchSuggestions] error:', err);
    })
  };

  /*
    value={props.value}
  */
  return (
    <div>
      <input
        type="text"
        placeholder="Start typing..."
        onChange={event => onChange(event)}
      />
      
      <SuggestionsDisplay items={suggestions} />

      {fetchingError && (<div className="errorStyle">fetchingError</div>)}
    </div>
  );
};

export default TextInput;
