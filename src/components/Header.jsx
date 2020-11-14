import React from "react";
import Palette from "@assets/img/palette.svg";

export default function Header() {
  return (
    <header>
      <div className="language-badge">
        <p>Pt-Br</p>
      </div>
      <img src={Palette} alt="Palette color icon" />
    </header>
  );
}
