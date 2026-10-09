
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm{" "}
            <span className="purple">
              Venkata Narayana Atmakuri
            </span>{" "}
            from{" "}
            <span className="purple">
              Vijayawada, Andhra Pradesh, India.
            </span>
            <br />
            <br />

            I am a Computer Science and Engineering graduate from{" "}
            <span className="purple">KL University</span>, with a
            passion for software development, problem-solving, and
            exploring emerging technologies.
            <br />
            <br />

            My interests include{" "}
            <span className="purple">
              Full-Stack Development, DevOps, Cloud Computing, and
              Artificial Intelligence.
            </span>{" "}
            I enjoy transforming ideas into practical applications
            and continuously improving my technical skills.
            <br />
            <br />

            Apart from coding, here are a few things I enjoy!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and discovering new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Building creative side projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>

          <footer className="blockquote-footer">
            Venkata Narayana Atmakuri
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
