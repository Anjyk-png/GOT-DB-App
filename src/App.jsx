import React from "react";
import { Col, Row, Container } from "reactstrap";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import service from "./components/services/gotService";
import "./loader.css";
import "./components/ItemList/itemList.css";
import Header from "./components/Header";
import RandomChar from "./components/RandomChar";
import Page from "./components/Page";

const Bod = styled.div`
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
class CharacterPage extends React.Component {
  service = new service();
  render() {
    return (
      <Page
        getData={this.service.getAllCharacters}
        num={41}
        getItem={this.service.getCharacter}
        inf={1}
      />
    );
  }
}
class BookPage extends React.Component {
  service = new service();
  render() {
    return (
      <Page
        getData={this.service.getAllBooks}
        num={1}
        getItem={this.service.getSpecificBook}
        inf={2}
      />
    );
  }
}
class HousePage extends React.Component {
  service = new service();
  render() {
    return (
      <Page
        getData={this.service.getAllHouses}
        num={1}
        getItem={this.service.getSpecificHouse}
        inf={3}
      />
    );
  }
}

export default class App extends React.Component {
  service = new service();

  state = {
    STATE: true,
  };

  clickButton = () => {
    this.setState((state) => ({
      STATE: !state.STATE,
    }));
  };

  clickPage = (id) => {
    if (id === 1) {
      this.setState((state) => ({
        char: !state.char,
        house: false,
        book: false,
      }));
    }
    if (id === 2) {
      this.setState((state) => ({
        house: !state.house,
        book: false,
        char: false,
      }));
    }
    if (id === 3) {
      this.setState((state) => ({
        book: !state.book,
        char: false,
        house: false,
      }));
    }
  };

  render() {
    const char = this.state.STATE ? <RandomChar /> : null;

    return (
      <Router>
        <Bod>
          <Container>
            <Header
              onSelected={[this.state.book, this.state.char, this.state.house]}
              clickPage={this.clickPage}
            />
          </Container>
          <Container>
            <Row>
              <Col lg={{ size: 5, offset: 0 }}>
                {char}
                <Btn onClick={this.clickButton}>Toggle random char</Btn>
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
        </Bod>
      </Router>
    );
  }
}
