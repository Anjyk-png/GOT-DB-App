import React from "react";
import styled from "styled-components";

import "./itemList.css";

const Links = styled.div`
  li:hover {
    color: rgb(0, 255, 242);
  }
`;

const ItemList = ({ onSelected, id, char }) => {
  return (
    <ul className="item-list list-group">
      <Links>
        <li onClick={() => onSelected(id)} key={id} className="list-group-item">
          {char}
        </li>
      </Links>
    </ul>
  );
};

export default ItemList;
