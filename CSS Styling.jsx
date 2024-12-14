// File: Header.jsx
import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: '#4CAF50', // Change to your desired color
    color: 'white', // Change to your desired text color
    textAlign: 'center', // Change to your desired text alignment
    padding: '10px 0' // Optional: Add some padding for better spacing
  };

  return (
    <header style={headerStyle}>
      <h1>Welcome to ALX React App</h1>
    </header>
  );
}

export default Header;
