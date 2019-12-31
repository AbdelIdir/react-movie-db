import React from "react";
import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";
// import styled from "styled-components";
import { Link } from "@reach/router";
import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo
} from "../styles/StyledHeader";

const Header = props => {
  ////////// We are not going to make the styles in this file, this is just an example.
  //////////Instead we create them in a style folder and import them in here for a cleaner component.
  //   const StyledHeader = styled.div`
  //     background: #1c1c1c;
  //     padding: 0 20px;
  //     box-sizing: border-box;

  //     .header-content {
  //       max-width: 1280px;
  //       min-height: 120px;
  //       padding: 20px 0;
  //       margin: 0 auto;
  //       box-sizing: border-box;

  //       @media screen and (max-width: 500px) {
  //         min-height: 0px;
  //       }
  //     }
  //   `;

  //   const StyledRMDBLogo = styled.img`
  //     width: 250px;
  //     margin-top: 20px;
  //   `;

  //   const StyledTMDBLogo = styled.img`
  //     width: 122px;
  //     margin-top: 25px;
  //     float: right;

  //     @media screen and (max-width: 500px;) {
  //       display: inline-block;
  //       width: 80px;
  //       margin-top: 0px;
  //     }
  //   `;
  return (
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
      </div>
    </StyledHeader>
  );
};

export default Header;
