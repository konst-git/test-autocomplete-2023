import React, { useEffect, useState } from "react"
import SuggestionsDisplay from './SuggestionsDisplay';

type Prop = {
  value: string
};

const TextInput = (props: Prop) => {
  const [inputVal, setInputVal] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value);
  };

  useEffect(() => {
    fetchUserData(inputVal)
  }, [ inputVal ]);
  
  const fetchUserData = (inputVal: string) => {
    const apiUri = "/apiWords" + "?input=" + encodeURI(inputVal);
    fetch("//localhost:4000" + apiUri)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setSuggestions(data);
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
    </div>
  );
};

export default TextInput;
