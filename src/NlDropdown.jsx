// Code for the Dropdown component

import React from "react";
import { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle the selection of an option
  const handleSelection = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // Render the dropdown
  return (
    <div className="nl-dropdown" ref={dropdownRef}>
      
      <button
        type="button"
        className={`nl-dropdown__button ${isOpen ? "nl-dropdown__button--open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        title="Sélectionner une option"
      >
        {selected}
      </button>

      {isOpen && (
        <ul className="nl-dropdown__list" role="listbox">
          {options.map((option) => (
            <li
              key={option}
              className="nl-dropdown__item"
              onClick={() => handleSelection(option)}
              role="option"
              aria-selected={selected === option}
              tabIndex={0}
            >
              {option}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default Dropdown;
