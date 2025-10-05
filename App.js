import React, { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import AranduLoginScreen from './src/screens/LoginScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <HomeScreen onLogout={handleLogout} />;
  }

  return <AranduLoginScreen onLogin={handleLogin} />;
}