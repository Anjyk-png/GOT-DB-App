import React from "react";
import styled from "styled-components";

import "./item.css";

const Links = styled.div`
  li:hover {
    color: rgb(0, 255, 242);
  }
`;

const Item = ({ onSelected, id, char }) => {
  return (
    <ul className="item-list list-group">
      <Links>
        <li onClick={() => onSelected(id)} className="list-group-item">
          {char}
        </li>
      </Links>
    </ul>
  );
};

export default Item;
