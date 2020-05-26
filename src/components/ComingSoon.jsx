import React from "react";
import linkedin from "@assets/img/linkedin.svg";
import github from "@assets/img/github.svg";
import email from "@assets/img/email.svg";
import catGif from "@assets/img/cat.gif";

const ComingSoon = () => {
  return (
    <div>
      <main>
        <img src={catGif} alt="Gif of a cat waiting" />
        <h1>Coming Soon</h1>
        <p>
          My portfolio is under construction 🚧, but you can find me at the
          links below.
        </p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/geovanasilva/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/geovanasilva" target="_blank">
            <img src={github} alt="Github" />
          </a>
          <a href="mailto:sts.geovana@gmail.com">
            <img src={email} alt="Email" />
          </a>
        </div>
      </main>
      <footer>
        <p>© Geovana Silva - 2020</p>
      </footer>
    </div>
  );
};

export default ComingSoon;
