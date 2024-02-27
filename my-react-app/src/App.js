import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  // Extract hash value from URL
  const hashValue = window.location.hash.substr(1).toUpperCase();
  const [BearerToken, setBearerToken] = useState('');

  useEffect(() => {
    // Define the base URL for your backend
    const baseURL = 'http://localhost:5000';
    
    // Fetch data from backend with hash value
    axios.get(`${baseURL}/test/first`)
      .then(response => response.data)
      .then(data => {
        // Set hash value and fake bearer token received from backend
        setBearerToken(data.BearerToken);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Bearer Token: {BearerToken}</h2>
      <h2>Hash Value: {hashValue}</h2>
    </div>
  );
}

export default App;
