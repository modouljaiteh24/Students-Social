import React from "react";
import SearchInput from "./SearchInput";
import FriendItem from "./FriendItem";

const CardComponent = ({ user }) => {
  return (
    <div className="card">
      <div className="card-header">
        {/* Searchbar component */}
        <SearchInput />
      </div>

      {/*Friends List */}
      <FriendItem user={user} />
    </div>
  );
};

export default CardComponent;
