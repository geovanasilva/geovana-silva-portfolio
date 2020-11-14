import React from "react";
import Linkedin from "@assets/img/linkedin.svg";
import Github from "@assets/img/github.svg";
import Twitter from "@assets/img/twitter.svg";
import programmerGirl from "@assets/img/programmerGirl.png";
import Geovana from "@assets/img/geovana.jpg";

export default function Footer() {
  const socials = [
    {
      id: 1,
      title: "Linkedin",
      icon: Linkedin,
      alt: "Linkedin icon",
      link: "https://www.linkedin.com/in/geovanasilva/",
    },
    {
      id: 2,
      title: "Github",
      icon: Github,
      alt: "Github icon",
      link: "https://github.com/geovanasilva",
    },
    {
      id: 3,
      title: "Twitter",
      icon: Twitter,
      alt: "Twitter icon",
      link: "https://twitter.com/olageovana",
    },
  ];

  return (
    <footer>
      <div className="footer-social">
        <img className="profile" src={Geovana} alt="Profile Pic" />
        {socials.map((item) => (
          <div className="socials" key={item.id}>
            <img src={item.icon} alt={item.alt} />
            <a href={item.link} target="_blank">
              <p>{item.title}</p>
            </a>
          </div>
        ))}
      </div>
      <img src={programmerGirl} alt="programmer girl" />
    </footer>
  );
}
