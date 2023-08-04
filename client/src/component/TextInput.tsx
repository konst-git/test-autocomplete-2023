import React from "react";

type Prop = {
  value: string
};

const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log('onChange: ' + event.target.value);
};

const TextInput = (props: Prop) => {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={event => onChange(event)}
      />
      <p>// place for errors</p>
    </div>
  );
};

export default TextInput;
