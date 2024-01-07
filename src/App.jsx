import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import ProjectPreview from "./components/ProjectPreview";

function App() {
  const defProjectsCollection = [
    {
      projectId: 1,
      projectName: "project 1",
      description: "description for project 1",
      tasks: ["task 1a", "task 1b", "task 1c"],
      dateUpdated: "1111",
    },
    {
      projectId: 2,
      projectName: "project 2",
      description: "description for project 2",
      tasks: ["task 2a", "task 2b", "task 2c"],
      dateUpdated: "2222",
    },
  ];

  const [projectsArr, setProjectsArr] = useState(defProjectsCollection);
  const [mainPartState, setMainPartState] = useState(-1);

  function handleNewProject() {
    setMainPartState(1);
  }

  function handleLoadProject(project) {
    setMainPartState(project.projectId);
  }

  function handleUpdateExistingProject(existingProject) {
    setProjectsArr((prevProjectsArr) => {
      const index = prevProjectsArr.findIndex(
        (project) => project.projectId === existingProject.projectId
      );
  
      if (index !== -1) {
        // Update existing project
        prevProjectsArr[index] = existingProject;
      } else {
        // Handle case where the project is not found
        console.error("Project not found for updating.");
      }
  
      return [...prevProjectsArr];
    });
  
    setMainPartState(-1);
  }
  
  function handleSaveNewProject(newProject) {
    newProject.projectId = projectsArr.length + 1;
    setProjectsArr((prevProjectsArr) => [...prevProjectsArr, newProject]);
    setMainPartState(-1);
  }
  

  return (
    <div className="flex h-screen">
      <Sidebar
        projects={projectsArr}
        onProjectClick={handleLoadProject}
        addProjectClick={handleNewProject}
      />

      {mainPartState === -1 ? (
        <NoProjectSelected addProjectClick={handleNewProject} />
      ) : mainPartState === 0 ? (
        <ProjectPreview
          projectId={projectsArr.length + 1}
          projectTitle="new project"
          projectDescription="write here project description"
          taskList={["add your tasks below"]}
          date="1234"
          projects={projectsArr}
          onSaveProject={handleSaveNewProject}
        />
      ) : (
        projectsArr.map((project) => {
          if (mainPartState === project.projectId) {
            return (
              <ProjectPreview
                key={project.projectId}
                projectId={project.projectId}
                projectTitle={project.projectName}
                projectDescription={project.description}
                taskList={project.tasks}
                date={project.dateUpdated}
                projects={projectsArr}
                onSaveProject={handleUpdateExistingProject}
              />
            );
          }
          {
            mainPartState !== "no project" &&
              mainPartState !== "new project" && (
                <p key="no-project-found">No project found</p>
              );
          }
        })
      )}
    </div>
  );
}

export default App;
