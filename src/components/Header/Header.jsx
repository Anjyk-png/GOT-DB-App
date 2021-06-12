import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const HeaderTitle = styled.h3`
  font-size: 24px;
  color: black;
  margin: 0;

  a:hover {
    color: rgb(0, 255, 242);
  }
`;

const HeaderLinks = styled.ul`
  display: flex;
  margin: 0;
  align-items: center;
  color: black;
  list-style-type: none;

  li {
    margin-right: 20px;
    font-size: 18px;
  }
  a:hover {
    color: rgb(0, 255, 242);
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderTitle>
        <Link to="/">Game of Thrones DB</Link>
      </HeaderTitle>
      <HeaderLinks>
        <li>
          <Link to="/characters/">Characters</Link>
        </li>
        <li>
          <Link to="/houses/">Houses</Link>
        </li>
        <li>
          <Link to="/books/">Books</Link>
        </li>
      </HeaderLinks>
    </HeaderBlock>
  );
};

export default Header;
