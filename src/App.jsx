import React, { useState } from "react";
import { Col, Row, Container } from "reactstrap";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import service from "./services/gotService";
import "./loader.css";
import "./components/Item/item.css";
import Header from "./components/Header";
import RandomChar from "./components/RandomChar";
import Page from "./components/Page";

const Body = styled.div`
  background: #332c2c;
  height: 1100px;
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

const useStyles = makeStyles({
  button: {
    marginLeft: 180,
    marginBottom: 18,
    color: "black",
  },
});

const App = () => {
  const [btnState, setBtnState] = useState(true);
  const classes = useStyles();

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
              <Button
                className={classes.button}
                onClick={clickButton}
                variant="contained"
                color="primary"
              >
                Toggle
              </Button>
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
