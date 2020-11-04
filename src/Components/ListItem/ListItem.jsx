import React, { useState } from 'react';
import './listitem.css';

export default function ListItem(props) {
  const [isHidden, setIsHidden] = useState(false);

  const toggleInfo = (e) => {
    setIsHidden(!isHidden);
    const info = document.getElementById(props.name);
    if (isHidden === true) {
      info.style.visibility = 'visible';
    } else if (isHidden === false) {
      info.style.visibility = 'hidden';
    }
  };

  return (
    <div className="list-item">
      <div className="char-head" onClick={toggleInfo}>
        <p className="character-name">{props.name}</p>
        <p className="list-btn">
          <i className="fas fa-chevron-circle-down"></i>
        </p>
      </div>
      <div className="char-body" id={props.name}>
        <p>
          <b>Created:</b> {props.created}
        </p>
        <p>
          <b>Birth Year:</b> {props.birthYear}
        </p>
        <p>
          <b>Gender:</b> {props.gender}
        </p>
        <p>
          <b>Height:</b> {props.height}cm
        </p>
        <p>
          <b>Weight:</b> {props.mass}kg
        </p>
        <p>
          <b>Skin Color:</b> {props.skinColor}
        </p>
        <p>
          <b>Hair Color:</b> {props.hairColor}
        </p>
        <p>
          <b>Eye Color:</b> {props.eyeColor}
        </p>
      </div>
    </div>
  );
}
