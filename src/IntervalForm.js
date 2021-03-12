import React from 'react';
import './App.css';

const IntervalForm = props => {
    const {handleChange, longIntervalMinutes, shortIntervalMinutes } = props
   
    return (
        <div>
        <p>Personalize your intervals here (in minutes!):</p>
        <form>
            <label>Work Timer</label>
                <input 
                    type="text"
                    name="longTimer"
                    value={longIntervalMinutes}
                    onChange={handleChange}
                ></input>
            <label>Break Timer</label>
                <input
                    type="text"
                    name="shortTimer"
                    value={shortIntervalMinutes}
                    onChange={handleChange}
                ></input>
        </form>
        </div>
    )
}

export default IntervalForm;


