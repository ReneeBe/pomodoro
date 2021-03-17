import React from 'react';
import './App.css';

const IntervalForm = props => {
    const {handleChange, handleSubmit, longIntervalMinutes, shortIntervalMinutes } = props
   
    return (
        <div>
            <h1>Personalize your intervals here:</h1>
            <form onSubmit={handleSubmit}>
                <div className="interval-form-block">
                    <label>
                        Work Timer:
                    </label>
                        <input 
                            type="text"
                            name="longTimer"
                            value={longIntervalMinutes}
                            onChange={handleChange}
                        ></input>

                </div>
                <div className="interval-form-block">
                    <label>
                        Break Timer:
                    </label>
                        <input
                            type="text"
                            name="shortTimer"
                            value={shortIntervalMinutes}
                            onChange={handleChange}
                        ></input>
                </div>
                <button type="Submit"> Submit </button>
            </form>
            <h3>
                Please provide time in minutes
            </h3>
        </div>
    )
}

export default IntervalForm;


