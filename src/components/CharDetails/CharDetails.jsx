import React, { Component } from "react";

import "./charDetails.css";
import service from "../services/gotService";

export default class CharDetails extends Component {
  service = new service();

  state = {
    charDet: [],
  };

  componentDidMount() {
    this.updateCharDet();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.updateCharDet();
    }
  }

  updateCharDet = () => {
    const { getItem } = this.props;
    this.setState(() => ({
      charDet: [],
    }));
    getItem(this.props.id + this.props.num).then((data) => {
      this.setState(() => ({
        charDet: data,
      }));
    });
  };

  render() {
    const { inf } = this.props;
    let label1,
        label2,
        label3,
        label4,
        label5,
        label1Inf,
        label2Inf,
        label3Inf,
        label5Inf;

    if (inf === 2) {
      const { country, isbn, mediaType, name, numberOfPages } =
        this.state.charDet;
      label1 = country;
      label2 = isbn;
      label3 = mediaType;
      label4 = name;
      label5 = numberOfPages;
      label1Inf = "Country";
      label2Inf = "ISBN";
      label3Inf = "MediaType";
      label5Inf = "NumberOfPages";
    } else if (inf === 1) {
      const { name, culture, gender, born, died } = this.state.charDet;
      label1 = gender;
      label3 = died;
      label2 = born;
      label4 = name;
      label5 = culture;
      label1Inf = "Gender";
      label2Inf = "Born";
      label3Inf = "Died";
      label5Inf = "Culture";
    } else if (inf === 3) {
      const { name, region, founded } = this.state.charDet;
      switch (this.props.id) {
        case 0:
          label3 = null;
          label5 = null;
          break;
        case 1:
          label3 = null;
          label5 = "Delonne Allyrion";
          break;
        case 2:
          label3 = null;
          label5 = null;
          break;
        case 3:
          label3 = null;
          label5 = "Arthur Ambrose";
          break;
        case 4:
          label3 = null;
          label5 = null;
          break;
        case 5:
          label3 = null;
          label5 = null;
          break;
        case 6:
          label3 = "Artys I Arryn";
          label5 = "Robert Arryn";
          break;
        case 7:
          label3 = null;
          label5 = null;
          break;
        case 8:
          label3 = null;
          label5 = null;
          break;
        case 9:
          label3 = "Petyr Baelish";
          label5 = "Petyr Baelish";
          break;
        default:
          return;
      }

      label1 = region;
      label2 = founded;
      label4 = name;
      label1Inf = "Region";
      label2Inf = "Founded";
      label3Inf = "Founder";
      label5Inf = "CurrentLord";
    }

    let ver = (
      <>
        <h4>{label4}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label1Inf}</span>
            <span>{label1 ? label1 : "no data =)"}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label2Inf}</span>
            <span>{label2 ? label2 : "no data =)"}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label3Inf}</span>
            <span>{label3 ? label3 : "no data =)"}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label5Inf}</span>
            <span>{label5 ? label5 : "no data =)"}</span>
          </li>
        </ul>
      </>
    );
    if (!label4) {
      ver = (
        <div className="loadingio-spinner-ellipsis-bmjj91aji4b">
          <div className="ldio-5kb2empswf4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }
    return <div className="char-details rounded">{ver}</div>;
  }
}
