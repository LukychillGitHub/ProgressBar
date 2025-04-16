import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import './App.css'; // si querés mantener tu CSS original

export default function App() {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    setProgress(prev => (prev < 100 ? prev + 10 : 100));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <ProgressBar progress={progress} />
      <button
        onClick={updateProgress}
        style={{
          marginTop: '16px',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '4px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Increase Progress
      </button>
    </div>
  );
}
