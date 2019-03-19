import React from "react";

const TopNav = React.memo(function MyComponent(props) {
  return (
    <div>
      <div className="top-nav">
        <h1 className="webtitle">Meditation Timer</h1>
        <i className="icon fas fa-bars" onClick={() => props.handleMenu()} />
      </div>
      {props.menuShow && (
        <div className="my-menu">
          <div className="inner-menu">Home</div>
          <div className="inner-menu">Save</div>
          <div className="inner-menu">Load</div>
          <div className="inner-menu">Preset</div>
        </div>
      )}
    </div>
  );
});

export default TopNav;
