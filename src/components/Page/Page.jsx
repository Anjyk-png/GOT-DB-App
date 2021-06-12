import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";

import "../../loader.css";
import "../ItemList/itemList.css";
import ItemList from "../ItemList";
import CharDetails from "../CharDetails";

const Recomendation = styled.h1`
  color: #9a04ff;
  margin-top: 50px;
  margin-left: 150px;
`;

const Page = ({ getData, inf, num, getItem }) => {
  const [char, setChar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    buildList();
  });

  function buildList() {
    getData().then((data) => {
      setChar(data);
      setLoading(false);
    });
  }

  const onSelected = (id) => {
    setSelected(id);
  };

  const itemL = char.map((char, i) => (
    <>
      <ItemList
        key={i}
        id={i}
        char={char.name}
        gender={char.gender}
        onSelected={onSelected}
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
    selected || selected === 0 ? (
      <CharDetails inf={inf} num={num} getItem={getItem} id={selected} />
    ) : (
      <Recomendation>Select something</Recomendation>
    );

  return (
    <Row>
      <Col md="6">{loading ? itemLisT : itemL}</Col>
      <Col md="6">{charDet}</Col>
    </Row>
  );
};

export default Page;
