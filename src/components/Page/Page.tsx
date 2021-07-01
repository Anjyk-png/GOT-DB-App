import React, { useCallback, useEffect, useState, useMemo, FC } from "react";
import { Col, Row } from "reactstrap";
import styled, { StyledComponent } from "styled-components";

import "../../loader.css";
import "../Item/item.css";
import Item from "../Item/Item";
import CharDetails from "../CharDetails/CharDetails";

const Recomendation: StyledComponent<"h1", any, {}, never> = styled.h1`
  color: black;
  margin-top: 50px;
  margin-left: 150px;
  font-family: Roboto;
`;

interface IPage {
  getData: () => Promise<any>;
  inf: number;
  num: number;
  getItem: (id: number) => Promise<any>;
}

type charType = any | never[];

const Page: FC<IPage> = ({ getData, inf, num, getItem }): JSX.Element => {
  const [char, setChar] = useState<charType>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selected, setSelected] = useState<number | null>(null);

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

  const onSelected = (id: number): void => {
    setSelected(id);
  };

  const itemL: Array<JSX.Element> = useMemo(() => {
    const list: Array<JSX.Element> = char.map((char: charType, i: number) => (
      <>
        <Item
          key={Math.floor(Math.random() * 1000000000000000)}
          id={i}
          char={char.name}
          onSelected={onSelected}
        />
      </>
    ));
    return list;
  }, [char]);
  const loadGif: JSX.Element = (
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
  const charDet: JSX.Element =
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
