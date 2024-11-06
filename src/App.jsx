// App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import InitialLoading from './Components/InitialLoading';
import IndexWeb from './Components/IndexWeb';

function App() {
  const [loading, setLoading] = useState(true); // Initially show the loading screen
  const [showContent, setShowContent] = useState(false); // Control content visibility

  useEffect(() => {
    // Simulate a delay (e.g., 3 seconds for loading)
    setTimeout(() => {
      setLoading(false); // Hide loading screen
      setShowContent(true); // Show other content after loading
    }, 4000); // 3 seconds delay
  }, []);

  return (
    <div className="app-container">
      {loading && <InitialLoading />} {/* Show loading screen while loading is true */}
      {showContent && <IndexWeb />} {/* Show main content after loading */}
    </div>
  );
}

export default App;
