import React from 'react';
import './App.css';

const IntervalForm = props => {
    const {handleSubmitChangeTimerInterval, handleChange, longIntervalMinutes, shortIntervalMinutes } = props

    return (
        <div>
        <p>Personalize your intervals here (in minutes!):</p>
        <form onSubmit={handleSubmitChangeTimerInterval}>
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
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default IntervalForm;


