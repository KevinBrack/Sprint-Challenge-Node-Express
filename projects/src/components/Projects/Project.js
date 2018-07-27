import React from "react";

const Project = props => {
  console.log("PROJECT PROPS", props);
  return (
    <div>
      <h3>{props.project.name}</h3>
      <p>{props.project.description}</p>
    </div>
  );
};

export default Project;
