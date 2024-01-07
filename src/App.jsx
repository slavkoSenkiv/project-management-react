import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import ProjectPreview from "./components/ProjectPreview";

function App() {

  const defProjectsCollection = [
    {
      projectName: "project 1",
      dateUpdated: "1111",
      description: "description for project 1",
      tasks: ["task 1a", "task 1b", "task 1c"],
    },
    {
      projectName: "project 2",
      dateUpdated: "2222",
      description: "description for project 2",
      tasks: ["task 2a", "task 2b", "task 2c"],
    }
  ] ;


  const [projectsArr, setProjectsArr] = useState(defProjectsCollection);
  const [mainPartState, setMainPartState] = useState("no project");

  function handleNewProject() {
    setMainPartState("new project");
  }

  function handleAddProject(newProject) {
    setProjectsArr((prevProjectsArr) => [...prevProjectsArr, newProject]);
    setMainPartState("no project");
  }

  function handleLoadProject(project) {
    setMainPartState(project.projectName);
    console.log(mainPartState);
  }

  return (
    <div className="flex h-screen">
      <Sidebar
        projects={projectsArr}
        onProjectClick={handleLoadProject}
        addProjectClick={handleNewProject}
      />

      {mainPartState === "no project" ? (
        <NoProjectSelected addProjectClick={handleNewProject} />
      ) : mainPartState === "new project" ? (
        <ProjectPreview
          projectTitle="new project"
          date="1234"
          projectDescription="write here project description"
          taskList={[]}
          projects={projectsArr}
          onAddProject={handleAddProject}
        />
      ) : (
        projectsArr.map((project) => {
          if (project.projectName === mainPartState) {
            return (
              <ProjectPreview
                key={project.projectName}
                projectTitle={project.projectName}
                date={project.dateUpdated}
                projectDescription={project.description}
                taskList={project.tasks}
                projects={projectsArr}
                onAddProject={handleAddProject}
              />
            );
          }
        return <p key={1}>no project founded</p>;
        })
      )}
    </div>
  );
}

export default App;
