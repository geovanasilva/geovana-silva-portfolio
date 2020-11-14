import React from "react";

export default function Card(props) {
  return (
    <div className="card" key={props.id}>
      <div>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
      <img className="card-icon" src={props.icon} alt={props.alt} />
    </div>
  );
}
