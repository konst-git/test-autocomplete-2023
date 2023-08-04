import React from "react";

type Prop = {
  value: string
};

const TextInput = (props: Prop) => {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={event => console.log("value changed!")}
      />
      <p>// place for errors</p>
    </div>
  );
};

export default TextInput;
