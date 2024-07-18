import React from 'react';
import './HorizontalGrid.css'; // Import CSS for styling
import { useState } from 'react';


function UserTagging() {
    const [selectedOption, setSelectedOption] = useState('');
    const [options] = useState([
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      // Add more options as needed
    ]);
  
    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Option 1', checked: false },
        { id: 2, label: 'Option 2', checked: false },
        { id: 3, label: 'Option 3', checked: false },
        // Add more checkbox options as needed
      ]);
    
      const handleCheckboxChange = (id) => {
        setCheckboxes(prevCheckboxes =>
          prevCheckboxes.map(checkbox =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
          )
        );
      };



  return (

    <div className="horizontal-grid">
      <div className="grid-item">
      <h2>Users</h2>        
        <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <p>Selected option: {selectedOption}</p>
      </div>


      <div className="grid-item">
      <h2>Modules</h2>
      {checkboxes.map(checkbox => (
        <div key={checkbox.id} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={`checkbox-${checkbox.id}`}
            checked={checkbox.checked}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
          <label className="form-check-label" htmlFor={`checkbox-${checkbox.id}`}>
            {checkbox.label}
          </label>
        </div>
      ))}
      </div>


      {/* Add more grid items as needed */}
    </div>
  );
}

export default UserTagging;
