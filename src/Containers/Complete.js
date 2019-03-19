import React from "react";

const Complete = React.memo(function Complete(props) {
  return (
    <div>
      {/* END VIEW - Completion shown Below BASIC VIEW */}
      <div className="complete-bnr">
        {props.end && (
          <h1 className="complete" onClick={() => props.setHiddenTime(0)}>
            Complete
          </h1>
        )}
      </div>
    </div>
  );
});

export default Complete;
