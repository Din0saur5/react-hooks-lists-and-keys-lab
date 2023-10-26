import React from "react";

function ProjectItem({project}) {
  const {name, about, technologies} = project
  const techElements = technologies.map((technology)=>{
    return <span key={technology}>{technology}</span>;
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techElements}
      </div>
    </div>
  );
}

export default ProjectItem;

