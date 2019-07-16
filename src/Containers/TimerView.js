import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./Timer.css";

const TimerView = React.memo(function TimerView(props) {
  return (
    <div>
      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        {/* BASIC VIEW - USER Set Time and Button to Start Shown  */}
        {!props.startCount && !props.end && !props.hideTimerView && (
          <div>
            <input
              type="number"
              min="1"
              max="140"
              required
              className="time-form form-control"
              placeholder="Enter Desired Time (ie. Enter numbers like 1 or 4)"
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
      </CSSTransitionGroup>
    </div>
  );
});

export default TimerView;
