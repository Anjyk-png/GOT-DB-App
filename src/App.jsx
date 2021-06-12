import React, { useState } from "react";
import { Col, Row, Container } from "reactstrap";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import service from "./services/gotService";
import "./loader.css";
import "./components/ItemList/itemList.css";
import Header from "./components/Header";
import RandomChar from "./components/RandomChar";
import Page from "./components/Page";

const Body = styled.div`
  background: #332c2c;
  height: 1100px;
`;

const Btn = styled.button`
  width: 200px;
  height: 40px;
  margin-bottom: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  color: black;
  font-size: 18px;
  background-color: #9a04ff;
  transition: 0.3s;
  :hover {
    background-color: rgb(0, 255, 242);
    color: black;
  }
`;
const CharacterPage = () => {
  const mainService = new service();

  return (
    <Page
      getData={mainService.getAllCharacters}
      num={41}
      getItem={mainService.getCharacter}
      inf={1}
    />
  );
};
const BookPage = () => {
  const mainService = new service();

  return (
    <Page
      getData={mainService.getAllBooks}
      num={1}
      getItem={mainService.getSpecificBook}
      inf={2}
    />
  );
};

const HousePage = () => {
  const mainService = new service();

  return (
    <Page
      getData={mainService.getAllHouses}
      num={1}
      getItem={mainService.getSpecificHouse}
      inf={3}
    />
  );
};

const App = () => {
  const [btnState, setBtnState] = useState(true);

  const clickButton = () => {
    setBtnState(!btnState);
  };

  const char = btnState ? <RandomChar /> : null;

  return (
    <Router>
      <Body>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {char}
              <Btn onClick={clickButton}>Toggle random char</Btn>
            </Col>
          </Row>
          <Route
            path="/"
            exact
            render={() => (
              <h1
                style={{
                  marginLeft: 380 + "px",
                  marginTop: 100 + "px",
                  color: "black",
                }}
              >
                Welcome to GOT DB
              </h1>
            )}
          />
          <Route path="/characters" component={CharacterPage} />
          <Route path="/books" component={BookPage} />
          <Route path="/houses" component={HousePage} />
        </Container>
      </Body>
    </Router>
  );
};

export default App;
