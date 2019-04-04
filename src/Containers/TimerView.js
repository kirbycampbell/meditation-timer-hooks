import React from "react";

const TimerView = React.memo(function TimerView(props) {
  return (
    <div>
      {/* BASIC VIEW - USER Set Time and Button to Start Shown  */}
      {!props.startCount && !props.end && !props.hideTimerView && (
        <div>
          <input
            type="number"
            min="1"
            max="140"
            required
            className="time-form form-control"
            placeholder="Enter Desired Time"
            onChange={event => props.setMin(event.target.value)}
          />
          <button
            className="btn btn-primary btn-loca"
            onClick={() => props.handleCountDown()}
          >
            Set Timer
          </button>
        </div>
      )}
    </div>
  );
});

export default TimerView;
