import React from "react";

export default function Card(props) {
  return (
    <div className="skill-badge" key={props.id}>
      <img className="skill-badge-icon" src={props.icon} alt={props.alt} />
    </div>
  );
}
