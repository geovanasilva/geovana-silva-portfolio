import React from "react";
import Html from "@assets/img/html.svg";
import Css from "@assets/img/css.svg";
import Javascript from "@assets/img/javascript.svg";
import ReactJs from "@assets/img/react.svg";
import SkillBadge from "@components/SkillBadge";

export default function About() {
  const skillBadge = [
    {
      id: 1,
      icon: Html,
      alt: "Html icon",
    },
    {
      id: 2,
      icon: Css,
      alt: "Css icon",
    },
    {
      id: 3,
      icon: Javascript,
      alt: "Javascript icon",
    },
    {
      id: 4,
      icon: ReactJs,
      alt: "React icon",
    },
  ];

  return (
    <div className="about">
      <h2>Sobre mim</h2>
      <h1>Geovana Silva</h1>
      <h3>Desenvolvedora frontend</h3>
      <p>
        Uma profissional de TI motivada,criativa e ambiciosa, comproficiência em
        HTML, Javascript,CSS, React e Redux que possuiuma boa capacidade
        decomunicação e trabalho emequipe, procura efetivamentecandidatar-se à
        posição dedesenvolvedora frontend.
      </p>
      <div className="skills">
        <p>Habilidades em:</p>
        {skillBadge.map((item) => (
          <SkillBadge key={item.id} icon={item.icon} alt={item.alt} />
        ))}
      </div>
    </div>
  );
}
