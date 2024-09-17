import React from "react";

const Button = ({ users }) => {
  return (
    <button
      className={`follow-btn ${users.following ? "followed" : "follow-btn"}
              }`}
    >
      {users.following ? "following" : "follow"}
    </button>
  );
};

export default Button;
