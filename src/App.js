import React, {useState} from 'react';
import './App.css';
import IntervalForm from './IntervalForm';
let longPomoTimer;
let shortPomoTimer;

function App() {
  const [longIntervalMinutes, setLongIntervalMinutes] = useState(25);
  const [shortIntervalMinutes, setShortIntervalMinutes] = useState(5)

  const [remainingTimeSeconds, setRemainingTimeSeconds] = useState(null);

  function handleStartClick() {
    let remainingSeconds = longIntervalMinutes * 60;
    longPomoTimer = setInterval(() => {
      remainingSeconds--;
      setRemainingTimeSeconds(remainingSeconds);
      if (remainingSeconds <= 0) {
        alert("The timer is complete! Take a break")
        clearInterval(longPomoTimer);
        handleShortInterval()
      }
    }, 1000);
    
  }

  function handleShortInterval() {
    let remainingSeconds = shortIntervalMinutes * 60;
    shortPomoTimer = setInterval(() => {

      remainingSeconds--;
      setRemainingTimeSeconds(remainingSeconds);
      if (remainingTimeSeconds <= 0) {
        alert("Head back to work - click start when you're ready to start a new timer!")
        clearInterval(shortPomoTimer);
      }
    }, 1000);
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

  function handleSubmitChangeTimerInterval(e) {
    e.preventDefault();
    console.log('renee come back');
  }

  return (
    <div className="App">
      <header className="App-header">
        <p> {
          remainingTimeSeconds ?
          `${Math.floor(remainingTimeSeconds / 60)} : ${remainingTimeSeconds % 60}`
          : '25:00' }
        </p>
      </header>
      <div >
        <IntervalForm 
          handleSubmitChangeTimerInterval = {handleSubmitChangeTimerInterval}
          handleChange = {handleChange}
          longIntervalMinutes = {longIntervalMinutes}
          shortIntervalMinutes = {shortIntervalMinutes}
        />
        <button onClick={handleStartClick}>
          <label>Start the timer!</label>
        </button>
      </div>
      
    </div>
  );
}

export default App;
