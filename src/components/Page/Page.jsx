import React, { useCallback, useEffect, useState, useMemo } from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";

import "../../loader.css";
import "../Item/item.css";
import Item from "../Item";
import CharDetails from "../CharDetails";

const Recomendation = styled.h1`
  color: black;
  margin-top: 50px;
  margin-left: 150px;
  font-family: Roboto;
`;

const Page = ({ getData, inf, num, getItem }) => {
  const [char, setChar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const memBuildList = useCallback(
    function buildList() {
      getData().then((data) => {
        setChar(data);
        setLoading(false);
      });
    },
    [getData]
  );

  useEffect(() => {
    memBuildList();
  }, [inf, memBuildList]);

  const onSelected = (id) => {
    setSelected(id);
  };

  const itemL = useMemo(() => {
    const list = char.map((char, i) => (
      <>
        <Item
          key={Math.floor(Math.random() * 1000000000000000)}
          id={i}
          char={char.name}
          gender={char.gender}
          onSelected={onSelected}
        />
      </>
    ));
    return list;
  }, [char]);
  const loadGif = (
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
      <Col md="6">{loading ? loadGif : itemL}</Col>
      <Col md="6">{charDet}</Col>
    </Row>
  );
};

export default Page;
