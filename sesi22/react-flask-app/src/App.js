import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [placeholder, setPlaceholder] = useState('Hi');

  const tick = () => {
    fetch('/time')
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    fetch('/hello')
      .then((res) => res.json())
      .then((data) => {
        setPlaceholder(data.message);
      });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Flask Says {placeholder}</p>
        <p>
          The current time in unix <code>{currentTime}</code>
        </p>
        <p>{new Date(currentTime * 1000).toString()}</p>
      </header>
    </div>
  );
};

export default App;
