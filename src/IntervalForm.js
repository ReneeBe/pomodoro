import React from 'react';
import './App.css';

const IntervalForm = props => {
    const {handleSubmit, handleTimerChange, focusIntervalMinutes, breakIntervalMinutes } = props
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="interval-form-block">
                    <label>
                        Focus:
                    </label>
                        <div className="plus-minus-buttons">
                            <button type="button" onClick={handleTimerChange} value="+" name="focus-timer"> + </button>
                            <p>{focusIntervalMinutes}</p>
                            <button type="button" onClick={handleTimerChange} value="-" name="focus-timer"> - </button>
                        </div>
                </div>
                <div className="interval-form-block">
                    <label>
                        Break:
                    </label>
                        <div className="plus-minus-buttons">
                            <button type="button" onClick={handleTimerChange} value="+" name="break-timer"> + </button>
                            <p>{breakIntervalMinutes}</p>
                            <button type="button" onClick={handleTimerChange} value="-" name="break-timer"> - </button>
                        </div>
                </div>
                <br />
                <button type="Submit" className="submit-button"> Submit </button>
            </form>
        </div>
    )
}

export default IntervalForm;


