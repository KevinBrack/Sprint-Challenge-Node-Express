import React from "react";
import Project from "./Project";

import styled from "styled-components";

const ProjectWrapper = styled.div`
  margin: 0 auto;
  margin-top: 10rem;
  border: 1px solid #f2697b;
  max-width: 90vw;
`;

const Projects = props => {
  console.log("PROJECTS PROPS", props);
  return (
    <ProjectWrapper>
      {props.projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ProjectWrapper>
  );
};

export default Projects;
