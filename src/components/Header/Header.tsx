import React, { useState, memo, FC } from "react";
import styled, { StyledComponent } from "styled-components";
import { Link } from "react-router-dom";

const HeaderBlock: StyledComponent<"div", any, {}, never> = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const HeaderTitle: StyledComponent<"h3", any, {}, never> = styled.h3`
  font-size: 24px;
  color: black;
  margin: 0;
`;

const HeaderLinks: StyledComponent<"ul", any, {}, never> = styled.ul`
  display: flex;
  margin: 0;
  align-items: center;
  color: black;
  list-style-type: none;

  li {
    margin-right: 20px;
    font-size: 18px;
  }
`;

const Header: FC = (): JSX.Element => {
  const [, setActiveLi] = useState<string | undefined>();
  return (
    <HeaderBlock>
      <HeaderTitle
        style={
          window.location.href === "http://localhost:3000/"
            ? { color: "rgb(0, 255, 242)", fontSize: 30 }
            : { color: "black" }
        }
        onClick={() => setActiveLi(undefined)}
      >
        <Link to="/">Main</Link>
      </HeaderTitle>
      <HeaderLinks>
        <li onClick={() => setActiveLi("characters")}>
          <Link
            style={
              window.location.href === "http://localhost:3000/characters/"
                ? { color: "rgb(0, 255, 242)", fontSize: 25 }
                : { color: "black" }
            }
            to="/characters/"
          >
            Characters
          </Link>
        </li>
        <li onClick={() => setActiveLi("houses")}>
          <Link
            style={
              window.location.href === "http://localhost:3000/houses/"
                ? { color: "rgb(0, 255, 242)", fontSize: 25 }
                : { color: "black" }
            }
            to="/houses/"
          >
            Houses
          </Link>
        </li>
        <li onClick={() => setActiveLi("books")}>
          <Link
            style={
              window.location.href === "http://localhost:3000/books/"
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

export default memo(Header);
