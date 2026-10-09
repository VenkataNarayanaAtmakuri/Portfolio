
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              I'm a passionate Computer Science graduate who enjoys
              turning ideas into practical, scalable, and user-friendly
              software solutions. 🚀

              <br />
              <br />

              My technical expertise includes programming languages
              like{" "}
              <i>
                <b className="purple">
                  Java, Python, C, and JavaScript.
                </b>
              </i>

              <br />
              <br />

              I'm particularly interested in{" "}
              <i>
                <b className="purple">
                  Full-Stack Development, DevOps, Cloud Computing,
                  and Artificial Intelligence.
                </b>
              </i>

              <br />
              <br />

              I enjoy building modern web applications using{" "}
              <b className="purple">
                React.js, Node.js, and Express.js
              </b>
              , while exploring cloud and automation tools like{" "}
              <b className="purple">
                AWS, Docker, Jenkins, and Terraform.
              </b>

              <br />
              <br />

              Through my projects, I aim to combine{" "}
              <b className="purple">
                problem-solving, creativity, and technology
              </b>{" "}
              to develop solutions for real-world challenges.

              <br />
              <br />

              My goal is to continuously learn, embrace new
              technologies, and build impactful software as a{" "}
              <b className="purple">Software Engineer.</b> 💻
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Venky's portfolio avatar"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <p>
              Feel free to{" "}
              <span className="purple">connect</span> with me
              across my social platforms.
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VenkataNarayanaAtmakuri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://x.com/AtmakuriVe58784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="X (Twitter)"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/venkatanarayanaatmakuri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_ursvenky_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
