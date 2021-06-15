import React, { useState } from "react";
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
  const [activeLi, setActiveLi] = useState("");
  return (
    <HeaderBlock>
      <HeaderTitle
        style={
          activeLi === ""
            ? { color: "rgb(0, 255, 242)", fontSize: 30 }
            : { color: "black" }
        }
        onClick={() => setActiveLi("")}
      >
        <Link to="/">Main</Link>
      </HeaderTitle>
      <HeaderLinks>
        <li onClick={() => setActiveLi("char")}>
          <Link
            style={
              activeLi === "char"
                ? { color: "rgb(0, 255, 242)", fontSize: 25 }
                : { color: "black" }
            }
            to="/characters/"
          >
            Characters
          </Link>
        </li>
        <li onClick={() => setActiveLi("hous")}>
          <Link
            style={
              activeLi === "hous"
                ? { color: "rgb(0, 255, 242)", fontSize: 25 }
                : { color: "black" }
            }
            to="/houses/"
          >
            Houses
          </Link>
        </li>
        <li onClick={() => setActiveLi("book")}>
          <Link
            style={
              activeLi === "book"
                ? { color: "rgb(0, 255, 242)", fontSize: 25 }
                : { color: "black" }
            }
            to="/books/"
          >
            Books
          </Link>
        </li>
      </HeaderLinks>
    </HeaderBlock>
  );
};

export default Header;
