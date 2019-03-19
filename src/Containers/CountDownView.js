import React from "react";

const CountDownView = React.memo(function CountDownView(props) {
  return (
    <div>
      {/* COUNTDOWN VIEW - Second By Second Countdown Shown and Stop Button  */}
      {props.startCount && (
        <div>
          <h1 className="counting">{`${props.min}:${props.seconds}`}</h1>

          <button
            className="btn btn-primary btn-loca"
            onClick={() => props.handleStop()}
          >
            Stop Timer
          </button>
        </div>
      )}
    </div>
  );
});

export default CountDownView;
