import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  // Track the current mode (true for dark mode, false for light mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update body and button text based on the current mode
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.setAttribute("data-theme", "dark");
    } else {
      body.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]); // Run effect whenever isDarkMode changes

  // Toggle the dark mode state
  const toggleTheme = () => {
    setIsDarkMode(prevState => !prevState); // Toggle the state
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
