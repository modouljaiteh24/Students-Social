import React from "react";

const SearchInput = ({
  type = "text",
  className,
  placeholder,
  ...otherprops
}) => {
  otherprops = {};
  return (
    <div className={"searchbar-wrapper"}>
      <img className={"searchbar-icon"} src="./images/search.svg" alt="" />

      <input
        type={"search"}
        className={"searchbar"}
        placeholder={"search Friends"}
        {...otherprops}
      />
    </div>
  );
};

export default SearchInput;
