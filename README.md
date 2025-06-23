# NL Dropdown Component

A simple React dropdown.

## Installation

```bash
npm install @nicoludo/nl-dropdown-component
# or
yarn add @nicoludo/nl-dropdown-component
```

## Example

```jsx
import { useState } from "react";
import Dropdown from "@nicoludo/nl-dropdown-component";
import "@nicoludo/nl-dropdown-component/dist/nldropdown.css";

const App = () => {
  const [selected, setSelected] = useState("Option 1");
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div>
      <p>Selected: {selected}</p>
      <Dropdown {...{ options, selected, setSelected }} />
    </div>
  );
};

export default App;
```

## Props

* `options` *(array)*: List of dropdown options.
* `selected` *(string)*: Currently selected option.
* `setSelected` *(function)*: Updates the selected option.