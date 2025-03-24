import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Import icon

const InputField = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Simple validation rule: length must be at least 3 characters
    if (value.length >= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={`border-2 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isValid ? 'border-green-500' : 'border-gray-300'
        }`}
        placeholder="Enter at least 3 characters"
      />
      {isValid && <FaCheckCircle className="text-green-500 text-2xl" />} {/* Green tick icon */}
    </div>
  );
};

export default InputField;
