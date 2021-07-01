import React, { FC } from "react";
import styled, { StyledComponent } from "styled-components";

import "./item.css";

const Links: StyledComponent<"div", any, {}, never> = styled.div`
  li:hover {
    color: rgb(0, 255, 242);
  }
`;

interface IItem {
  onSelected: (id: number) => void
  id: number
  char: string
}

const Item: FC<IItem> = ({ onSelected, id, char }): JSX.Element => {
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
