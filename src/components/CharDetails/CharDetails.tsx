import React, { useEffect, useState, FC } from "react";

import "./charDetails.css";

interface IBookDetails {
  country: string;
  isbn: string;
  mediaType: string;
  name: string;
  numberOfPages: number;
}

interface ICharacterDetails {
  [key: string]: string;
}

interface IHouseDetails {
  [key: string]: string;
}

interface ICharDetailsProps {
  id: number;
  getItem: (id: number) => Promise<any>;
  num: number;
  inf: number;
}

type LabelType = string | null;

type CharDetailsType =
  | ICharacterDetails
  | IBookDetails
  | IHouseDetails
  | never[];

const CharDetails: FC<ICharDetailsProps> = ({ id, getItem, num, inf }): JSX.Element => {
  const [charDet, setCharDet] = useState<CharDetailsType>([]);

  const updateCharDet = () => {
    setCharDet([]);
    getItem(id + num).then((data: CharDetailsType) => {
      setCharDet(data);
    });
  };

  useEffect(() => {
    updateCharDet();
  }, [id]);

  let label1: LabelType = null,
    label2: LabelType = null,
    label3: LabelType = null,
    label4: LabelType = null,
    label5: LabelType | number = null,
    label1Inf: LabelType = null,
    label2Inf: LabelType = null,
    label3Inf: LabelType = null,
    label5Inf: LabelType = null;

  if (inf === 1) {
    const { name, culture, gender, born, died }: any = charDet;
    label1 = gender;
    label3 = died;
    label2 = born;
    label4 = name;
    label5 = culture;
    label1Inf = "Gender";
    label2Inf = "Born";
    label3Inf = "Died";
    label5Inf = "Culture";
  } else if (inf === 2) {
    const { country, isbn, mediaType, name, numberOfPages }: any = charDet;
    label1 = country;
    label2 = isbn;
    label3 = mediaType;
    label4 = name;
    label5 = numberOfPages;
    label1Inf = "Country";
    label2Inf = "ISBN";
    label3Inf = "MediaType";
    label5Inf = "NumberOfPages";
  } else if (inf === 3) {
    const { name, region, founded }: any = charDet;
    switch (id) {
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
        return <></>;
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
};

export default CharDetails;
