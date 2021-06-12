import React, { Component } from "react";
import styled from "styled-components";

import "./itemList.css";

const Li = styled.div`
  li:hover {
    color: rgb(0, 255, 242);
  }
`;

export default class ItemList extends Component {
  render() {
    return (
      <ul className="item-list list-group">
        <Li>
          <li
            onClick={() => this.props.onSelected(this.props.id)}
            key={this.props.id}
            className="list-group-item"
          >
            {this.props.char}
          </li>
        </Li>
      </ul>
    );
  }
}
