import React, {useState} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './App.css';
import IntervalForm from './IntervalForm';
let remainingSeconds;
let pomoTimer;


function App() {
  const [focusIntervalMinutes, setFocusIntervalMinutes] = useState(25);
  const [breakIntervalMinutes, setBreakIntervalMinutes] = useState(5)
  const [remainingTimeSeconds, setRemainingTimeSeconds] = useState(25 * 60);
  const [timerBeingUsed, setTimerBeingUsed] = useState("focus");
  const [pauseTimer, setPauseTimer] = useState(false);

  function handleStartClick() {
    if (pauseTimer === true) {
      setPauseTimer(false);
    } else {
      remainingSeconds = focusIntervalMinutes * 60;
    }
    runTimer();
  }

  const runTimer = () => {
    let newTimer = timerBeingUsed;

    pomoTimer = setInterval(() => {
      remainingSeconds--;
      setRemainingTimeSeconds(remainingSeconds);
      if (remainingSeconds <= 0) {
        alert(timerBeingUsed === "focus" ? "The timer is complete! Take a break!" : "Head back to work - click start when you're ready to start a new timer!");
        clearInterval(pomoTimer);
        newTimer = timerBeingUsed === "focus" ? "break" : "focus";
        remainingSeconds = newTimer === "break" ? breakIntervalMinutes * 60 : focusIntervalMinutes * 60;
        setTimerBeingUsed(newTimer);
      }
    }, 1000)
  }


  const handleStopClick = () => {
    setPauseTimer(true);
    setRemainingTimeSeconds(remainingSeconds);
    clearInterval(pomoTimer);
  }
  
  function handleResetClick() {
    clearInterval(pomoTimer);
    setTimerBeingUsed("focus");
    setRemainingTimeSeconds(focusIntervalMinutes * 60);
    setPauseTimer(false);
  }

  function handleTimerChange(e) {
    e.preventDefault();
    if (e.target.name === 'focus-timer') {
      if (e.target.value === '+') {
        setFocusIntervalMinutes(prev => prev + 1);
      } else {
        setFocusIntervalMinutes(prev => prev - 1);
      }
    } else if (e.target.name === 'break-timer') {
      if (e.target.value === '+') {
        setBreakIntervalMinutes(prev => prev + 1)
      } else {
        setBreakIntervalMinutes(prev => prev - 1);
      }
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (!timerBeingUsed) {
      setRemainingTimeSeconds(focusIntervalMinutes * 60);
      setTimerBeingUsed("focus");
      updateTimerDisplay();
    }
  }

  function updateTimerDisplay() {
    let minutes, seconds;
    if(remainingTimeSeconds) {
      minutes = String(Math.floor(remainingTimeSeconds / 60)).padStart(2, '0');
      seconds = String(remainingTimeSeconds%60).padStart(2, '0');
    }
    return `${minutes || '25'}:${seconds || '00'}`
  }

  return (
    <div className="App">
      <div className="timer">
        <ProgressBar now={remainingTimeSeconds/60} /> 
          {/* // / (timerBeingUsed === "focus" ? focusIntervalMinutes : breakIntervalMinutes) 
        // } /> */}
        {updateTimerDisplay()}
        <div className="button-bar">
          <button className="button-start" onClick={handleStartClick}>
            <label>Start</label>
          </button>
          <button className="button-stop" onClick={handleStopClick}>
            <label>Stop</label>
          </button>
          <button className="button-reset" onClick={handleResetClick}>
            <label>Reset</label>
          </button>
        </div>
      </div>
      <div className="interval-mod-form">
        <IntervalForm 
          handleSubmit = {handleSubmit}
          handleTimerChange={handleTimerChange}
          focusIntervalMinutes = {focusIntervalMinutes}
          breakIntervalMinutes = {breakIntervalMinutes}
        />
      </div>
      <div className="footer">
        <p>Made by <a href="https://www.reneelberger.com">Renee</a>
        </p>
      </div>
    </div>
  );
}

export default App;
