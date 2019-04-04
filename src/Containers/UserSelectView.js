import React from "react";

const UserSelectView = props => {
  return (
    <div>
      {!props.startCount && (
        <div>
          {/* User Selection View */}
          <div className="user-options">
            <i
              className="fas fa-headphones user-btn"
              onClick={props.handleBckgrndMusic}
            />
            <i className="fas fa-ring user-btn" onClick={props.handleDing} />
            <i
              className="fas fa-font user-btn"
              onClick={props.handleTimerView}
            />
            <i className="far fa-save user-btn" onClick={props.handleSave} />
          </div>
          <div className="user-opt-descrip">
            <div className="user-btn" onClick={props.handleBckgrndMusic}>
              Background Music
            </div>
            <div className="user-btn" onClick={props.handleDing}>
              End Sound
            </div>
            <div className="user-btn" onClick={props.handleTimerView}>
              Timer
            </div>
            <div className="user-btn" onClick={props.handleSave}>
              Save
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSelectView;
