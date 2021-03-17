import React, {useState} from 'react';
import './App.css';
import IntervalForm from './IntervalForm';
let remainingSeconds;
let pomoTimer;

function App() {
  const [longIntervalMinutes, setLongIntervalMinutes] = useState(25);
  const [shortIntervalMinutes, setShortIntervalMinutes] = useState(5)
  const [remainingTimeSeconds, setRemainingTimeSeconds] = useState(null);
  const [timerBeingUsed, setTimerBeingUsed] = useState("long");
  const [pauseTimer, setPauseTimer] = useState(false);

  function handleStartClick() {
    if (pauseTimer === true) {
      setPauseTimer(false);
    } else {
      remainingSeconds = longIntervalMinutes * 60;
    }
    runTimer();
  }

  const runTimer = () => {
    let newTimer = timerBeingUsed;




    pomoTimer = setInterval(() => {
      remainingSeconds--;
      setRemainingTimeSeconds(remainingSeconds);

      if (remainingSeconds <= 0) {
        alert(timerBeingUsed === "long" ? "The timer is complete! Take a break!" : "Head back to work - click start when you're ready to start a new timer!");
        // console.log('here is timer being used', timerBeingUsed);
        clearInterval(pomoTimer);

        newTimer = timerBeingUsed === "long" ? "short" : "long";
        remainingSeconds = newTimer === "short" ? shortIntervalMinutes * 60 : longIntervalMinutes * 60;
        // console.log('here is newTimer', newTimer);
        // if (timerBeingUsed === "short") {
        //   clearInterval(pomoTimer);
        // }
        setTimerBeingUsed(newTimer);
        // console.log('here is timerBeingUsed after', timerBeingUsed);
        // console.log('here is remainingSeconds ', remainingSeconds);
        // setRemainingTimeSeconds(remainingSeconds);
        // console.log('and here is remainingTimeSDeconbds after', remainingTimeSeconds)

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
    setRemainingTimeSeconds(null);
    setPauseTimer(false);
    updateTimerDisplay();
  }


  function handleChange(e) {
    e.preventDefault();
    if (e.target.name === 'longTimer') {
      setLongIntervalMinutes(e.target.value);
    } 
    if (e.target.name === 'shortTimer') {
      setShortIntervalMinutes(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setRemainingTimeSeconds(longIntervalMinutes * 60);
    setTimerBeingUsed("long");
  }

  function updateTimerDisplay() {
    let minutes = '25',
    seconds = '00';

    if(remainingTimeSeconds) {
      minutes = String(Math.floor(remainingTimeSeconds / 60)).padStart(2, '0');
      seconds = String(remainingTimeSeconds%60).padStart(2, '0');
    }
    
    return `${minutes}:${seconds}`
  }

  return (
    <div className="App">
      <div className="timer">
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
          handleChange = {handleChange}
          handleSubmit = {handleSubmit}
          longIntervalMinutes = {longIntervalMinutes}
          shortIntervalMinutes = {shortIntervalMinutes}
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
