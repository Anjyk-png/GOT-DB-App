import React, { useState, FC } from "react";
import { Col, Row, Container } from "reactstrap";
import styled, { StyledComponent } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import service from "./services/gotService";
import "./loader.css";
import "./components/Item/item.css";
import Header from "./components/Header/Header";
import RandomChar from "./components/RandomChar/RandomChar";
import Page from "./components/Page/Page";

const Body: StyledComponent<"div", any, {}, never> = styled.div`
  background: #332c2c;
  height: 1100px;
`;

const CharacterPage: FC = (): JSX.Element => {
  const mainService: service = new service();

  return (
    <Page
      getData={mainService.getAllCharacters}
      num={41}
      getItem={mainService.getCharacter}
      inf={1}
    />
  );
};
const BookPage: FC = (): JSX.Element => {
  const mainService: service = new service();

  return (
    <Page
      getData={mainService.getAllBooks}
      num={1}
      getItem={mainService.getSpecificBook}
      inf={2}
    />
  );
};

const HousePage: FC = (): JSX.Element => {
  const mainService: service = new service();

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

const App: FC = (): JSX.Element => {
  const [btnState, setBtnState] = useState<boolean>(true);
  const classes = useStyles();

  const clickButton = (): void => {
    setBtnState(!btnState);
  };

  const char: JSX.Element | null = btnState ? <RandomChar /> : null;

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
