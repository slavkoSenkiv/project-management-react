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
  const [mainPartState, setMainPartState] = useState("no project");

  function handleNewProject() {
    setMainPartState("new project");
  }

  function handleAddProject(newProject) {
    setProjectsArr((prevProjectsArr) => [...prevProjectsArr, newProject]);
    setMainPartState("no project");
  }

  function handleLoadProject(project) {
    setMainPartState(project.projectId);
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
          projectId={projectsArr.length}
          projectTitle="new project"
          projectDescription="write here project description"
          taskList={["add your tasks below"]}
          date="1234"
          projects={projectsArr}
          onAddProject={handleAddProject}
        />
      ) : (
        <ProjectPreview
          projectId={project.projectId}
          projectTitle={project.projectName}
          projectDescription={project.description}
          taskList={project.tasks}
          date={project.dateUpdated}
          projects={projectsArr}
          onAddProject={handleAddProject}
        />
      )}
      {mainPartState !== "no project" && mainPartState !== "new project" && (
        <p key="no-project-found">No project found</p>
      )}
    </div>
  );
}

export default App;
