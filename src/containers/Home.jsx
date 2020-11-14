import React from "react";
import Header from "@components/Header";
import Card from "@components/Card";
import About from "@components/About";
import Footer from "@components/Footer";
import Computer from "@assets/img/computer.svg";
import HandWriting from "@assets/img/hand-writing.svg";
import Resume from "@assets/img/resume.svg";
import Email from "@assets/img/email.svg";
import Whatsapp from "@assets/img/whatsapp.svg";

export default function Home() {
  const cards = [
    {
      id: 1,
      title: "Projetos",
      subtitle: "Projetos que trabalhei ou participei.",
      icon: Computer,
      alt: "Computer icon",
    },
    {
      id: 2,
      title: "Blog",
      subtitle: "Compartilhando conhecimento.",
      icon: HandWriting,
      alt: "Hand writing icon",
    },
    {
      id: 3,
      title: "Curriculo",
      subtitle: "Um pouco mais sobre mim",
      icon: Resume,
      alt: "Resume icon",
    },
    {
      id: 4,
      title: "Contato",
      subtitle: "Que tal um café?",
      icon: Email,
      alt: "Email icon",
    },
  ];

  return (
    <div>
      <Header />
      <div className="about-wrapper">
        <div>
          {cards.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              alt={item.alt}
            />
          ))}
        </div>
        <About />
      </div>
      <div className="whatsapp">
        <p>Ou pode me chamar por aqui :)</p>
        <img src={Whatsapp} alt="Whatsapp icon" />
      </div>
      <Footer />
    </div>
  );
}
