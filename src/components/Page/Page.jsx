import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";

import "../../loader.css";
import "../ItemList/itemList.css";
import ItemList from "../ItemList";
import CharDetails from "../CharDetails";

const HONE = styled.h1`
  color: #9a04ff;
  margin-top: 50px;
  margin-left: 150px;
`;
const Err = styled.div`
  display: flex;
  justify-content: center;
  background: red;
  border-radius: 5px;
  border: 1px solid white;
`;

export default class Page extends React.Component {
  state = {
    char: [],
    loading: true,
    selected: null,
    error: false,
  };

  componentDidMount() {
    this.builList();
  }

  builList() {
    const { getData } = this.props;
    getData().then((data) => {
      this.setState(() => ({
        char: data,
        loading: false,
      }));
    });
  }

  onSelected = (id) => {
    this.setState(() => ({ selected: id }));
  };

  componentDidCatch() {
    this.setState(() => ({
      error: true,
    }));
  }

  render() {
    if (this.state.error) {
      return (
        <Err>
          <h2>Something goes wrong.... =(</h2>
        </Err>
      );
    }

    const itemL = this.state.char.map((char, i) => (
      <>
        <ItemList
          key={i}
          id={i}
          char={char.name}
          gender={char.gender}
          onSelected={this.onSelected}
        />
      </>
    ));
    const itemLisT = (
      <>
        <div className="loading">
          <div className="ldio">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    );
    const charDet =
      this.state.selected || this.state.selected === 0 ? (
        <CharDetails
          inf={this.props.inf}
          num={this.props.num}
          getItem={this.props.getItem}
          id={this.state.selected}
        />
      ) : (
        <HONE>Select something</HONE>
      );

    return (
      <Row>
        <Col md="6">{this.state.loading ? itemLisT : itemL}</Col>
        <Col md="6">{charDet}</Col>
      </Row>
    );
  }
}
