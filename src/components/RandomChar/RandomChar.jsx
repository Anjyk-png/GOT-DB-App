import React, { useState, useEffect } from "react";

import "./randomChar.css";
import "../CharDetails/charDetails.css";
import GotService from "../../services/gotService";

const RandomChar = () => {
  const [charData, setCharData] = useState({
    born: null,
    culture: null,
    died: null,
    father: null,
    gender: null,
    mother: null,
    name: null,
  });
  const [loading, setLoading] = useState(true);
  const service = new GotService();
  useEffect(() => {
    changeState();
    let timerId = setInterval(changeState, 4000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  function changeState() {
    const id = Math.floor(Math.random() * 140 + 25);
    service.getCharacter(id).then((data) => {
      setCharData({
        born: data.born ? data.born : "no data =)",
        culture: data.culture ? data.culture : "no data =)",
        died: data.died ? data.died : "no data =)",
        father: data.father ? data.father : "no data =)",
        gender: data.gender ? data.gender : "no data =)",
        mother: data.mother ? data.mother : "no data =)",
        name: data.name ? data.name : "no data =)",
      });
      setLoading(false);
    });
  }

  if (loading) {
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
      <h4>Random Character: {charData.name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{charData.gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{charData.born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{charData.died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{charData.culture}</span>
        </li>
      </ul>
    </div>
  );
};

export default RandomChar;
