import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function Timer() {
  const [isActive, setIsActive] = useState(true);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(
          () =>{ setSeconds(seconds => seconds + 1)},
          1000
      );
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {seconds}
        </p>
        <button value='Start!' onClick={() => {setIsActive(true)}}>Start!</button>
        <button value='Stop!' onClick={() => {setIsActive(false)}}>Stop!</button>
      </header>
    </div>
  );
}

export default Timer;
