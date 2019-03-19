import React from "react";

const UserSelectView = React.memo(function UserSelectView(props) {
  return (
    <div>
      {/* User Selection View */}
      <div className="user-options">
        <i className="fas fa-headphones user-btn" />
        <i className="fas fa-ring user-btn" />
        <i className="fas fa-font user-btn" />
        <i className="far fa-save user-btn" />
      </div>
    </div>
  );
});

export default UserSelectView;
