import React, { useEffect, useState } from "react"
import SuggestionsDisplay from './SuggestionsDisplay';

type Prop = {
  value: string
};

const TextInput = (props: Prop) => {
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('onChange: ' + event.target.value);
  };

  useEffect(() => {
    fetchUserData()
  }, []);
  
  const fetchUserData = () => {
    fetch("//localhost:4000/apiWords")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSuggestions(data)
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
