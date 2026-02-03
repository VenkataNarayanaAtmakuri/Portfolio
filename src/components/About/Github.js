import React from "react";
import { Row } from "react-bootstrap";

function Leetcode() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Grind LeetCode</strong>
      </h1>

      <img
        src="https://leetcard.jacoblin.cool/avn512492?theme=dark&ext=heatmap"
        alt="LeetCode stats"
        style={{ maxWidth: "100%" }}
      />
    </Row>
  );
}

export default Leetcode;
