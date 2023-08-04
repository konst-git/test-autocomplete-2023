import React from "react"

type Prop = {
  items: string[]
};

const SuggestionsDisplay = ({ items }: Prop) => {
  return (
    <div>
        {items.length > 0 && (
        <ul>
          {items.map((item: string) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SuggestionsDisplay;
