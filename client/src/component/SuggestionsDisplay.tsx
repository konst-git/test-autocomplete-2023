import React, { MutableRefObject } from "react"

type Prop = {
  items: string[],
  inputRef: MutableRefObject<HTMLInputElement>
};

const SuggestionsDisplay = ({ items, inputRef }: Prop) => {
  function onClick(event: React.MouseEvent<HTMLLIElement>) {
    const selectedSuggestion = event.currentTarget.innerText;
    
    console.log('Clicked the suggestion:', selectedSuggestion);
    
    inputRef.current.value = selectedSuggestion;
  }

  return (
    <div>
        {items.length > 0 && (
        <ul>
          {items.map((item: string) => (
            <li onClick={event => onClick(event)}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SuggestionsDisplay;
