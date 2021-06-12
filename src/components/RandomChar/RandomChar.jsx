import React, { Component } from "react";

import "./randomChar.css";
import "../CharDetails/charDetails.css";
import GotService from "../services/gotService";

export default class RandomChar extends Component {
  service = new GotService();

  state = {
    born: null,
    culture: null,
    died: null,
    father: null,
    gender: null,
    mother: null,
    name: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.changeState();
    this.timerId = setInterval(this.changeState, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  changeState = () => {
    const id = Math.floor(Math.random() * 140 + 25);
    this.service.getCharacter(id).then((data) =>
      this.setState(() => ({
        born: data.born ? data.born : "no data =)",
        culture: data.culture ? data.culture : "no data =)",
        died: data.died ? data.died : "no data =)",
        father: data.father ? data.father : "no data =)",
        gender: data.gender ? data.gender : "no data =)",
        mother: data.mother ? data.mother : "no data =)",
        name: data.name ? data.name : "no data =)",
        loading: false,
      }))
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="random-block rounded">
          <div className="loadingio-spinner-ellipsis-bmjj91aji4b">
            <div className="ldio-5kb2empswf4">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="random-block rounded">
        <h4>Random Character: {this.state.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender </span>
            <span>{this.state.gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born </span>
            <span>{this.state.born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died </span>
            <span>{this.state.died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture </span>
            <span>{this.state.culture}</span>
          </li>
        </ul>
      </div>
    );
  }
}
