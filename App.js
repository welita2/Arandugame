import React, { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import VideoScreen from './src/screens/VideoScreen';
import AranduLoginScreen from './src/screens/LoginScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [route, setRoute] = useState('login'); // 'login' | 'home' | 'video'

  const handleLogin = () => {
    setIsLoggedIn(true);
    setRoute('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRoute('login');
  };

  const goToVideo = () => setRoute('video');
  const backToHome = () => setRoute('home');

  if (!isLoggedIn || route === 'login') {
    return <AranduLoginScreen onLogin={handleLogin} />;
  }

  if (route === 'home') {
    return <HomeScreen onLogout={handleLogout} onStart={goToVideo} />;
  }

  if (route === 'video') {
    return <VideoScreen onBack={backToHome} />;
  }

  return null;
}