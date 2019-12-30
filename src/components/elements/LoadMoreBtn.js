import React from "react";
import { StyledLoadMoreBtn } from "../styles/StyledLoadMoreBtn";

const LoadMoreBtn = ({ text, callback }) => (
  <StyledLoadMoreBtn type="button" onclick={callback}>
    {text}
  </StyledLoadMoreBtn>
);

export default LoadMoreBtn;
