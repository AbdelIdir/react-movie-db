import React, { useState, useRef } from "react";
import FontAwesome from "react-fontawesome";
import {
  StyleSearchBar,
  StyleSearchBarContent,
  StyledSearchBar,
  StyledSearchBarContent
} from "../styles/StyledSearchBar";

const SearchBar = ({ callback }) => {
  const [state, setState] = useState("");
  const timeOut = useRef(null);

  const doSearch = event => {
    console.log(event.target.value);
    const { value } = event.target;
    setState(value);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};
export default SearchBar;
