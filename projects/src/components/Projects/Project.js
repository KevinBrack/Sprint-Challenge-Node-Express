import React from "react";
import styled from "styled-components";

const GreenHeader = styled.h3`
  color: #d7fe82;
`;

const Project = props => {
  console.log("PROJECT PROPS", props);
  return (
    <div>
      <GreenHeader>{props.project.name}</GreenHeader>
      <p>{props.project.description}</p>
    </div>
  );
};

export default Project;
