import React, { useState, useEffect } from 'react';

const StatusCheck = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div>
      {isOnline ? (
        <p>You are currently online.</p>
      ) : (
        <p>You are currently offline. Limited functionality may be available.</p>
      )}
    </div>
  );
};

export default function App() {
  return <>
    <h1>SRM AWT Demo</h1>
    <StatusCheck />
  </>
}