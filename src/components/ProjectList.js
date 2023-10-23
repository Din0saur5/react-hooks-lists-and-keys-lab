import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({projects}) {
  
 
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map(project=>{
             return <ProjectItem key={project.id} {... project}/>;
          })
          }
      </div>
    </div>
  );
}

export default ProjectList;
//array is coming in
//loop array and put each into projectitem function
//