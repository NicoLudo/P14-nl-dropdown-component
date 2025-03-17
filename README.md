# NL Dropdown Component

A simple and customizable dropdown component built with React.

## Example Usage

```jsx
import { useState } from "react";
import Dropdown from "../components/NlDropdown.jsx";
import "../assets/css/nldropdown.css";

const App = () => {
  const [selected, setSelected] = useState('Option 1');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div>
      <p>Selected: {selected}</p>
      <Dropdown options={options} selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default App;
```

## Props

- `options` (array): List of options to display in the dropdown.
- `selected` (string): The currently selected option.
- `setSelected` (function): Function to update the selected option.
