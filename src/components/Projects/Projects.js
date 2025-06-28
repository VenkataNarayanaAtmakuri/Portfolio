import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import scholorship from "../../Assets/Projects/scholarship.png";
import student from "../../Assets/Projects/student.png";
import bus from "../../Assets/Projects/bus.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scholorship}
              isBlog={false}
              title="A Scholarship Management System Using Java and Spring Boot 🎓"
              description="With the rising costs of education, scholarships have become an essential resource for students. However, managing applications, keeping track of deadlines, and ensuring transparency in the selection process is often a challenge for both students and administrators. To address this, I developed ScholarshipHub, a comprehensive scholarship management system built using Java Spring Boot and MySQL."
              linkedinLink="https://www.linkedin.com/pulse/building-scholarshiphub-scholarship-management-system-atmakuri-h9lzc/?trackingId=mSZXcDbRSG21QFJt6dG4NA%3D%3D"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student}
              isBlog={false}
              title="STUDENT LEARNING MANAGEMENT SYSTEM"
              description="In today's rapidly evolving educational landscape, the fusion of technology with traditional teaching methodologies has emerged as a cornerstone for academic excellence. Among the most transformative initiatives gaining widespread recognition are Student Learning Management System (LMS) projects. These groundbreaking endeavors are revolutionizing education by providing a centralized platform for students, educators, and administrators to collaborate, communicate, and streamline the learning process."
              linkedinLink="https://www.linkedin.com/pulse/student-learning-management-system-venky-atmakuri-nywvc/?trackingId=mSZXcDbRSG21QFJt6dG4NA%3D%3D"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bus}
              isBlog={false}
              title="BUS TICKET BOOKING APPLICATION"
              description="In today's fast-paced world, where convenience and efficiency are paramount, the travel industry has witnessed remarkable advancements in technology that have transformed the way we plan and book our journeys. Among these innovations, the bus ticket booking system stands out as a crucial component of modern travel solutions. With the integration of cutting-edge technology, bus ticket booking systems have evolved from traditional counter-based processes to online platforms that offer seamless, user-friendly experiences. This article delves into the evolution and benefits of bus ticket booking systems, highlighting their significance in the travel industry."
              linkedinLink="https://www.linkedin.com/pulse/bus-ticket-booking-application-venky-atmakuri/?trackingId=mSZXcDbRSG21QFJt6dG4NA%3D%3D"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
