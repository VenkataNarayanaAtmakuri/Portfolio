import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import exam from "../../Assets/Projects/exam.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import bus from "../../Assets/Projects/bus.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exam}
              title="Exam Seating Plan Auto Generation System"
              description="Created a web application to automate exam seat allocation, minimizing manual errors and significantly saving time for exam cell officials. The system supports large-scale allocations, features dynamic seat mapping, user authentication, and a responsive interface to ensure smooth operation across devices and user roles."
              githubLink="https://github.com/VenkataNarayanaAtmakuri/ExamSeatingPlanAutoGenerationSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bus}
              title="Bus Ticket Booking System"
              description="Developed a scalable Bus Ticket Booking System with end-to-end DevOps integration. Leveraged Git, Jenkins, and Docker to implement CI/CD pipelines for automated testing and deployment. The system includes real-time seat booking, user authentication, and admin controls, built using Django and designed for high reliability, faster delivery, and streamlined team collaboration."
              githubLink="https://github.com/VenkataNarayanaAtmakuri/BusTicketBookingSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              title="Song Recommandation ChatBot"
              description="Designed and built a conversational chatbot that recommends songs based on user mood and context. By integrating natural dialogue with mood-based music suggestions, the chatbot enhances user engagement and transforms music discovery into a personalized, interactive experience."
              githubLink="https://github.com/VenkataNarayanaAtmakuri/SongRecommandationChatBot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
